import React from 'react'
import Pagination from './Pagination'
import '../../style/default.scss'
import '../../style/event_search.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'

function EventResult() {
  return (
    <>
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">搜尋結果 共16筆</h6>
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
        <div className="divider"></div>
        {/* <div className="no-result">
          <h5>很抱歉，未找到符合的搜尋結果。</h5>
        </div> */}
        <div className="have-result d-flex row justify-content-center">
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <EventCardVer />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  )
}

export default EventResult
