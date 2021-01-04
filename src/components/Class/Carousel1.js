import React from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { devUrl } from '../../config'
import '../../style/class/Carousel1.scss'

function Carousel1() {
  return (
    <>
      <Carousel className="carousel_block">
        <div className="carousel">
          <img src={devUrl + '/pic/pic/栗松溫泉.jpg'} alt="" />
          <p className="legend">栗松溫泉</p>
        </div>
        <div className="carousel">
          <img src={devUrl + '/pic/pic/烏嘎彥竹林.jpg'} alt="" />
          <p className="legend">烏嘎彥竹林</p>
        </div>
        <div className="carousel">
          <img src={devUrl + '/pic/pic/茶壺山.jpeg'} alt="" />
          <p className="legend">茶壺山</p>
        </div>
        <div className="carousel">
          <img src={devUrl + '/pic/pic/高美濕地.jpeg'} alt="" />
          <p className="legend">高美濕地</p>
        </div>
        <div className="carousel">
          <img src={devUrl + '/pic/pic/合歡山.jpeg'} alt="" />
          <p className="legend">合歡山</p>
        </div>
      </Carousel>
    </>
  )
}

export default Carousel1

// 參考來源：http://react-responsive-carousel.js.org/
