import React from 'react'
import '../../style/default.scss'
import '../../style/event_search.scss'
import { devUrl } from '../../config'

function EventBottom() {
  return (
    <>
      <div className="blue-wave-with-couple"></div>
      <div className="wave-height">
        <div className="theme d-flex justify-content-center">
          <button className="btn rounded-pill theme-button" type="button">
            風景攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            人像攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            商業攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            生態攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            建築攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            旅遊攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            美食攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            夜景攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            人文攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            手機攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            水中攝影
          </button>
          <button className="btn rounded-pill theme-button" type="button">
            其他類型
          </button>
        </div>
      </div>
    </>
  )
}
export default EventBottom
