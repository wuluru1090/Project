import React, { useState, useEffect } from 'react'

import '../../index.scss'
import EventMain from '../../components/Event/EventMain'
// import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Event(props) {
  //首頁搜尋欄子傳子
  const { conditionsobad } = props
  const [dataLoading, setDataLoading] = useState(false)

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => setDataLoading(false), 200)
  }, [])

  const loading = (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <EventMain conditionsobad={conditionsobad} isAuth={props.isAuth} />
    </>
  )

  return dataLoading ? loading : display
}
export default Event
