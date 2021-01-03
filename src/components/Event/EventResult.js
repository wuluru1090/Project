import React from 'react'
import '../../style/default.scss'
import '../../style/event_search.scss'
import { devUrl } from '../../config'

function EventResult() {
  return (
    <>
<<<<<<< HEAD
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">搜尋結果 共16筆</h6>
          </div>
=======
      <div className="my-container" style={{ background: 'blue' }}>
        <div className="d-flex result-header justify-content-between">
          <p className="d-inline-block">搜尋結果</p>
>>>>>>> fcc2ae1480156750b6f2fe5bc2003b84b9e9b3f4
          <div className="icon d-inline-block">
            <img
              className="d-inline-block c-icon"
              src={devUrl + '/Pic/SVG/d-card-unselected.svg'}
              alt=""
            />
            <img
              className="d-inline-block c-icon"
              src={devUrl + '/Pic/SVG/d-list-unselected.svg'}
              alt=""
            />
          </div>
        </div>
<<<<<<< HEAD
        <div className="divider"></div>
        <div className="no-result">
          <h5>很抱歉，未找到符合的搜尋結果。</h5>
        </div>
=======
>>>>>>> fcc2ae1480156750b6f2fe5bc2003b84b9e9b3f4
      </div>
    </>
  )
}

export default EventResult
