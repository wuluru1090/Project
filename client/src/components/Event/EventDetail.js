import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

// import '../../style/default.scss'
import '../../style/event/event_detail.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'

//DatePicker
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

// 元素
import EventDetailInfo from './EventDetailInfo'
import GMap from './GMap'
import EventDetailAttendant from './EventDetailAttendant'
import EventForum from './EventForum'
import EventRelativeCarousel from './EventRelativeCarousel'
import EventFixedBottom from './EventFixedBottom'
import EventBreadCrumb from './EventBreadCrumb'

//connect with backend
import Axios from 'axios'

//GMap地圖Pin標記位置
const location = {
  address: '320桃園市中壢區中大路300號',
  lat: 24.96803,
  lng: 121.19498,
}

function EventDetail(props) {
  window.scrollTo(0, 0)
  const eventId = props.match.params.id
  const loginId = 1

  //是否收藏
  const [isActive, setIsActive] = useState(false)

  //設定活動&日曆資料
  const [eventDataList, setEventDataList] = useState([])
  const [calenderValue, setCalenderValue] = useState([
    new Date('2021-01-15'),
    new Date('2021-01-15'),
  ])
  //設定標籤
  const [tags, setTags] = useState([])

  //設定是否購買過活動
  const [bought, setBought] = useState(true)

  //取得後端活動資料
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/${eventId}`)
      .then((response) => {
        setEventDataList(response.data)
        setCalenderValue([
          new Date(dateConvert(response.data[0].event_start_time).toString()),
          new Date(dateConvert(response.data[0].event_end_time).toString()),
        ])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const getTag = () => {
    Axios.get(`http://localhost:3001/api/eventtags/${eventId}`)
      .then((response) => {
        // console.log(response.data)
        setTags(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  //取得標籤資料
  useEffect(() => {
    if (eventDataList.length > 0) {
      getTag()
    }
  }, [eventDataList])

  // useEffect(() => {
  //   Axios.get(
  //     `http://localhost:3001/api/eventwasbought?eventId=${eventId}&valid=1&memberId=${loginId}`
  //   ).then((response) => {})
  // })

  //單獨轉換json日期
  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')

    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1

    let yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }
  //單獨轉換json時間
  function timeConvert(jsonTime) {
    let json = String(jsonTime).split(' ')

    let time = new Date(json[0])
    let arrayTime = String(time).split(' ')
    let takeOutTime = String(arrayTime[4]).split(':')
    time = takeOutTime[0] + ':' + takeOutTime[1]

    return time
  }

  //天數計算機
  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  //google-calendar
  var gapi = window.gapi
  var CLIENT_ID =
    '174229856763-cq1jkibeg8q2cslpv9ucm2ipfg7tprom.apps.googleusercontent.com'
  var API_KEY = 'AIzaSyAIBLXuAyCP3ZNKP4mh46LUs_we02jvUJE'
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]
  var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load(`calendar`, 'v3', () => console.log(`bam!`))

      gapi.auth2.getAuthInstance().signIn()
    })
  }

  //確認是否有收藏
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/save?eventId=${eventId}&memId=${loginId}`
    ).then((response) => {
      // console.log(response.data)
      if (response.data.length > 0) setIsActive(true)
    })
  }, [])

  const writeLike = () => {
    // if (!isActive)
    Axios.post('http://localhost:3001/api/save', {
      likeEventId: eventId,
      likeMemberId: loginId,
    })
  }
  const deleteLike = () => {
    // if (isActive)
    Axios.delete(
      `http://localhost:3001/api/delete?eventId=${eventId}&memId=${loginId}`
    )
  }

  let history = useHistory()

  function click2Album(id) {
    let stringId = JSON.stringify(id)
    // console.log(stringId)
    history.push('/event/' + id + '/album')
  }

  return (
    <>
      {/* <div> */}
      {eventDataList.map((val) => {
        return (
          <>
            <div className="event_wave_background">
              <div className="mainclass_wrapper">
                <div className="page-head">
                  <EventBreadCrumb initValue={val.event_name} />
                  <div className="title">
                    <h6 className="subtitle1">
                      {isOneDay(
                        dateConvert(val.event_start_time),
                        dateConvert(val.event_end_time)
                      )
                        ? `${dateConvert(val.event_start_time)} ${timeConvert(
                            val.event_start_time
                          )} ~ ${timeConvert(val.event_end_time)}
                          `
                        : `${dateConvert(val.event_start_time)} 
                      ${timeConvert(val.event_start_time)} ~ 
                      ${dateConvert(val.event_end_time)} 
                      ${timeConvert(val.event_end_time)}`}
                    </h6>
                    <h5>{val.event_name}</h5>
                  </div>
                  <div className="page-head-part2">
                    <div className="organizer_info d-flex align-items-center">
                      <div className="organizer d-flex align-items-center">
                        <figure>
                          <img
                            src={`${devUrl}/pic/mem_img/${val.event_host_img}`}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="host">
                        <span>
                          {val.event_host_name}
                          <br />
                          <span style={{ fontSize: '12px' }}>發起的活動</span>
                        </span>
                      </div>
                    </div>
                    <div className="btn_part">
                      <button
                        className="btn bttn save rounded-pill"
                        style={
                          isActive === false
                            ? { display: 'inline' }
                            : { display: 'none' }
                        }
                        onClick={() => {
                          setIsActive(true)
                          writeLike()
                        }}
                      >
                        <MdBookmark
                          size={30}
                          style={{ color: 'white', paddingRight: '6px' }}
                        />
                        <span className="align-middle">收藏</span>
                      </button>
                      <button
                        className="btn bttn save rounded-pill"
                        style={
                          isActive === true
                            ? { display: 'inline' }
                            : { display: 'none' }
                        }
                        onClick={() => {
                          setIsActive(false)
                          deleteLike()
                        }}
                      >
                        <span className="align-middle">取消收藏</span>
                      </button>
                      <button className="btn bttn share rounded-pill">
                        <MdShare
                          size={30}
                          style={{ color: 'white', paddingRight: '6px' }}
                        />
                        <span className="align-middle">分享</span>
                      </button>
                    </div>
                  </div>
                  {/* <div className="bread_crumb">麵包屑放置處</div> */}
                </div>
                <div className="page-head-part3">
                  <div className="content_big_part">
                    <div className="event_pic">
                      <figure>
                        <img
                          src={`${devUrl}/pic/event/${val.event_photo}`}
                          alt="活動圖片"
                        />
                      </figure>
                    </div>
                    <div className="underline-title">
                      <span className="detail-title">詳細資訊</span>
                    </div>
                    <div
                      className="detail-data"
                      dangerouslySetInnerHTML={{
                        __html: val.event_details,
                      }}
                    ></div>
                    <div className="event-tag-box">
                      <button
                        className="btn rounded-pill btn-md tag"
                        type="button"
                      >
                        {val.event_type_name}
                      </button>
                      <button
                        className="btn rounded-pill btn-md tag aaa"
                        type="button"
                      >
                        {val.event_theme_name}
                      </button>
                      {tags.map((t) => {
                        return (
                          <button
                            className="btn rounded-pill btn-md tag aaa"
                            type="button"
                          >
                            {t.tags_name}
                          </button>
                        )
                      })}
                    </div>
                    <div className="underline-title d-flex justify-content-between align-items-end">
                      <div className="detail-title">參與者名單</div>
                      <a
                        href={`/event/${eventId}/attendants`}
                        className="btn btn-link all"
                        target="_blank"
                      >
                        查看全部
                      </a>
                    </div>
                    <EventDetailAttendant initValue={eventDataList} />
                  </div>
                  <div className="left_part">
                    <EventDetailInfo initValue={eventDataList} />

                    <Calendar value={calenderValue} />

                    <button
                      onClick={handleClick}
                      className="btn rounded-pill google-calender font-bold"
                      style={
                        bought === false
                          ? { display: 'inline' }
                          : { display: 'none' }
                      }
                    >
                      <h5>+ 加入Google行事曆</h5>
                    </button>

                    <button
                      onClick={() => {
                        click2Album(eventId)
                      }}
                      className="btn rounded-pill google-calender font-bold"
                      style={
                        bought === true
                          ? { display: 'inline' }
                          : { display: 'none' }
                      }
                    >
                      <h5>前往活動相簿</h5>
                    </button>

                    <div className="gmap">
                      <GMap location={location} zoomLevel={15} />
                    </div>
                  </div>
                </div>
              </div>
              {/* 上波浪 */}
              <div className="wave_background2">
                <img src={devUrl + '/Pic/SVG/wave-darker-blue-1440-01.svg'} />
              </div>
              {/* 討論區 */}
              <div className="forum-wave-height d-flex justify-content-center">
                <EventForum
                  eventValue={{
                    id: val.event_id,
                    hostId: val.event_host_id,
                  }}
                />
              </div>

              {/* 下波浪 */}
              <div className="wave_background3">
                <img
                  src={devUrl + '/Pic/SVG/wave-darker-blue-opposite-1440.svg'}
                />
              </div>
              {/* 相似活動 */}

              <div className="mainclass_wrapper relative-event">
                <div className="underline-title">
                  <span className="detail-title">相似活動</span>
                </div>
                <div className="relative-event-carousel">
                  <EventRelativeCarousel
                    initValue={{ theme: val.event_theme, id: val.event_id }}
                  />
                </div>
              </div>
              {/* 底下的bar */}
              <EventFixedBottom value={val} />
            </div>
          </>
        )
      })}
      {/* </div> */}
    </>
  )
}

export default withRouter(EventDetail)
