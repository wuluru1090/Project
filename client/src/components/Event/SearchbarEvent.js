import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_searchbar.scss'
import { MdLocationOn } from 'react-icons/md'

function Searchbar2(props) {
  return (
    <>
      <div className="event-searchbar-wrapper">
        <div className="search-form">
          <form className="form-inline md-form">
            <div className="form-group form-row" style={{ width: '100%' }}>
              <img
                src={devUrl + '/pic/pic/icon-action-search_24px.png'}
                alt="Sear"
                className="searchicon"
              />

              <div className="col">
                <input
                  className="form-control rounded-pill search-input"
                  type="text"
                  placeholder="尋找活動"
                  aria-label="Search"
                />
              </div>
              <button className="btn rounded-pill sub" type="submit">
                搜尋
              </button>
            </div>
          </form>
        </div>

        <div className="mb-4 tags d-flex flex-wrap">
          {/* 地點 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="exampleFormControlSelect1"
            >
              <option data-icon="fa-heart" selected>
                地點(縣市)
              </option>
              <option>台北市</option>
              <option>新北市</option>
              <option>基隆市</option>
              <option>桃園市</option>
            </select>
          </div>
          {/* 地點結束 */}
          {/* 時間 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="exampleFormControlSelect1"
              placeholder="時間"
            >
              <option>近三天</option>
              <option>近一週</option>
              <option>近一個月</option>
              <option>近三個月</option>
              <option>近六個月</option>
              <option>六個月以上</option>
            </select>
          </div>
          {/* 時間結束 */}
          {/* 類型 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="exampleFormControlSelect1"
            >
              <option selected>主題</option>
              <option>風景攝影</option>
              <option>人像攝影</option>
              <option>商業攝影</option>
              <option>生態攝影</option>
              <option>建築攝影</option>
              <option>旅遊攝影</option>
              <option>美食攝影</option>
              <option>夜景攝影</option>
              <option>人文攝影</option>
              <option>手機攝影</option>
              <option>水中攝影</option>
              <option>其他</option>
            </select>
          </div>

          {/* 類型結束 */}
          {/* <button
            className="btn rounded-pill btn-md d-flex control align-items-center"
            type="button"
          >
            <img src={devUrl + '/pic/pic/location_on-24px.png'} alt="Loca" />
            地點(縣市)
          </button>
          <button
            className="btn rounded-pill btn-md d-flex control align-items-center"
            type="button"
          >
            <img src={devUrl + '/pic/pic/date_range-24px.png'} alt="Date" />
            時間
          </button>
          <button
            className="btn rounded-pill btn-md d-flex control align-items-center"
            type="button"
          >
            <img src={devUrl + '/pic/pic/filter_vintage-24px.png'} alt="Vint" />
            類型
          </button> */}
        </div>
      </div>
    </>
  )
}

export default Searchbar2
