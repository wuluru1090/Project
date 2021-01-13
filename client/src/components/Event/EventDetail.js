import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// import '../../style/default.scss'
import '../../style/event/event_detail.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'

//DatePicker
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'

// 元素
import EventDetailInfo from './EventDetailInfo'
import Card from './ClassCard2'
import GMap from './GMap'
import Carousel1 from './Carousel1'
import EventDetailAttendant from './EventDetailAttendant'
import EventForum from './EventForum'
import EventRelativeCarousel from './EventRelativeCarousel'
import EventFixedBottom from './EventFixedBottom'

//connect with backend
import Axios from 'axios'

//GMap地圖Pin標記位置
const location = {
  address: '320桃園市中壢區中大路300號',
  lat: 24.96803,
  lng: 121.19498,
}

function EventDetail(props) {
  // console.log(props)
  // console.log(props.match.params.id)

  const [eventDataList, setEventDataList] = useState([])
  const [calenderValue, setCalenderValue] = useState([
    new Date('2021-01-15'),
    new Date('2021-01-15'),
  ])

  //取得後端資料
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/${props.match.params.id}`)
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
    console.log(parseInt(endDate[2]))
    console.log(parseInt(startDate[2]))
    console.log(
      parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
    )

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

  return (
    <>
      {/* <div> */}
      {eventDataList.map((val) => {
        return (
          <>
            <EventFixedBottom value={val} />
            <div className="event_wave_background">
              <div className="mainclass_wrapper">
                <div className="page-head">
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
                      <div className="organizer">
                        <figure>
                          <img src={devUrl + '/Pic/pic/member.jpg'} alt="" />
                        </figure>
                      </div>
                      <span>
                        張思婷
                        <br />
                        <span style={{ fontSize: '12px' }}>發起的活動</span>
                      </span>
                    </div>
                    <div className="btn_part">
                      <button className="btn bttn save rounded-pill">
                        <MdBookmark
                          size={30}
                          style={{ color: 'white', paddingRight: '6px' }}
                        />
                        <span className="align-middle">收藏</span>
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
                    <div className="class_pic">
                      <figure>
                        <img
                          src={`${devUrl}/pic/event/${val.event_photo}`}
                          alt="課程圖片"
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
                      <a
                        href="#"
                        className="btn rounded-pill btn-md tag"
                        type="button"
                      >
                        {val.event_type_name}
                      </a>
                      <a
                        href="#"
                        className="btn rounded-pill btn-md tag aaa"
                        type="button"
                      >
                        {val.event_theme_name}
                      </a>
                    </div>
                    <div className="underline-title">
                      <span className="detail-title">參與者名單</span>
                    </div>
                    <EventDetailAttendant />
                  </div>
                  <div className="left_part">
                    <EventDetailInfo initValue={eventDataList} />

                    <Calendar value={calenderValue} />

                    <button
                      onClick={handleClick}
                      className="btn rounded-pill google-calender font-bold"
                    >
                      <h5>+ 加入Google行事曆</h5>
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
                <EventForum />
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
                  <EventRelativeCarousel />
                </div>
              </div>
            </div>
          </>
        )
      })}
      {/* </div> */}
    </>
  )
}

export default withRouter(EventDetail)
