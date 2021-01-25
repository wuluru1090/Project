import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_card_ver_relative.scss'
import { DateConvert } from '../Main/DateTimeConverter'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'

function EventCardVerRelative(props) {
  let history = useHistory()
  const loginId = window.sessionStorage.getItem('useriddd')

  // console.log(props.initValue)
  const [isActive, setIsActive] = useState(false)
  const cardInfo = props.initValue

  //天數計算機
  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  function click2Detail(id) {
    let stringId = JSON.stringify(id)
    // console.log(stringId)
    history.push('/event/' + stringId)
    window.location.reload()
  }

  //確認是否有收藏
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/save?eventId=${cardInfo.event_id}&memId=${loginId}`
    ).then((response) => {
      if (response.data.length > 0) setIsActive(true)
    })
  }, [])

  const writeLike = () => {
    Axios.post('http://localhost:3001/api/save', {
      likeEventId: cardInfo.event_id,
      likeMemberId: 1,
    }).then(alert('success!'))
  }
  const deleteLike = () => {
    Axios.delete(
      `http://localhost:3001/api/delete?eventId=${cardInfo.event_id}&memId=1`
    ).then(alert('刪除成功!'))
  }

  return (
    <>
      <div className="d-flex justify-content-center event-card-vertical_relative">
        <div className="card box d-flex eventccard">
          <img
            src={devUrl + '/Pic/SVG/bookmark.svg'}
            className="bookmark un-pushed"
            alt="..."
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
            style={isActive ? { display: 'none' } : { display: 'inline' }}
            id="inactive"
          />
          <img
            src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
            className="bookmark pushed"
            alt="..."
            id="active"
            onClick={() => {
              if (loginId) {
                setIsActive(false)
                deleteLike()
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
            style={isActive ? { display: 'inline' } : { display: 'none' }}
          />
          <figure
            className="event-photo"
            onClick={() => click2Detail(cardInfo.event_id)}
          >
            <img
              src={devUrl + '/pic/event/' + cardInfo.event_photo}
              className="card-img-top photo"
              alt={cardInfo.event_name}
            />
          </figure>
          <div
            className="card-body"
            onClick={() => click2Detail(cardInfo.event_id)}
          >
            <h5 className="card-title">{cardInfo.event_name}</h5>
            <div className="d-flex inform align-items-center">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <span className="card-text">{cardInfo.event_location}</span>
            </div>
            <div className="d-flex inform align-items-center">
              <img
                className="icon2"
                src="/pic/svg/date_range-24px.svg"
                alt=""
              />
              <span className="card-text">
                {isOneDay(
                  cardInfo.event_start_time,
                  cardInfo.event_end_time
                ) ? (
                  <DateConvert jsonDate={cardInfo.event_start_time} />
                ) : (
                  <>
                    <DateConvert jsonDate={cardInfo.event_start_time} />
                    <span>&nbsp;~&nbsp;</span>
                    <DateConvert jsonDate={cardInfo.event_end_time} />
                  </>
                )}
              </span>
            </div>
            <div className="d-flex inform align-items-center">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <span className="subtitle1 card-text">
                {cardInfo.event_address}
              </span>
            </div>

            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <button
                  href="#"
                  className="btn rounded-pill btn-md tag"
                  type="button"
                  onClick={() => {
                    history.push(`/event?type=${cardInfo.event_type}`)
                  }}
                >
                  {cardInfo.event_type_name}
                </button>
                <button
                  href="#"
                  className="btn rounded-pill btn-md tag aaa"
                  type="button"
                  onClick={() => {
                    history.push(`/event?theme=${cardInfo.event_theme}`)
                  }}
                >
                  {cardInfo.event_theme_name}
                </button>
              </div>
              <button
                onClick={() => click2Detail(cardInfo.event_id)}
                className="btn d-flex join"
              >
                參加活動
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCardVerRelative
