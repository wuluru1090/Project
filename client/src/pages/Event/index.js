import React from 'react'
import '../../index.scss'
import EventMain from '../../components/Event/EventMain'
// import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Event(props) {
  //首頁搜尋欄子傳子
  const { conditionsobad } = props
  return (
    <>
      <EventMain conditionsobad={conditionsobad} />
    </>
  )
}
export default Event
