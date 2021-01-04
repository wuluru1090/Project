import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event-card-ver.scss'

function EventCardVer() {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
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
        <div className="card-body">
          <h5 className="cardtitle">四草綠意盎然 台南七股一日遊</h5>
          <div className="d-flex inform">
            <img className="icon" src="/pic/svg/photo-camera.svg" alt="" />
            <p className="card-text">四草綠色隧道 </p>
          </div>
          <div className="d-flex inform">
            <img className="icon2" src="/pic/svg/date_range-24px.svg" alt="" />
            <p className="card-text d-flex">2021-01-28 </p>
          </div>
          <div className="d-flex inform">
            <img className="icon3" src="/pic/svg/location_on-24px.svg" alt="" />
            <p className="card-text">台南市歸仁區歸仁大道100號 </p>
          </div>

          <div className="d-flex justify-content-between">
            <div className="tag-box">
              <a href="#" className="btn rounded-pill btn-md tag" type="button">
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
    </>
  )
}

export default EventCardVer
