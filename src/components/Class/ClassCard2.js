import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/class/class_card2.scss'

function Card(props) {
  return (
    <>
      <div className="card box d-flex ccard">
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="ccc"
          alt="..."
        />
        <img
          src={devUrl + '/pic/pic/中正紀念堂.jpg'}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="cardtitle">四草綠意盎然 台南七股一日遊</h5>
          <div className="d-flex ddd">
            <img
              className="icon2"
              src={devUrl + '/pic/SVG/date_range-24px.svg'}
              alt=""
            />
            <p className="card-text d-flex">2021-01-28 </p>
          </div>
          <div className="d-flex ddd">
            <img
              className="icon3"
              src={devUrl + '/pic/SVG/location_on-24px.svg'}
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
