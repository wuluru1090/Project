import React from 'react'
import '../style/default.scss'
import '../style/main_class.scss'
import { devUrl } from '../config/'
import { RotateLoader } from 'react-spinners'

function ClassMain() {
  return (
    <div className="wave_background">
      <div className="wrapper">
        <div className="page-head">
          <div>
            <h6 className="subtitle1">2020/05/30</h6>
            <h5>這是一個活動標題</h5>
          </div>
          <div className="page-head-part2">
            <div className="organizer_info">
              <div className="organizer">
                <figure>
                  <img src={devUrl + '/Pic/pic/member.jpg'} alt="" />
                </figure>
              </div>
              <span>
                張思婷
                <br />
                <span>發起的活動</span>
              </span>
            </div>
            <div className="btn_part">
              <button>收藏</button>
              <button>分享</button>
            </div>
          </div>
          <div className="bread_crumb">麵包屑放置處</div>
        </div>
        <div className="class_pic">
          <figure>
            <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="哭哭" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default ClassMain
