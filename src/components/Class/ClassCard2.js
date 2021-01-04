import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/class/class_card2.scss'

function Card(props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <>
      <div className="card ccard">
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag un-pushed"
          alt="..."
          onClick={() => setIsActive(true)}
          style={isActive ? { display: 'none' } : { display: 'inline' }}
          id="inactive"
        />
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag pushed"
          alt="..."
          onClick={() => setIsActive(false)}
          style={isActive ? { display: 'inline' } : { display: 'none' }}
          id="active"
        />
        <img
          src={devUrl + '/pic/pic/合歡山.jpeg'}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="cardtitle">四草綠意盎然 台南七股一日遊</h5>
          <div className="d-flex">
            <img className="icon" src={devUrl + '/pic/SVG/date.svg'} alt="" />
            <p className="card-text d-flex">2021-01-28 </p>
          </div>
          <div className="d-flex info">
            <img
              className="icon"
              src={devUrl + '/pic/SVG/location.svg'}
              alt=""
            />
            <p className="card-text">台南市歸仁區歸仁大道100號 </p>
          </div>

          <div className="d-flex">
            <button className="btn d-flex join">參加活動</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
