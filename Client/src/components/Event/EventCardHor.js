import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/event/event_card_hor.scss'

function EventCardHor() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="event-card-horizon">
        <div className="d-flex">
          <div>
            <img
              src={devUrl + '/Pic/SVG/bookmark.svg'}
              className="bookmark"
              alt="..."
              onClick={() => setIsActive(true)}
              style={isActive ? { display: 'none' } : { display: 'inline' }}
            />
            <img
              src={devUrl + '/Pic/SVG/bookmark-pushed.svg'}
              className="bookmark"
              alt="..."
              onClick={() => setIsActive(false)}
              style={isActive ? { display: 'inline' } : { display: 'none' }}
            />
            <img
              src={devUrl + '/pic/pic/event-slider1.jpg'}
              className="card-img-top photo"
              alt="..."
            />
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
          </div>

          <div className="card-body">
            <h5 className="card-title">四草綠意盎然 台南七股一日遊</h5>
            <p className="t2">
              位於台南安南區有個熱門景點「四草綠色隧道」，這條台版亞馬遜河有著大自然的奧妙，可以看到鳥類植物等生態形成的樹林景觀。
            </p>
            <div className="d-flex bbb">
              <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
              <p className="card-text">四草綠色隧道 </p>
            </div>
            <div className="d-flex bbb">
              <img
                className="icon2"
                src="/pic/svg/date_range-24px.svg"
                alt=""
              />
              <p className="card-text d-flex">2021-01-28 </p>
            </div>
            <div className="d-flex bbb">
              <img
                className="icon3"
                src="/pic/svg/location_on-24px.svg"
                alt=""
              />
              <p className="card-text">台南市歸仁區歸仁大道100號 </p>
            </div>
            <div className="d-flex justify-content-between buttons">
              <div className="tag-box">
                <button className="btn rounded-pill btn-md  tag" type="button">
                  自然
                </button>
                <button className="btn rounded-pill btn-md  tag" type="button">
                  自然
                </button>
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

export default EventCardHor
