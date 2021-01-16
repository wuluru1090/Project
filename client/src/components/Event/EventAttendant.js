import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_attendant.scss'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

function EventAttendant(props) {
  const eventId = props.match.params.id
  const [event, setEvent] = useState({})
  const [attendants, setAttendants] = useState([])
  const [attendantsData, setAttendantsData] = useState([])
  const [attends, setAttends] = useState([])
  const [waiting, setWaiting] = useState([])

  //參加狀態
  const [status, setStatus] = useState('attend')

  const getData = async () => {
    await Axios.get(`http://localhost:3001/api/event/${eventId}`).then(
      (response) => {
        setEvent(response.data[0])
        // console.log(JSON.parse(response.data[0].event_attendents))
        setAttendants(JSON.parse(response.data[0].event_attendents))
      }
    )
  }

  const getAtt = async () => {
    await Axios.get(
      `http://localhost:3001/api/attendants?id=${attendants.join(',')}`
    )
      .then((response) => {
        setAttendantsData(response.data)
        setAttends(response.data.slice(0, event.event_limit_number - 1))
        setWaiting(response.data.slice(event.event_limit_number - 1))
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const statusList = () => {
    switch (status) {
      case 'attend':
        return attends
      case 'waiting':
        return waiting
      case 'cancel':
        return []
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (attendants.length > 0) {
      getAtt()
    }
  }, [attendants])

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

  return (
    <>
      <div className="back">
        <div className="att-container content">
          <div className="att-header">
            <h6>2020/03/05-2020/03/17</h6>
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
                  {event.event_limit_number >= attendants.length
                    ? attendants.length
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
                  退出 (5)
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
                  {event.event_limit_number >= attendants.length
                    ? 0
                    : attendants.length - event.event_limit_number}
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
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(EventAttendant)
