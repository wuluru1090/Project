import React from 'react'
import '../../style/default.scss'
import '../../style/class/search_bottom.scss'
import { devUrl } from '../../config'

function SearchBottom() {
  return (
    <>
      <div className="class-bottom-wrapper">
        <div className="blue-wave-with-couple">
          <img
            className="blue-wave"
            src={devUrl + '/Pic/SVG/wave-blue-with-couple-1440-01.svg'}
          ></img>
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
      </div>
    </>
  )
}
export default SearchBottom
