import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_attendant.scss'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

function EventAttendant(props) {
  const eventId = props.match.params.id
  const [attendants, setAttendants] = useState([])
  const [attendantsData, setAttendantsData] = useState([])
  let eventData = []

  const getData = async () => {
    await Axios.get(`http://localhost:3001/api/event/${eventId}`).then(
      (response) => {
        console.log(JSON.parse(response.data[0].event_attendents))
        // setAttendants(JSON.parse(response.data[0].event_attendents))
        eventData = JSON.parse(response.data[0].event_attendents)
      }
    )
    await Axios.get(
      `http://localhost:3001/api/attendants?id=${attendants.join(',')}`
    )
      .then((response) => {
        console.log(response)
        // console.log(response.data)
        setAttendantsData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getData()
    // Axios.get(`http://localhost:3001/api/event/${eventId}`)
    //   .then((response) => {
    //     console.log(JSON.parse(response.data[0].event_attendents))
    //     setAttendants(JSON.parse(response.data[0].event_attendents))
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }, [])

  // useEffect(() => {
  //   Axios.get(`http://localhost:3001/api/attendants?id=${attendants.join(',')}`)
  //     .then((response) => {
  //       console.log(response)
  //       console.log(response.data)
  //       setAttendantsData(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }, [])

  return (
    <>
      <div className="back">
        <div className="att-container content">
          <div className="att-header">
            <h6>2020/03/05-2020/03/17</h6>
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
            {/* {attendantsData.map((val) => {
              return (
                <>
                  <div className="list-content row">
                    <div className="pic col-2 d-flex justify-content-start align-items-center">
                      <figure>
                        {val.member_img != '' ? (
                          <img
                            src={`${devUrl}/pic/mem_img/${val.member_img}`}
                            alt=""
                          />
                        ) : (
                          <img src={`${devUrl}/pic/mem_img/null.png`} alt="" />
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
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(EventAttendant)
