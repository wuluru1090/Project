import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
=======
import EventPagination from './Pagination'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
import '../../style/default.scss'
import '../../style/event/event_result.scss'
import { devUrl } from '../../config'
import EventCardVer from './EventCardVer'
import EventCardHor from './EventCardHor'
<<<<<<< HEAD
import Pagination from '../Main/Pagination'

//connect with backend
import Axios from 'axios'

function EventResult(props) {
  // console.log(props)

  const {
    locate = '',
    searchbar = '',
    theme = '',
    time = '',
    type = '',
  } = props.condition

  const [displayCard, setDisplayCard] = useState(true)
  const [eventResult, setEventResult] = useState([])

  // 取得後端資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/eventsearch?locate=${locate}&searchbar=${searchbar}&theme=${theme}&time=${time}&type=${type}`
    )
      .then((response) => {
        // console.log(response)
        setEventResult(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [locate, searchbar, theme, time])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = eventResult.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const resultCard = (
    <div className="result-card d-flex flex-wrap justify-content-start">
      {currentPosts.map((val) => {
        return <EventCardVer initVal={val} />
      })}
=======

function EventResult() {
  const [displayCard, setDisplayCard] = useState(true)

  const resultCard = (
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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
    </div>
  )
  const resultList = (
    <div className="result-list d-flex justify-content-start flex-wrap">
<<<<<<< HEAD
      {currentPosts.map((val) => {
        return <EventCardHor initVal={val} />
      })}
    </div>
  )

=======
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
      <EventCardHor />
    </div>
  )
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  return (
    <>
      <div className="event-container">
        <div className="d-flex result-header justify-content-between">
          <div className="result-word">
<<<<<<< HEAD
            <h6 className="d-inline-block">
              搜尋結果 共{eventResult.length}筆
            </h6>
=======
            <h6 className="d-inline-block">搜尋結果 共16筆</h6>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
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
<<<<<<< HEAD
        {eventResult.length > 0 ? (
          <div className="have-result d-flex justify-content-center">
            {displayCard ? resultCard : resultList}
          </div>
        ) : (
          <div className="no-result">
            <h5>很抱歉，未找到符合的搜尋結果。</h5>
            <button className="btn btn-primary rounded-pill" onclick={() => {}}>
              返回全部活動
            </button>
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
=======
        {/* <div className="no-result">
          <h5>很抱歉，未找到符合的搜尋結果。</h5>
        </div> */}
        <div className="have-result d-flex row justify-content-center">
          {displayCard ? resultCard : resultList}
        </div>
        <EventPagination />
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
      </div>
    </>
  )
}

export default EventResult
