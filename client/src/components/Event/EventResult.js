import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_result.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'
import EventCardHor from './EventCardHor'
import Pagination from '../Main/Pagination'
import { withRouter, useHistory, useLocation } from 'react-router-dom'

//connect with backend
import Axios from 'axios'
import { FaWindows } from 'react-icons/fa'

function EventResult(props) {
  console.log(props)
  let history = useHistory()
  let location = useLocation()
  const [tagEventId, setTagEventId] = useState()
  const [displayCard, setDisplayCard] = useState(true)
  const [eventResult, setEventResult] = useState([])

  let tagName = ''

  const {
    locate = '',
    searchbar = '',
    theme = '',
    time = '',
    type = '',
    tag = [],
  } = props.condition

  //標籤
  if (props.location.search !== '') {
    const queryString = require('query-string')
    let param = queryString.parse(props.location.search)
    if ('theme' in param) {
      props.condition.theme = param.theme
    } else {
      props.condition.theme = ''
    }
    if ('type' in param) {
      props.condition.type = param.type
    } else {
      props.condition.type = ''
    }
    // if ('tag' in param) {
    //   tagName = param.tag
    //   console.log(tagName)
    // } else {
    //   props.condition.tag = []
    // }
    // var height = window.innerHeight
    // height = height - 60
    // window.scrollTo({ top: height, behavior: 'smooth' })
  }

  // console.log(location.search)

  // 搜尋欄子傳子判斷式
  if (props.conditionsobad.searchbar !== '') {
    props.condition.searchbar = props.conditionsobad.searchbar
    props.conditionsobad.searchbar = ''
  } else {
    props.conditionsobad.searchbar = ''
  }

  // 主題子傳子判斷式
  if (props.conditionsobad.theme !== '') {
    props.condition.theme = props.conditionsobad.theme
    props.conditionsobad.theme = ''
  } else {
    props.conditionsobad.theme = ''
  }

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/eventtag?tag=${tagName}`)
      .then((response) => {
        console.log(response.data.map((val) => val.event_tags_event_id))
        setTagEventId(response.data.map((val) => val.event_tags_event_id))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [tagName])

  useEffect(() => {
    if (tagEventId) {
      console.log(tagEventId)
      props.condition.tag = tagEventId
    }
  }, [tagEventId])

  // 取得後端資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/eventsearch?locate=${locate}&searchbar=${searchbar}&theme=${theme}&time=${time}&type=${type}&tag=${tag.join(
        ','
      )}`
    )
      .then((response) => {
        setEventResult(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [locate, searchbar, theme, time, type, tag])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = eventResult.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const resultCard = (
    <div className="result-card d-flex flex-wrap justify-content-start">
      {eventResult.length > 0 &&
        currentPosts.map((val) => {
          return <EventCardVer initVal={val} isAuth={props.isAuth} />
        })}
    </div>
  )
  const resultList = (
    <div className="result-list d-flex justify-content-start flex-wrap">
      {eventResult.length > 0 &&
        currentPosts.map((val) => {
          return <EventCardHor initVal={val} isAuth={props.isAuth} />
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
            {props.condition !==
            {
              locate: '',
              searchbar: '',
              theme: '',
              time: '',
              type: '',
            } ? (
              <button
                className="btn rounded-pill"
                style={{
                  padding: '6px 12px',
                  background: '#104b6d',
                  marginLeft: '12px',
                  marginBottom: '12px',
                  color: '#ffffff',
                }}
                onClick={() => {
                  history.push(`/event`)
                  window.location.reload()
                }}
              >
                顯示所有行程
              </button>
            ) : (
              <></>
            )}
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
        {eventResult.length > 0 ? (
          <div className="have-result d-flex justify-content-center">
            {displayCard ? resultCard : resultList}
          </div>
        ) : (
          <div className="no-result ">
            <h5>很抱歉，未找到符合的搜尋結果。</h5>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary rounded-pill"
                onClick={() => {
                  history.push('/event')
                  window.location.reload()
                }}
              >
                返回全部活動
              </button>
            </div>
          </div>
        )}

        <div className="page ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={eventResult.length}
            paginate={paginate}
            className="pagination"
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(EventResult)
