import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { MdKeyboardArrowLeft } from 'react-icons/md'

function EventAlbum() {
  return (
    <>
      <div className="album-page">
        <div className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <div>回到活動頁</div>
        </div>

        <div className="title row">
          <div className="word col-9">
            <h6>2020/03/05-2020/03/17</h6>
            <h5>阿里山國家公園二日遊輕鬆拍</h5>
          </div>
          <div className="button col-3 d-flex justify-content-end align-items-end">
            <button className="btn rounded-pill upload-button bg-secondary">
              編輯圖片
            </button>
            <button className="btn rounded-pill upload-button">上傳圖片</button>
          </div>
        </div>
        {/* 圖片部分開始 */}
        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            <a href={devUrl + '/photo'} className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </a>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
            <div className="photo-card col-4">
              <figure>
                <img src="" alt=""></img>
              </figure>
              <div>
                <h6>我是標題</h6>
                <p className="subtitle1">作者名</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventAlbum
