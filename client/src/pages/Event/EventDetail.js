<<<<<<< HEAD
import React, { useState } from 'react'
import '../../index.scss'
=======
import '../../index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
import EventDetail from '../../components/Event/EventDetail'

function EventDetails() {
  return (
<<<<<<< HEAD
    <>
      <EventDetail />
    </>
=======
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventDetail />
        {/* <Footer /> */}
      </>
    </Router>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  )
}
export default EventDetails
