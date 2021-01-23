import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_main.scss'
import SearchbarEvent from './SearchbarEvent'
import ScrollTop from '../Main/ScrollTop'
import EventResult from './EventResult'
import EventBottom from './EventBottom'
import { devUrl } from '../../config'
import { Carousel } from 'react-bootstrap'

function EventMain(props) {
  window.scrollTo(0, 0)
  const [condition, setCondition] = useState({})
  const [clean, setClean] = useState(false)

  //首頁搜尋欄子傳子
  const { conditionsobad } = props

  return (
    <>
      <div className="event-wrapper">
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

        <div className="event-search-bar">
          <h3>尋找理想中的攝影行程</h3>
          <SearchbarEvent setCondition={setCondition} />
        </div>

        <ScrollTop />
        <div className="wave1">
          <img src={devUrl + '/Pic/SVG/wave-white-1440.svg'} alt="" />
        </div>
      </div>

      <EventResult
        condition={condition}
        conditionsobad={conditionsobad}
        isAuth={props.isAuth}
      />
      <EventBottom setCondition={setCondition} />
    </>
  )
}

export default EventMain
