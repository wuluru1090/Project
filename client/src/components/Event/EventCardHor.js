import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import { DateConvert } from '../Main/DateTimeConverter'
import { useHistory } from 'react-router-dom'
import '../../style/event/event_card_hor.scss'
import Axios from 'axios'

function EventCardHor(props) {
  const [isActive, setIsActive] = useState(false)
  const [tags, setTags] = useState([])
  const cardInfo = props.initVal
  const loginId = 1

  let history = useHistory()
  function click2Detail(id) {
    let stringId = JSON.stringify(id)
    console.log(stringId)
    history.push('/event/' + stringId)
  }

  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  //確認是否有收藏
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/save?eventId=${cardInfo.event_id}&memId=${loginId}`
    ).then((response) => {
      console.log(response.data)
      if (response.data.length > 0) setIsActive(true)
    })
  }, [])

  const writeLike = () => {
    // if (!isActive)
    Axios.post('http://localhost:3001/api/save', {
      likeEventId: cardInfo.event_id,
      likeMemberId: 1,
    })
  }
  const deleteLike = () => {
    // if (isActive)
    Axios.delete(
      `http://localhost:3001/api/delete?eventId=${cardInfo.event_id}&memId=1`
    )
  }

  //取得活動標籤
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/eventtags/${cardInfo.event_id}`)
      .then((response) => {
        // console.log(response.data)
        setTags(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className="event-card-horizon">
        <div className="d-flex">
          <div>
            <img
              src={devUrl + '/Pic/SVG/bookmark.svg'}
              className="bookmark"
              alt="..."
              onClick={() => {
                setIsActive(true)
                writeLike()
              }}
              style={isActive ? { display: 'none' } : { display: 'inline' }}
            />
            <img
              src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
              className="bookmark"
              alt="..."
              onClick={() => {
                setIsActive(false)
                deleteLike()
              }}
              style={isActive ? { display: 'inline' } : { display: 'none' }}
            />
            <figure
              className="card-img-top event-photo"
              onClick={() => click2Detail(cardInfo.event_id)}
            >
              <img
                src={devUrl + '/pic/event/' + cardInfo.event_photo}
                className="photo"
                alt={cardInfo.event_name}
              />
            </figure>
          </div>

          <div
            className="card-body"
            onClick={() => click2Detail(cardInfo.event_id)}
          >
            <h5 className="card-title">{cardInfo.event_name}</h5>
            <div className="t2">
              {/* {cardInfo.event_details} */}
              <div
                dangerouslySetInnerHTML={{ __html: cardInfo.event_details }}
                className="preview"
              ></div>
            </div>
            <div className="d-flex bbb">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <p className="subtitle1 card-text ">{cardInfo.event_location}</p>
            </div>
            <div className="d-flex bbb">
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
            <div className="d-flex bbb">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <p className="card-text">{cardInfo.event_address}</p>
            </div>
            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <button className="btn rounded-pill btn-md tag" type="button">
                  {cardInfo.event_type_name}
                </button>
                <button
                  className="btn rounded-pill btn-md tag aaa"
                  type="button"
                >
                  {cardInfo.event_theme_name}
                </button>
                {tags.map((t) => {
                  return (
                    <button
                      className="btn rounded-pill btn-md tag aaa"
                      type="button"
                    >
                      {t.tags_name}
                    </button>
                  )
                })}
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

export default EventCardHor
