import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

// import '../../style/default.scss'
import '../../style/event/event_detail.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'
import Swal from 'sweetalert2'

//DatePicker
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import ScrollTop from '../Main/ScrollTop'

// 元素
import EventDetailInfo from './EventDetailInfo'
import Card from './ClassCard2'
import GMap from './GMap'
import Carousel1 from './Carousel1'
import EventDetailAttendant from './EventDetailAttendant'
import EventForum from './EventForum'
import EventRelativeCarousel from './EventRelativeCarousel'
import EventFixedBottom from './EventFixedBottom'
import EventBreadCrumb from './EventBreadCrumb'

// 分享
import { Modal } from 'react-bootstrap'
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

//connect with backend
import Axios from 'axios'

function EventDetail(props) {
  // console.log(props)
  window.scrollTo(0, 0)
  // localStorage.setItem('cart', [])
  const eventId = props.match.params.id
  const isAuth = props.isAuth
  const [loginId, setLogInId] = useState()
  const [memberInfo, setMemberInfo] = useState()

  // 是否是登入狀態
  useEffect(() => {
    if (isAuth === true) {
      const id = window.sessionStorage.getItem('useriddd')
      setLogInId(id)
    }
  }, [isAuth])

  //是否收藏
  const [isActive, setIsActive] = useState(false)

  //設定活動&日曆資料
  const [eventDataList, setEventDataList] = useState([])
  const [calenderValue, setCalenderValue] = useState([
    new Date('2021-01-15'),
    new Date('2021-01-15'),
  ])
  const [passed, setPassed] = useState(false)
  const [address, setAddress] = useState('')
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  //設定標籤
  const [tags, setTags] = useState([])

  //設定是否購買過活動
  const [bought, setBought] = useState(false)

  // Modal控制區
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //GMap地圖Pin標記位置
  const location = {
    address: '320桃園市中壢區中大路300號',
    lat: 24.96803,
    lng: 121.19498,
  }

  // Axios.defaults.withCredentials = true
  //地址轉經緯度
  function geoCode() {
    var insertLocation = address.toString()
    Axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: `"${insertLocation}"`,
        key: 'AIzaSyCMogInSI3uIE7NMzd6zNmGbW6-_gnGvI8',
      },
      withCredentials: false,
    })
      .then(function (response) {
        console.log(response)
        // 地址的緯度
        setLat(response.data.results[0].geometry.location.lat)
        //地址的經度
        setLng(response.data.results[0].geometry.location.lng)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }

  useEffect(() => {
    if (address !== '') {
      geoCode()
    }
  }, [address])

  useEffect(() => {
    console.log(lat, lng)
  }, [lat, lng])

  //取得後端活動資料
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/${eventId}`)
      .then((response) => {
        setEventDataList(response.data)
        setCalenderValue([
          new Date(dateConvert(response.data[0].event_start_time).toString()),
          new Date(dateConvert(response.data[0].event_end_time).toString()),
        ])

        setAddress(response.data[0].event_address)

        let eventDate = +new Date(response.data[0].event_start_time)
        let today = +new Date()
        if (eventDate <= today) {
          setPassed(true)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const getTag = () => {
    Axios.get(`http://localhost:3001/api/eventtags/${eventId}`)
      .then((response) => {
        console.log(response.data)
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

  //取得登入會員
  useEffect(() => {
    if (loginId) {
      Axios.get(`http://localhost:3001/member/get/${loginId}`).then(
        (response) => {
          setMemberInfo(response.data[0])
        }
      )
    }
  }, [loginId])

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
  var SCOPES = 'https://www.googleapis.com/auth/calendar'

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

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {}
          function ISODateString(d) {
            function pad(n) {
              return n < 10 ? '0' + n : n
            }
            return (
              d.getUTCFullYear() +
              '-' +
              pad(d.getUTCMonth() + 1) +
              '-' +
              pad(d.getUTCDate()) +
              'T' +
              pad(d.getUTCHours()) +
              ':' +
              pad(d.getUTCMinutes()) +
              ':' +
              pad(d.getUTCSeconds()) +
              '+08:00'
            )
          }

          if (eventDataList.length > 0) {
            console.log(eventDataList[0].event_start_time)
            var start = ISODateString(
              new Date(eventDataList[0].event_start_time)
            )
            var end = ISODateString(new Date(eventDataList[0].event_end_time))

            event = {
              summary: `${eventDataList[0].event_name}`,
              location: `${eventDataList[0].event_location}`,
              // description:
              // `報名截止時間: ${eventDataList[0].event_deadline_time}`,
              start: {
                dateTime: start,
                timeZone: 'Asia/Taipei',
              },
              end: {
                dateTime: end,
                timeZone: 'Asia/Taipei',
              },
              reminders: {
                useDefault: false,
                overrides: [
                  { method: 'email', minutes: 24 * 60 },
                  { method: 'popup', minutes: 10 },
                ],
              },
            }
          }

          var request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          })

          request.execute(function (event) {
            window.open(event.htmlLink)
          })
        })
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
    history.push('/event/' + id + '/album')
  }

  return (
    <>
      {/* <div> */}
      {eventDataList.length ? (
        eventDataList.map((val) => {
          return (
            <>
              <div className="event_wave_background">
                <ScrollTop />
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
                            if (loginId) {
                              setIsActive(true)
                              writeLike()
                            } else {
                              Swal.fire({
                                title: '登入會員即可收藏!',
                                showCancelButton: true,
                                confirmButtonText: `去登入`,
                                cancelButtonText: '取消',
                              }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                  history.push('/login')
                                }
                              })
                            }
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
                        <button
                          className="btn bttn share rounded-pill"
                          onClick={handleShow}
                        >
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
                          onClick={() => {
                            history.push(`/event?type=${val.event_type}`)
                          }}
                        >
                          {val.event_type_name}
                        </button>
                        <button
                          className="btn rounded-pill btn-md tag aaa"
                          type="button"
                          onClick={() => {
                            history.push(`/event?theme=${val.event_theme}`)
                          }}
                        >
                          {val.event_theme_name}
                        </button>
                        {tags.length > 0 &&
                          tags.map((t) => {
                            return (
                              <button
                                className="btn rounded-pill btn-md tag aaa"
                                type="button"
                                onClick={() => {
                                  history.push(`/event?tag=${t.tags_name}`)
                                }}
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
                        className="btn google-calender font-bold"
                        style={
                          passed === false
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
                        className="btn google-calender font-bold"
                        style={
                          passed === true
                            ? { display: 'inline' }
                            : { display: 'none' }
                        }
                      >
                        <h5>前往活動相簿</h5>
                      </button>

                      <div className="gmap">
                        {/* <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14637.799301134071!2d120.70371!3d23.480302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21d4803b7fb51b65!2z56a-5ZyS6KeA6Zyn5rCR5a6_!5e0!3m2!1szh-TW!2stw!4v1611759364918!5m2!1szh-TW!2stw"
                          width="600"
                          height="450"
                          frameborder="0"
                          allowfullscreen=""
                          aria-hidden="false"
                          tabindex="0"
                          className="google_map"
                        ></iframe> */}
                        {lat > 0 && lng > 0 && (
                          <GMap
                            location={{
                              address: address.toString(),
                              lat: lat,
                              lng: lng,
                            }}
                            zoomLevel={15}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* 上波浪 */}
                <div className="wave_background2">
                  <img
                    src={devUrl + '/Pic/SVG/wave-darker-blue-1440-01.svg'}
                    alt=""
                  />
                </div>
                {/* 討論區 */}
                <div className="forum-wave-height d-flex justify-content-center">
                  <EventForum
                    eventValue={{
                      id: val.event_id,
                      hostId: val.event_host_id,
                    }}
                    memInfo={loginId && memberInfo}
                  />
                </div>

                {/* 下波浪 */}
                <div className="wave_background3">
                  <img
                    src={devUrl + '/Pic/SVG/wave-darker-blue-opposite-1440.svg'}
                    alt=""
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
                <EventFixedBottom value={val} passed={passed} />
              </div>
            </>
          )
        })
      ) : (
        <div style={{ minHeight: '100vh' }}></div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title
            style={{
              fontSize: '24px',
              margin: '18px 26px',
              fontFamily: 'TaipeiSansTCBeta-Bold',
            }}
          >
            分享活動
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-around">
          <LineShareButton
            url={String(window.location)}
            title="快來參加這個超棒揪影活動"
          >
            <LineIcon round={true} />
          </LineShareButton>
          <TwitterShareButton
            url={String(window.location)}
            title="快來參加這個超棒揪影活動"
          >
            <TwitterIcon round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={String(window.location)}
            title="快來參加這個超棒揪影活動"
          >
            <WhatsappIcon round={true} />
          </WhatsappShareButton>
          <FacebookShareButton
            url={String(window.location)}
            title="快來參加這個超棒揪影活動"
          >
            <FacebookIcon round={true} />
          </FacebookShareButton>
        </Modal.Body>
        <Modal.Footer className="border-0">
          {/* <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default withRouter(EventDetail)
