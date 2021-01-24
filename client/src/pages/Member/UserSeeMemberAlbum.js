import React from 'react'
import MemberAlbumPhotoCarousel from '../../components/Member/MemberAlbumPhotoCarousel'
import '../../style/event/event_inspect_photo.scss'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { withRouter, useHistory } from 'react-router-dom'
function UserSeeMemberAlbum(props) {
  window.scrollTo(0, 0)
  let history = useHistory()
  return (
    <>
      <div className="inspect-photo-wrapper">
        <div className="btn-div">
          {/* <button
            className="go-back d-flex align-items-center"
            onClick={() => {
              history.goBack()
            }}
          > */}
          <MdKeyboardArrowLeft />
          <div>回到相簿</div>
          {/* </button> */}
        </div>

        <div className="photo-carousel">
          <MemberAlbumPhotoCarousel />
        </div>
      </div>
    </>
  )
}

export default withRouter(UserSeeMemberAlbum)
