import React from 'react'
import MemberAlbumPhotoCarousel from '../../components/Member/MemberAlbumPhotoCarousel'
import '../../style/event/event_inspect_photo.scss'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
function UserSeeMemberAlbum() {
  return (
    <>
      <div className="inspect-photo-wrapper">
        <Link to="/see/Album">
          <a href="#" className="go-back d-flex align-items-center">
            <MdKeyboardArrowLeft />
            <div>回到相簿</div>
          </a>
        </Link>

        <div className="photo-carousel">
          <MemberAlbumPhotoCarousel />
        </div>
      </div>
    </>
  )
}

export default UserSeeMemberAlbum
