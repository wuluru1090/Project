<<<<<<< HEAD
import React from 'react'
import '../../index.scss'
import EventMain from '../../components/Event/EventMain'
// import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Event() {
  return (
    <>
      <EventMain />
    </>
=======
import '../../index.scss'
import EventMain from '../../components/Event/EventMain'
import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Event(props) {
  const { isAuth, setIsAuth } = props

  Axios.defaults.withCredentials = true

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        setIsAuth(true)
      }
    })
  }, [])

  if (isAuth === false) {
    return (
      <>
        {/* <Redirect to="/login" /> */}
        <h1>此頁面此限會員登入後觀看</h1>
        <Link to="/login">到會員登入頁</Link>
      </>
    )
  }
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventMain />
        <EventResult />
        <EventBottom />
        {/* <Footer /> */}
      </>
    </Router>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  )
}
export default Event
