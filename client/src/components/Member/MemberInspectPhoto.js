import React, { Component } from 'react'
import MemberAlbumPhotoCarousel from './MemberAlbumPhotoCarousel'
import '../../style/event/event_inspect_photo.scss'
import { MdKeyboardArrowLeft } from 'react-icons/md'

function MemberInspectPhoto() {
  return (
    <>
      <div className="inspect-photo-wrapper">
        <a href="#" className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <div>回到相簿</div>
        </a>
        <div className="photo-carousel">
          <MemberAlbumPhotoCarousel />
        </div>
      </div>
    </>
  )
}

export default MemberInspectPhoto
