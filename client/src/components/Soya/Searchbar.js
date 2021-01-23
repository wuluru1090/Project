import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/soya/searchbar.scss'
import { Link, withRouter } from 'react-router-dom'

function Searchbar(props) {
  // 子傳子元件
  const { setConditionsobad } = props
  const [searchbar, setSearchbar] = useState('')
  const Condition = async () => {
    await setConditionsobad({
      searchbar: searchbar,
      locate: '',
      time: '',
      theme: '',
      type: '',
    })
    props.history.push('/event')
  }
  return (
    <>
      <div className="searchbar">
        <div className="mt-4">
          <div className="form-inline md-form mb-4 m-auto position-relative">
            <img
              src={devUrl + '/pic/pic/icon-action-search_24px.png'}
              alt="Sear"
              className="position-absolute searchicon"
            />

            <input
              className="form-control  rounded-pill col-8 searchbar2"
              type="text"
              placeholder="尋找攝影活動"
              aria-label="Search"
              onChange={(e) => setSearchbar(e.target.value)}
              onKeyPress={(e) => {
                if (e.charCode == 13)
                  document.getElementById('searchBtn').click()
              }}
            />
            {/* <Link to="/event"> */}
            <button
              onClick={Condition}
              className="btn rounded-pill btn-md sub"
              type="button"
              id="searchBtn"
            >
              搜尋
            </button>
            {/* </Link> */}
          </div>
          <div className="box d-flex">
            <div className="hot">熱門關鍵字 |</div>
            <div className="mr-auto d-flex flex-wrap col-7">
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                阿里山
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                星空
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                塔塔加
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                三天兩夜
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                花海
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                金針花海
              </button>
              <button
                className="btn rounded-pill btn-md d-flex ta"
                type="button"
              >
                輕鬆拍
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Searchbar)
