<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_attendant.scss'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

function EventAttendant(props) {
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
        // console.log(response.data)
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
        console.log(response.data)
        setCancelList(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //設定主揪的資料
  const hostInfo = (
    <div className="list-content row holder">
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
          <p className="subtitle2">1月1日, 12:25</p>
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
        return cancelList
    }
  }

=======
import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_attendant.scss'
import { devUrl } from '../../config'

function EventAttendant() {
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  return (
    <>
      <div className="back">
        <div className="att-container content">
          <div className="att-header">
            <h6>2020/03/05-2020/03/17</h6>
<<<<<<< HEAD
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
                  {event.event_limit_number >= attendantsData.length
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
                  {event.event_limit_number >= attendantsData.length
                    ? 0
                    : attendantsData.length - event.event_limit_number}
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
                  <div className="list-content row">
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
                        <p className="subtitle2">1月1日, 12:25</p>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
=======
            <h5 className="title">阿里山國家公園二日遊輕鬆拍</h5>
            <h5 className="title">參與者</h5>
            <div className="status">
              <ul className="d-flex">
                <li className="subtitle1 selected-status">確定參加 (12)</li>
                <li className="subtitle1">退出 (5)</li>
                <li className="subtitle1">候補 (2)</li>
              </ul>
            </div>
          </div>

          <div className="list">
            <div className="list-content row holder">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2 host">主揪</p>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
          </div>
        </div>
      </div>
    </>
  )
}
<<<<<<< HEAD
export default withRouter(EventAttendant)
=======
export default EventAttendant
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
