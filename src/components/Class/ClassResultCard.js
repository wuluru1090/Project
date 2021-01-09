import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/ClassResultCard.scss'
import { devUrl } from '../../config'

function ClassResultCard(props) {
  const [isActive, setIsActive] = useState(false)
  const class_search = {
    image: '茶壺山.jpeg',
    title: '用手機．拍片去！手機輕旅行的影片日記',
    content:
      '這堂課將用系統且完整的方式，深入淺出地分享旅行錄影的技巧，只要善用自己的手機，就能用影片記錄下自己的旅行日記',
    date: '2021-01-28',
    address: '台南市歸仁區歸仁大道100號',
  }
  return (
    <>
      <div className="class_result_card d-flex">
        {/* <div className="d-flex dcard"> */}
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag un-pushed"
          alt="..."
          onClick={() => setIsActive(true)}
          style={isActive ? { display: 'none' } : { display: 'inline' }}
          id="inactive"
        />
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag pushed"
          alt="..."
          onClick={() => setIsActive(false)}
          style={isActive ? { display: 'inline' } : { display: 'none' }}
          id="active"
        />
        <img
          src={devUrl + '/pic/pic/' + class_search.image}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{class_search.title}</h5>

          <div className="d-flex bbb">
            <p className="card-text font16">{class_search.content}</p>
          </div>
          <div className="d-flex bbb">
            <img className="icon2" src="/pic/SVG/date_range-24px.svg" alt="" />
            <p className="card-text d-flex">{class_search.date}</p>
          </div>
          <div className="d-flex bbb">
            <img className="icon3" src="/pic/SVG/location_on-24px.svg" alt="" />
            <p className="card-text">{class_search.address} </p>
          </div>
          <div className="d-flex justify-content-end btn_group">
            <div className="d-flex">
              <button className="btn d-flex join">
                <a href={devUrl + '/class'}>參加活動</a>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
export default ClassResultCard
