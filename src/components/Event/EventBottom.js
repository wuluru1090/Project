import React from 'react'
import '../../style/default.scss'
import '../../style/event_search.scss'
import { devUrl } from '../../config'

function EventBottom() {
  return (
    <>
      <div className="blue-wave-with-couple">
        <img src={devUrl + '/Pic/SVG/wave-blue-1440.svg'}></img>
      </div>
      <div className="wave-height">
        <div className="theme d-flex justify-content-center">
          <a href="#" className="btn rounded-pill theme-button" type="button">
            風景攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            人像攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            商業攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            生態攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            建築攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            旅遊攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            美食攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            夜景攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            人文攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            手機攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            水中攝影
          </a>
          <a href="#" className="btn rounded-pill theme-button" type="button">
            其他類型
          </a>
        </div>
      </div>
    </>
  )
}
export default EventBottom
