import React from 'react'
import '../../style/default.scss'
import '../../style/event_attendant.scss'
import { devUrl } from '../../config'

function EventAttendant() {
  return (
    <>
      <div className="back">
        <div className="att-container content">
          <div className="att-header">
            <h6>2020/03/05-2020/03/17</h6>
            <h5 className="title">阿里山國家公園二日遊輕鬆拍</h5>
            <h5 className="title">參與者</h5>
            <div className="status">
              <ul className="d-flex">
                <li className="subtitle1 selected-status">確定參加 (12)</li>
                <li className="subtitle1">退出 (5)</li>
                <li className="subtitle1">候補 (2)</li>
              </ul>
            </div>
          </div>

          <div className="list">
            <div className="list-content row holder">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2 host">主揪</p>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>

            <div className="list-content row">
              <div className="pic col-2 d-flex justify-content-start align-items-center">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
              <div className="detail d-flex col-10 align-items-center">
                <div className="de">
                  <h6>陳宇軒</h6>
                  <p className="subtitle2">1月1日, 12:25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventAttendant
