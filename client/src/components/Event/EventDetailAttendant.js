import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import '../../style/event/event_detail_attendant.scss'
import { devUrl } from '../../config'
import Axios from 'axios'

function EventDetailAttendant(props) {
  // console.log(props)
  const [detailData, setDetailData] = useState(props.initValue[0])
  const [allAttendOrders, setAllAttendOrders] = useState([])
  const [attendantsData, setAttendantsData] = useState([])
  const [list, setList] = useState([])

  // const attendants = JSON.parse(detailData.event_attendents)
  // const [attendantsData, setAttendantsData] = useState([])

  // 取得確定的訂單
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/eventorder?valid=1`)
      .then((response) => {
        // console.log(response.data)
        setAllAttendOrders(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  //取得參加&取消的名單陣列

  var attend = []

  useEffect(() => {
    if (allAttendOrders.length > 0) {
      allAttendOrders.map((val) => {
        var everyAttendOrderEvent = JSON.parse(val.event_id)
        if (everyAttendOrderEvent.includes(parseInt(detailData.event_id))) {
          attend.push(val.id)
        }
      })
      setAttendantsData(attend)
    }
  }, [allAttendOrders])

  useEffect(() => {
    if (attendantsData.length > 0) {
      getList()
    }
  }, [attendantsData])

  const getList = () => {
    Axios.get(
      `http://localhost:3001/api/attendants?id=${attendantsData.join(',')}`
    )
      .then((response) => {
        setList(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <>
      <div className="detail-attendant-wrapper d-flex flex-wrap justify-content-start">
        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar">
            {detailData.event_host_img !== '' ? (
              <img
                src={`${devUrl}/pic/mem_img/${detailData.event_host_img}`}
                alt=""
              />
            ) : (
              <img src={`${devUrl}/pic/mem_img/null.png`} alt="" />
            )}
          </figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>{detailData.event_host_name}</h6>
            <div className="subtitle2 identity host caption">主揪</div>
          </div>
        </div>
        {list.map((val) => {
          return (
            <div className="attendant-card  d-flex justify-content-center">
              <figure className="detail-attendant-avatar">
                {val.member_img != '' ? (
                  <img src={`${devUrl}/pic/mem_img/${val.member_img}`} alt="" />
                ) : (
                  <img src={`${devUrl}/pic/mem_img/null.png`} alt="" />
                )}
              </figure>
              <div className="name d-flex flex-column align-items-center">
                <h6>{val.member_name}</h6>
                <div className="subtitle2 identity attendants">參與者</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default withRouter(EventDetailAttendant)
