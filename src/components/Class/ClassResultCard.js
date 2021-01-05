import React from 'react'
import '../../style/default.scss'
import '../../style/class/ClassResultCard.scss'
import { devUrl } from '../../config'
import { MdVisibility, MdBrightnessHigh } from 'react-icons/md'
function ClassResultCard() {
  return (
    <>
      <div className="class_result_card">
        <div className="d-flex dcard">
          <div>
            <img
              src={devUrl + '/pic/pic/茶壺山.jpeg'}
              className="card-img-top photo"
              alt="..."
            />
          </div>
          <div className="">
            <div className="card-body">
              <h5 className="card-title">
                用手機．拍片去！手機輕旅行的影片日記
              </h5>

              <div className="d-flex bbb">
                <p className="card-text font16">
                  這堂課將用系統且完整的方式，深入淺出地分享旅行錄影的技巧，只要善用自己的
                  手機，就能用影片記錄下自己的旅行日記...
                </p>
              </div>
              <div className="d-flex bbb">
                <img
                  className="icon2"
                  src="/pic/SVG/date_range-24px.svg"
                  alt=""
                />
                <p className="card-text d-flex">2021-01-28 </p>
              </div>
              <div className="d-flex bbb">
                <img
                  className="icon3"
                  src="/pic/SVG/location_on-24px.svg"
                  alt=""
                />
                <p className="card-text">台南市歸仁區歸仁大道100號 </p>
              </div>
              <div className="d-flex justify-content-end btn_group">
                <div className="d-flex">
                  <button className="btn d-flex join">
                    <a href={devUrl + '/class'}>參加活動</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ClassResultCard
