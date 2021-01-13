import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_card_ver_relative.scss'

function EventCardVerRelative() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="d-flex justify-content-center event-card-vertical_relative">
        <div className="card box d-flex ccard">
          <img
            src={devUrl + '/Pic/SVG/bookmark.svg'}
            className="bookmark un-pushed"
            alt="..."
            onClick={() => setIsActive(true)}
            style={isActive ? { display: 'none' } : { display: 'inline' }}
            id="inactive"
          />
          <img
            src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
            className="bookmark pushed"
            alt="..."
            id="active"
            onClick={() => setIsActive(false)}
            style={isActive ? { display: 'inline' } : { display: 'none' }}
          />
          <figure className="event-photo">
            <img
              src={devUrl + '/pic/pic/event-slider1.jpg'}
              className="card-img-top photo"
              alt="..."
            />
          </figure>
          <a href="#">
            <div className="more-att">+3</div>
          </a>
          <a href="#">
            <img
              className="second-att"
              src={devUrl + '/pic/pic/member2.jpg'}
            ></img>
          </a>
          <a href="#">
            <img
              className="first-att"
              src={devUrl + '/pic/pic/member3.jpg'}
            ></img>
          </a>
          <div className="card-body">
            <h5 className="card-title">四草綠意盎然 台南七股一日遊</h5>
            <div className="d-flex inform align-items-center">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <span className="card-text">四草綠色隧道 </span>
            </div>
            <div className="d-flex inform align-items-center">
              <img
                className="icon2"
                src="/pic/svg/date_range-24px.svg"
                alt=""
              />
              <span className="card-text">2021-01-28 </span>
            </div>
            <div className="d-flex inform align-items-center">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <span className="subtitle1 card-text">
                台南市歸仁區歸仁大道100號{' '}
              </span>
            </div>

            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <a
                  href="#"
                  className="btn rounded-pill btn-md tag"
                  type="button"
                >
                  自然
                </a>
                <a
                  href="#"
                  className="btn rounded-pill btn-md tag aaa"
                  type="button"
                >
                  自然
                </a>
              </div>
              <a href="#" className="btn d-flex join">
                參加活動
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCardVerRelative
