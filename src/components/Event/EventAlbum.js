import React from 'react'
import '../../style/default.scss'
import '../../style/event_search.scss'
import { devUrl } from '../../config'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'

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
            <button className="btn rounded-pill upload-button">上傳圖片</button>
          </div>
        </div>

        <div className="album-slider row">
          <div className="arrow col d-flex justify-content-center align-items-center">
            <MdKeyboardArrowLeft size={30} color={'#adcbdd'} />
          </div>
          <div className="album-content row col-11">
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
          <div className="arrow col d-flex justify-content-center align-items-center">
            <MdKeyboardArrowRight size={30} color={'#adcbdd'} />
          </div>
        </div>
      </div>
    </>
  )
}
export default EventAlbum
