import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/ClassResultCard.scss'
import Axios from 'axios'
import { devUrl } from '../../config'
import { DateConvert } from '../Main/DateTimeConverter'

function ClassResultCard(props) {
  const [isActive, setIsActive] = useState(false)
  const class_info = props.cardData
  console.log(class_info)

  function setActiveEvent(isActive) {
    if (isActive) {
      Axios.post('http://localhost:3001/class/favorites', {
        member_id: 101,
        class_id: class_info.class_id,
        member_like: 1,
      }).then(() => {
        alert('收藏成功')
      })
    } else {
      Axios.delete(
        `http://localhost:3001/class/delete/${class_info.class_id}`
      ).then(() => {
        alert('取消收藏')
      })
    }

    setIsActive(isActive)
  }

  return (
    <>
      <div className="class_result_card d-flex">
        <figure className="photo">
          <img
            src={devUrl + '/pic/class/' + class_info.class_main_pic}
            className="card-img-top"
            alt="..."
          />
        </figure>
        {/* 未收藏 */}
        <img
          src={devUrl + '/Pic/SVG/bookmark.svg'}
          className="tag un-pushed"
          alt="..."
          onClick={() => setActiveEvent(true)}
          style={isActive ? { display: 'none' } : { display: 'inline' }}
          id="inactive"
        />
        {/* 已收藏 */}
        <img
          src={devUrl + '/pic/SVG/bookmark-pushed.svg'}
          className="tag pushed"
          alt="..."
          onClick={() => setActiveEvent(false)}
          style={isActive ? { display: 'inline' } : { display: 'none' }}
          id="active"
        />
        <div className="card-body">
          <h5 className="card-title">{class_info.class_name}</h5>

          <div className="d-flex bbb">
            <p
              className="card-text font16"
              dangerouslySetInnerHTML={{ __html: class_info.class_content }}
            />
            {/* <p className="card-text font16">{class_info.class_content}</p> */}
          </div>
          <div className="d-flex bbb">
            <img className="icon2" src="/pic/SVG/date_range-24px.svg" alt="" />
            <p className="card-text d-flex">
              <DateConvert jsonDate={class_info.class_start_date} />
              &nbsp;~&nbsp;
              <DateConvert jsonDate={class_info.class_end_date} />
            </p>
          </div>
          <div className="d-flex bbb">
            <img className="icon3" src="/pic/SVG/location_on-24px.svg" alt="" />
            <p className="card-text">{class_info.class_address} </p>
          </div>
          <div className="d-flex justify-content-end btn_group">
            <div className="d-flex">
              <button className="btn d-flex join">
                <a href={devUrl + '/class/' + class_info.class_id}>參加課程</a>
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
