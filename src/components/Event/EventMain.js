import React from 'react'
import '../../style/default.scss'
import '../../style/event_main.scss'
import SearchbarEvent from './SearchbarEvent'
import { devUrl } from '../../config'
import { Carousel } from 'react-bootstrap'

function EventMain() {
  return (
    <>
      <div className="wrapper">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 carousel-img"
              src={devUrl + '/Pic/pic/event-slider1.jpg'}
              alt="First slide"
            />
            <Carousel.Caption>
              <p className="subtitle1">2021/04/13-2020/04/16</p>
              <h5>台東大坡池</h5>
              <p>花蓮六十石山三日行-輕鬆拍</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={devUrl + '/Pic/pic/event-slider2.jpg'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="subtitle1">2021/03/22</p>
              <h5>東引三山據點</h5>
              <p>花蓮六十石山三日行-輕鬆拍</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={devUrl + '/Pic/pic/event-slider3.jpg'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="subtitle1">2021/03/22-2020/03/25</p>
              <h5>嘉義阿里山祝山日出點</h5>
              <p>花蓮六十石山三日行-輕鬆拍</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="my-container">
          <div className="event-search-bar">
            <h4>尋找理想中的攝影行程</h4>
            <SearchbarEvent />
          </div>
          <div className="scroll">
            <h6 className="d-inline-block">SCROLL DOWN</h6>
            <img
              className="d-inline-block c-icon"
              src={devUrl + '/Pic/SVG/scroll.svg'}
              alt=""
            />
          </div>
        </div>
        <div className="wave1">
          <img src={devUrl + '/Pic/SVG/wave-white-1440.svg'} alt="" />
        </div>
      </div>
    </>
  )
}

export default EventMain
