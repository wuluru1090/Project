import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import '../../style/default.scss'
import '../../style/event/event_result.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'
import EventCardHor from './EventCardHor'

function EventResult() {
  const [displayCard, setDisplayCard] = useState(true)
  return (
    <>
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">搜尋結果 共16筆</h6>
          </div>
          <div className="result-icon d-inline-block">
            <img
              className=" c-icon"
              src={devUrl + '/Pic/SVG/d-card-unselected.svg'}
              alt=""
              onClick={() => setDisplayCard(true)}
              style={
                displayCard
                  ? { display: 'none' }
                  : { display: 'inline-block', marginRight: '44px' }
              }
            />
            <img
              className=" c-icon card-selected"
              src={devUrl + '/Pic/SVG/d-card-selected.svg'}
              alt=""
              onClick={() => setDisplayCard(false)}
              style={{ display: displayCard ? 'inline-block' : 'none' }}
            />
            <img
              className=" c-icon"
              src={devUrl + '/Pic/SVG/d-list-unselected.svg'}
              alt=""
              onClick={() => setDisplayCard(false)}
              style={{ display: displayCard ? 'inline-block' : 'none' }}
            />
            <img
              className=" c-icon list-selected"
              src={devUrl + '/Pic/SVG/d-list-selected.svg'}
              alt=""
              onClick={() => setDisplayCard(true)}
              style={{ display: displayCard ? 'none' : 'inline-block' }}
            />
          </div>
        </div>
        <div className="divider"></div>
        {/* <div className="no-result">
          <h5>很抱歉，未找到符合的搜尋結果。</h5>
        </div> */}
        <div
          className="have-result d-flex row justify-content-center"
          style={
            displayCard
              ? { display: 'block' }
              : { height: 0, width: 0, opacity: 0 }
          }
        >
          <div className="result-card d-flex row justify-content-start">
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
            <EventCardVer />
          </div>
        </div>
        <div
          className="have-result d-flex row justify-content-center"
          style={
            displayCard
              ? { height: 0, width: 0, opacity: 0 }
              : { display: 'block' }
          }
        >
          <div className="result-list d-flex justify-content-start flex-wrap">
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
            <EventCardHor />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  )
}

export default EventResult
