import React from 'react'
import '../../style/class/search_top.scss'
import { devUrl } from '../../config'
import { Carousel } from 'react-bootstrap'

function SearchTop() {
  return (
    <>
      <div className="class_search_top_wrapper">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100 carousel-img"
              src={devUrl + '/Pic/class/class_slider1.jpg'}
              alt="First slide"
            />
            <Carousel.Caption>
              <p className="subtitle1">2021/04/13-2021/05/20</p>
              <h5>食物攝影課程</h5>
              <p>風格餐桌美食攝影</p>
              <p>授課老師：克萊德</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={devUrl + '/Pic/class/class_slider2.jpg'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="subtitle1">2021/03/22-2021/07/20 </p>
              <h5>人像攝影課程</h5>
              <p>日系人像攝影棚拍課程</p>
              <p>授課老師：阿德</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={devUrl + '/Pic/class/class_slider3.jpg'}
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="subtitle1">2021/03/22-2020/03/25</p>
              <h5>風景攝影課程</h5>
              <p>台東三仙台日落攝影課程</p>
              <p>授課老師：吳東安</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="my-container">
          <div className="scroll">
            <h6 className="d-inline-block">SCROLL DOWN</h6>
            <img
              className="d-inline-block c-icon"
              src={devUrl + '/Pic/SVG/scroll.svg'}
              alt=""
            />
          </div>
        </div>

        <div className="class_wave1">
          <img src={devUrl + '/Pic/SVG/wave-white-1440.svg'} alt="" />
        </div>
      </div>
    </>
  )
}

export default SearchTop
