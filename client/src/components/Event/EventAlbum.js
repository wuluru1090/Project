import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdImage, MdModeEdit } from 'react-icons/md'
import Axios from 'axios'
import Modal from 'react-bootstrap/Modal'

function EventAlbum(props) {
  window.scrollTo(0, 0)
  const eventId = props.match.params.id
  const loginId = 3

  //預設顯示的相簿
  const [defaultPhoto, setDefaultPhoto] = useState([])

  //預設活動細節
  const [eventInfo, setEventInfo] = useState({})

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/album/${eventId}`)
      .then((response) => {
        setDefaultPhoto(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/${eventId}`)
      .then((response) => {
        console.log(response.data)
        setEventInfo(response.data[0])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }
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

  return (
    <>
      <div className="album-page">
        <div className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <a href={`/event/${eventId}`}>回到活動頁</a>
        </div>

        <div className="title row d-flex justify-content-between">
          <div className="word col-9">
            <h6>
              {isOneDay(
                dateConvert(eventInfo.event_start_time),
                dateConvert(eventInfo.event_end_time)
              )
                ? `${dateConvert(eventInfo.event_start_time)}`
                : `${dateConvert(eventInfo.event_start_time)} ~ 
                      ${dateConvert(eventInfo.event_end_time)} `}
            </h6>
            <h5>{eventInfo.event_name}</h5>
          </div>

          <button className="btn rounded-pill upload-button align-items-center d-flex">
            <MdImage
              size={30}
              style={{ color: 'white', paddingRight: '6px' }}
            />
            <span>上傳圖片</span>
          </button>
        </div>
        {/* 圖片部分開始 */}
        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            {defaultPhoto.map((val) => {
              return (
                <>
                  <div className="photo-card col-4">
                    <figure>
                      <img
                        src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                        alt=""
                      ></img>
                    </figure>
                    <div>
                      <p className="subtitle1">
                        by&nbsp;&nbsp;{val.member_name}
                      </p>
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
export default withRouter(EventAlbum)
