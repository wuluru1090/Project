import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'
function SeeMemberAlbum() {
  return (
    <>
      <div className="album-page">
        <div className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <Link to="/see">
            <div>回到會員頁</div>
          </Link>
        </div>

        <div className="title row">
          <div className="word col-9">
            <h6>2020/03/05-2020/03/17</h6>
            <h5>阿里山國家公園二日遊輕鬆拍</h5>
          </div>
        </div>
        {/* 圖片部分開始 */}
        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            <a href={devUrl + '/see/Album/photo'} className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </a>

            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SeeMemberAlbum
