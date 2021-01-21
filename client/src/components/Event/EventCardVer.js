import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_card_ver.scss'
import { DateConvert } from '../Main/DateTimeConverter'
import { useHistory } from 'react-router-dom'

import Axios from 'axios'

function EventCardVer(props) {
  const [isActive, setIsActive] = useState(false)
  const cardInfo = props.initVal
  const loginId = 1

  let history = useHistory()

  //確認是否有收藏
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/save?eventId=${cardInfo.event_id}&memId=${loginId}`
    ).then((response) => {
      // console.log(response.data)
      if (response.data.length > 0) setIsActive(true)
    })
  }, [])

  function click2Detail(id) {
    let stringId = JSON.stringify(id)
    // console.log(stringId)
    history.push('/event/' + stringId)
  }

  //天數計算機
  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  const writeLike = () => {
    // if (!isActive)
    Axios.post('http://localhost:3001/api/save', {
      likeEventId: cardInfo.event_id,
      likeMemberId: loginId,
    })
  }
  const deleteLike = () => {
    // if (isActive)
    Axios.delete(
      `http://localhost:3001/api/delete?eventId=${cardInfo.event_id}&memId=${loginId}`
    )
  }

  return (
    <>
      <div className="event-card-vertical card-wrapper">
        <div className="card box d-flex ccard">
          <img
            src={devUrl + '/Pic/SVG/bookmark.svg'}
            className="bookmark un-pushed"
            alt="..."
            onClick={() => {
              setIsActive(true)
              writeLike()
            }}
            style={
              isActive === false ? { display: 'inline' } : { display: 'none' }
            }
            id="inactive"
          />
          <img
            src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
            className="bookmark pushed"
            alt="..."
            id="active"
            onClick={() => {
              setIsActive(false)
              deleteLike()
            }}
            style={
              isActive === true ? { display: 'inline' } : { display: 'none' }
            }
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
          {/* 參與者頭像開始 */}

          <div className="more-att">+3</div>
          <img
            className="second-att"
            src={devUrl + '/pic/pic/member2.jpg'}
          ></img>
          <img
            className="first-att"
            src={devUrl + '/pic/pic/member3.jpg'}
          ></img>

          {/* 參與者頭像結束 */}
          <div
            className="card-body"
            onClick={() => click2Detail(cardInfo.event_id)}
          >
            <h5 className="subtitle1 card-title ">{cardInfo.event_name}</h5>
            <div className="d-flex inform">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <p className="card-text">{cardInfo.event_location}</p>
            </div>
            <div className="d-flex inform">
              <img
                className="icon2"
                src="/pic/svg/date_range-24px.svg"
                alt=""
              />
              <p className="card-text d-flex">
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
              </p>
            </div>
            <div className="d-flex inform">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <p className="card-text">{cardInfo.event_address}</p>
            </div>

            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <button
                  className="btn rounded-pill btn-md tag"
                  type="button"
                  value={cardInfo.event_type_id}
                >
                  {cardInfo.event_type_name}
                </button>
                <button
                  className="btn rounded-pill btn-md tag aaa"
                  type="button"
                  value={cardInfo.event_theme_id}
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

export default EventCardVer
