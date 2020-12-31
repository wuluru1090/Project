import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../style/searchbar.scss'

function Searchbar(props) {
  return (
    <>
      <div className="searchbar">
        <div className="container-fluid mt-5 col-10">
          <form className="form-inline md-form mb-4 m-auto position-relative">
            <img
              src={devUrl + '/pic/pic/icon-action-search_24px.png'}
              alt="Sear"
              className="position-absolute searchicon"
            />

            <input
              className="form-control rounded-pill col-6 searchbar2"
              type="text"
              placeholder="尋找攝影課程"
              aria-label="Search"
            />
            <button className="btn rounded-pill btn-md sub" type="submit">
              搜尋
            </button>
          </form>
          <div className="box d-flex">
            <div className="hot">熱門關鍵字 |</div>
            <div className="mr-auto d-flex flex-wrap col-6">
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

export default Searchbar
