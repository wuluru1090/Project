import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_attendant.scss'
import { devUrl } from '../../config'
import { withRouter, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { DateConvert } from '../Main/DateTimeConverter'

function EventAttendant(props) {
  let history = useHistory()
  const eventId = props.match.params.id
  const [event, setEvent] = useState({})
  const [attendantsData, setAttendantsData] = useState([])
  const [cancelData, setCancelData] = useState([])
  const [attends, setAttends] = useState([])
  const [waiting, setWaiting] = useState([])
  const [cancelList, setCancelList] = useState([])

  //從訂單獲取的狀態
  const [allCancelOrders, setAllCancelOrders] = useState([])
  const [allAttendOrders, setAllAttendOrders] = useState([])

  //參加狀態
  const [status, setStatus] = useState('attend')

  //取得活動的資料
  const getData = async () => {
    await Axios.get(`http://localhost:3001/api/event/${eventId}`).then(
      (response) => {
        setEvent(response.data[0])
      }
    )
  }
  useEffect(() => {
    getData()
  }, [])

  //取得取消的訂單
  const getAttFromOrderCancel = async () => {
    await Axios.get(`http://localhost:3001/api/eventorder?valid=0`)
      .then((response) => {
        setAllCancelOrders(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //取得確定的訂單
  const getAttFromOrderAttend = async () => {
    await Axios.get(`http://localhost:3001/api/eventorder?valid=1`)
      .then((response) => {
        setAllAttendOrders(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getAttFromOrderCancel()
    getAttFromOrderAttend()
  }, [])

  //取得參加&取消的名單陣列
  var everyCancelOrderEvent = []
  var everyAttendOrderEvent = []
  var cancel = []
  var attend = []

  useEffect(() => {
    if (allCancelOrders.length > 0) {
      {
        allCancelOrders.map((val) => {
          everyCancelOrderEvent = JSON.parse(val.event_id)
          if (everyCancelOrderEvent.includes(parseInt(eventId))) {
            cancel.push(val.id)
          }
        })
      }
      setCancelData(cancel)
      console.log(cancel)
    }
    if (allAttendOrders.length > 0) {
      {
        allAttendOrders.map((val) => {
          everyAttendOrderEvent = JSON.parse(val.event_id)
          if (everyAttendOrderEvent.includes(parseInt(eventId))) {
            attend.push(val.id)
          }
        })
      }
      setAttendantsData(attend)
    }
  }, [allCancelOrders, allAttendOrders])

  useEffect(() => {
    if (attendantsData.length > 0) {
      getAtt()
      getCancel()
    }
  }, [attendantsData])

  //取得確定參加的名單
  const getAtt = async () => {
    await Axios.get(
      `http://localhost:3001/api/attendants?id=${attendantsData.join(',')}`
    )
      .then((response) => {
        setAttends(response.data.slice(0, event.event_limit_number - 1))
        setWaiting(response.data.slice(event.event_limit_number - 1))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //取得取消的名單
  const getCancel = async () => {
    await Axios.get(
      `http://localhost:3001/api/attendants?id=${cancelData.join(',')}`
    )
      .then((response) => {
        // console.log(response.data)
        setCancelList(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //設定主揪的資料
  const hostInfo = (
    <div
      className="list-content row holder"
      onClick={() => {
        history.push(`/see/${event.event_host_id}`)
      }}
    >
      <div className="pic col-2 d-flex justify-content-start align-items-center">
        <figure>
          <img
            className="photo"
            src={`${devUrl}/pic/mem_img/${event.event_host_img}`}
            alt=""
          />
        </figure>
      </div>
      <div className="detail d-flex col-10 align-items-center">
        <div className="de">
          <h6>{event.event_host_name}</h6>
          <p className="subtitle2 host">主揪</p>
          {/* <p className="subtitle2">1月1日, 12:25</p> */}
        </div>
      </div>
    </div>
  )

  //處理選擇狀態
  const statusList = () => {
    switch (status) {
      case 'attend':
        return attends
      case 'waiting':
        return waiting
      case 'cancel':
        if (cancelList.length > 0) {
          return cancelList
        } else {
          return []
        }
    }
  }

  //天數計算機
  function isOneDay(date1, date2) {
    let startDate = new Date(date1).toString().split(' ')
    let endDate = new Date(date2).toString().split(' ')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  return (
    <>
      <div className="back">
        <div className="att-container content">
          <div className="att-header">
            <h6>
              {event !== {} ? (
                isOneDay(event.event_start_time, event.event_end_time) ? (
                  <DateConvert jsonDate={event.event_start_time} />
                ) : (
                  <>
                    <DateConvert jsonDate={event.event_start_time} />
                    <span>&nbsp;~&nbsp;</span>
                    <DateConvert jsonDate={event.event_end_time} />
                  </>
                )
              ) : (
                ''
              )}
            </h6>
            <h5 className="title">{event.event_name}</h5>
            <h5 className="title">參與者</h5>
            <div className="status">
              <ul className="d-flex">
                <li
                  className={`subtitle1 ${
                    status == 'attend' && 'selected-status'
                  }`}
                  onClick={() => {
                    setStatus('attend')
                  }}
                >
                  確定參加 (
                  {event.event_limit_number > attendantsData.length
                    ? attendantsData.length + 1
                    : event.event_limit_number}
                  )
                </li>
                <li
                  className={`subtitle1 ${
                    status == 'cancel' && 'selected-status'
                  }`}
                  onClick={() => {
                    setStatus('cancel')
                  }}
                >
                  退出 ({cancelData.length})
                </li>
                <li
                  className={`subtitle1 ${
                    status == 'waiting' && 'selected-status'
                  }`}
                  onClick={() => {
                    setStatus('waiting')
                  }}
                >
                  候補 (
                  {event.event_limit_number > attendantsData.length
                    ? 0
                    : attendantsData.length - event.event_limit_number + 1}
                  )
                </li>
              </ul>
            </div>
          </div>
          <div className="list">
            {status == 'attend' && hostInfo}

            {statusList().map((val) => {
              return (
                <>
                  <div
                    className="list-content row"
                    onClick={() => {
                      history.push(`/see/${val.member_id}`)
                    }}
                  >
                    <div className="pic col-2 d-flex justify-content-start align-items-center">
                      <figure>
                        {val.member_img != '' ? (
                          <img
                            className="photo"
                            src={`${devUrl}/pic/mem_img/${val.member_img}`}
                            alt={val.member_name}
                          />
                        ) : (
                          <img
                            className="photo"
                            src={`${devUrl}/pic/mem_img/null.png`}
                            alt={val.member_name}
                          />
                        )}
                      </figure>
                    </div>
                    <div className="detail d-flex col-10 align-items-center">
                      <div className="de">
                        <h6>{val.member_name}</h6>
                        <p className="subtitle2">參與者</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(EventAttendant)
