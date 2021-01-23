import React, { Component } from 'react'
import EventAlbumPhotoCarousel from './EventAlbumPhotoCarousel'
import '../../style/event/event_inspect_photo.scss'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { withRouter, useHistory } from 'react-router-dom'

function EventInspectPhoto(props) {
  window.scrollTo(0, 0)
  let history = useHistory()

  return (
    <>
      <div className="inspect-photo-wrapper">
        <div className="btn-div">
          <button
            className="go-back d-flex align-items-center"
            onClick={() => {
              history.goBack()
            }}
          >
            <MdKeyboardArrowLeft />
            <div>回到相簿</div>
          </button>
        </div>
        <div className="photo-carousel">
          <EventAlbumPhotoCarousel />
        </div>
      </div>
    </>
  )
}

export default withRouter(EventInspectPhoto)
