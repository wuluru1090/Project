import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/class/class_card2.scss'
import Axios from 'axios'
import { DateConvert } from '../Main/DateTimeConverter'

function Card(props) {
  const cardInfo = props.calData
  const carouselClassId = props.classCaId
  const [isActive, setIsActive] = useState(false)

  const addFavorites = () => {
    Axios.post('http://localhost:3001/class/favorites', {
      member_id: 101,
      class_id: carouselClassId,
      member_like: 1,
    }).then(() => {
      alert('收藏成功')
    })
  }

  const deleteFavorites = () => {
    Axios.delete(`http://localhost:3001/class/delete/${carouselClassId}`).then(
      () => {
        alert('取消收藏')
      }
    )
  }

  return (
    <>
      <div className="card class_suggest_card">
        {/* 未收藏 */}
        <img
          src={devUrl + '/pic/SVG/bookmark-24px.svg'}
          className="tag un-pushed"
          alt="..."
          onClick={() => {
            setIsActive(true)
            addFavorites()
          }}
          style={isActive ? { display: 'none' } : { display: 'inline' }}
          id="inactive"
        />
        {/* 已收藏 */}
        <img
          src={devUrl + '/pic/SVG/bookmark-pushed.svg'}
          className="tag pushed"
          alt="..."
          onClick={() => {
            setIsActive(false)
            deleteFavorites()
          }}
          style={isActive ? { display: 'inline' } : { display: 'none' }}
          id="active"
        />
        <img
          src={devUrl + '/pic/class/' + cardInfo.class_main_pic}
          className="card-img-top photo"
          alt="..."
        />
        {/* 輪播卡片 */}
        <div className="card-body">
          <h5 className="cardtitle">{cardInfo.class_name}</h5>
          <div className="d-flex">
            <img className="icon" src={devUrl + '/pic/SVG/date.svg'} alt="" />
            <p className="suggest-card-text d-flex">
              <DateConvert jsonDate={cardInfo.class_start_date} />
              &nbsp;~&nbsp;
              <DateConvert jsonDate={cardInfo.class_end_date} />
            </p>
          </div>
          <div className="d-flex info">
            <img
              className="icon"
              src={devUrl + '/pic/SVG/location.svg'}
              alt=""
            />
            <p className="suggest-card-text address">
              {cardInfo.class_address}
            </p>
          </div>

          <div className="d-flex justify-content-end">
            <button className="btn d-flex join">
              <a href={devUrl + '/class/' + cardInfo.class_id}>參加課程</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
