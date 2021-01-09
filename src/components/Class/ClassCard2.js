import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/class/class_card2.scss'

function Card(props) {
  const [isActive, setIsActive] = useState(false)
  const class_search = {
    image: '茶壺山.jpeg',
    title: '用手機．拍片去！手機輕旅行的影片日記',
    content:
      '這堂課將用系統且完整的方式，深入淺出地分享旅行錄影的技巧，只要善用自己的手機，就能用影片記錄下自己的旅行日記',
    date: '2021-01-28',
    address: '台南市歸仁區歸仁大道100號',
  }
  return (
    <>
      <div className="card class_suggest_card">
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
          src={devUrl + '/pic/pic/' + class_search.image}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="cardtitle">{class_search.title}</h5>
          <div className="d-flex">
            <img className="icon" src={devUrl + '/pic/SVG/date.svg'} alt="" />
            <p className="suggest-card-text d-flex">{class_search.date}</p>
          </div>
          <div className="d-flex info">
            <img
              className="icon"
              src={devUrl + '/pic/SVG/location.svg'}
              alt=""
            />
            <p className="suggest-card-text">{class_search.address} </p>
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn d-flex join">參加活動</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
