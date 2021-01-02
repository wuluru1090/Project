import React from 'react'
import '../style/default.scss'
import '../style/event_search.scss'
import { devUrl } from '../config/'

function EventResult() {
  return (
    <>
      <div className="my-container" style={{ background: 'blue' }}>
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">搜尋結果</h6>
          </div>
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
      </div>
    </>
  )
}

export default EventResult
