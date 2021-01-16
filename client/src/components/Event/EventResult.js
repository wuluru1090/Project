import React, { useState, useEffect } from 'react'
import EventPagination from './EventPagination'
import '../../style/default.scss'
import '../../style/event/event_result.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'
import EventCardHor from './EventCardHor'

//connect with backend
import Axios from 'axios'

function EventResult(props) {
  console.log(props)

  const { locate = '', searchbar = '', theme = '', time = '' } = props.condition

  const [axiosUrl, setAxiosUrl] = useState('')

  const [displayCard, setDisplayCard] = useState(true)
  const [eventResult, setEventResult] = useState([])

  // 取得後端資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/eventsearch?locate=${locate}&searchbar=${searchbar}&theme=${theme}&time=${time}`
    )
      .then((response) => {
        console.log(response)
        setEventResult(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [locate, searchbar, theme, time])

  const resultCard = (
    <div className="result-card d-flex flex-wrap justify-content-start">
      {eventResult.map((val) => {
        return <EventCardVer initVal={val} />
      })}
    </div>
  )
  const resultList = (
    <div className="result-list d-flex justify-content-start flex-wrap">
      {eventResult.map((val) => {
        return <EventCardHor initVal={val} />
      })}
    </div>
  )

  return (
    <>
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
            <h6 className="d-inline-block">
              搜尋結果 共{eventResult.length}筆
            </h6>
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
        <div className="have-result d-flex justify-content-center">
          {displayCard ? resultCard : resultList}
        </div>

        {/* <div className="page">
          <EventPagination />
        </div> */}
      </div>
    </>
  )
}

export default EventResult
