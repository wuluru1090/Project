import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/card.scss'

function Card2(props) {
  return (
    <>
      <div className="ccard">
        <div className="d-flex dcard">
          <div>
            <img
              src={devUrl + '/pic/svg//bookmark-24px.svg'}
              className="ccc"
              alt="..."
            />
            <img
              src={devUrl + '/pic/pic/中正紀念堂.jpg'}
              className="card-img-top photo"
              alt="..."
            />
            <a href="#">
              <img
                className="eee"
                src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
              ></img>
            </a>
            <a href="#">
              <img
                className="fff"
                src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
              ></img>
            </a>
            <a href="#">
              <img
                className="hhh"
                src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
              ></img>
            </a>
          </div>
          <div className="">
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
              <div className="d-flex">
                <button
                  className="btn rounded-pill btn-md d-flex ggg"
                  type="button"
                >
                  自然
                </button>
                <button
                  className="btn rounded-pill btn-md d-flex ggg aaa"
                  type="button"
                >
                  自然
                </button>
                <button className="btn d-flex join">參加活動</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2
