import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/event/event_searchbar.scss'
<<<<<<< HEAD

import { MdLocationOn } from 'react-icons/md'

function Searchbar2(props) {
  const [searchbar, setSearchbar] = useState('')
  const [locate, setLocate] = useState('')
  const [time, setTime] = useState('')
  const [theme, setTheme] = useState('')
  const [timeRange, setTimeRange] = useState('')

  //計算日期
  const today = new Date().getTime()
  const in1week = new Date(today + 1000 * 60 * 60 * 24 * 7)
  const in1Month = new Date(today + 1000 * 60 * 60 * 24 * 30)
  const in3Month = new Date(today + 1000 * 60 * 60 * 24 * 90)
  const in6Month = new Date(today + 1000 * 60 * 60 * 24 * 180)

  //把標準時間成sql dateTime格式
  function converter(D) {
    let dateTime = new Date(D)
    let yyyy = dateTime.getFullYear()
    let mm = dateTime.getMonth() + 1
    let dd = dateTime.getDate()
    let tt = '23:59:59'

    dateTime = String(yyyy + '/' + mm + '/' + dd + ' ' + tt)
    return dateTime
  }

  useEffect(() => {
    switch (time) {
      case 'inAWeek':
        console.log(converter(in1week))
        setTimeRange(in1week)
        break
      case 'in1Month':
        console.log(converter(in1Month))
        setTimeRange(in1Month)
        break
      case 'in3Month':
        console.log(converter(in3Month))
        setTimeRange(in3Month)
        break
      case 'in6Month':
        console.log(converter(in6Month))
        setTimeRange(in6Month)
        break
      case '':
        setTimeRange('')
    }
  }, [time])

  //設定條件
  const Condition = () => {
    props.setCondition({
      searchbar: searchbar,
      locate: locate,
      time: timeRange,
      theme: theme,
      type: '',
    })
    var height = window.innerHeight
    height = height - 60
    window.scrollTo({ top: height, behavior: 'smooth' })
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
                onKeyPress={(e) => {
                  if (e.charCode == 13)
                    document.getElementById('submitBtn').click()
                }}
              />
            </div>
            <button
              className="btn rounded-pill sub"
              onClick={Condition}
              id="submitBtn"
            >
              搜尋
            </button>
          </div>
=======
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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
        </div>

        <div className="mb-4 tags d-flex flex-wrap">
          {/* 地點 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
<<<<<<< HEAD
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
              <option value="inAWeek">近一週</option>
              <option value="in1Month">近一個月</option>
              <option value="in3Month">近三個月</option>
              <option value="in6Month">近六個月</option>
=======
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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
            </select>
          </div>
          {/* 時間結束 */}
          {/* 類型 */}
          <div className="form-group mr-3">
            <select
              className="form-control btn rounded-pill btn-md d-flex control align-items-center"
<<<<<<< HEAD
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
=======
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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
      </div>
    </>
  )
}

export default Searchbar2
