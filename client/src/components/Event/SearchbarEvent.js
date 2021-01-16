import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_searchbar.scss'

import { MdLocationOn } from 'react-icons/md'

function Searchbar2(props) {
  const [searchbar, setSearchbar] = useState('')
  const [locate, setLocate] = useState('')
  const [time, setTime] = useState('')
  const [theme, setTheme] = useState('')

  const Condition = () => {
    // console.log(searchbar, locate, time, theme)
    props.setCondition({
      searchbar: searchbar,
      locate: locate,
      time: time,
      theme: theme,
    })
  }

  return (
    <>
      <div className="event-searchbar-wrapper">
        {/* <form className="form-inline md-form"> */}
        <div className="search-form">
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
                onChange={(e) => setSearchbar(e.target.value)}
              />
            </div>
            <button className="btn rounded-pill sub" onClick={Condition}>
              搜尋
            </button>
          </div>
        </div>

        <div className="mb-4 tags d-flex flex-wrap">
          {/* 地點 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="locate"
              onChange={(e) => setLocate(e.target.value)}
            >
              <option value="" selected>
                地點(縣市)
              </option>
              <option value="1">基隆市</option>
              <option value="2">台北市</option>
              <option value="3">新北市</option>
              <option value="4">桃園市</option>
              <option value="5">新竹市</option>
              <option value="6">新竹縣</option>
              <option value="7">苗栗縣</option>
              <option value="8">台中市</option>
              <option value="9">彰化縣</option>
              <option value="10">南投縣</option>
              <option value="11">雲林縣</option>
              <option value="12">嘉義市</option>
              <option value="13">嘉義縣</option>
              <option value="14">台南市</option>
              <option value="15">高雄市</option>
              <option value="16">屏東縣</option>
              <option value="17">台東縣</option>
              <option value="18">花蓮縣</option>
              <option value="19">宜蘭縣</option>
              <option value="20">澎湖縣</option>
              <option value="21">金門縣</option>
              <option value="22">連江縣</option>
            </select>
          </div>
          {/* 地點點結束 */}
          {/*時間 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="time"
              placeholder="時間"
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="" selected>
                時間
              </option>
              <option value="1">近一週</option>
              <option value="2">近一個月</option>
              <option value="3">近三個月</option>
              <option value="4">近六個月</option>
              <option value="5">六個月以上</option>
            </select>
          </div>
          {/* 時間結束 */}
          {/* 類型 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
              id="theme"
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="" selected>
                主題
              </option>
              <option value="1">風景攝影</option>
              <option value="2">人像攝影</option>
              <option value="3">商業攝影</option>
              <option value="4">生態攝影</option>
              <option value="5">建築攝影</option>
              <option value="6">旅遊攝影</option>
              <option value="7">美食攝影</option>
              <option value="8">夜景攝影</option>
              <option value="9">人文攝影</option>
              <option value="10">手機攝影</option>
              <option value="11">水中攝影</option>
              <option value="12">其他</option>
            </select>
          </div>
          {/* 類型結束 */}
        </div>
        {/* </form> */}
      </div>
    </>
  )
}

export default Searchbar2
