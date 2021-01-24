import React, { useState } from 'react'
import '../../index.scss'
import EventDetail from '../../components/Event/EventDetail'

function EventDetails(props) {
  return (
    <>
      <EventDetail isAuth={props.isAuth} />
    </>
  )
}
export default EventDetails
