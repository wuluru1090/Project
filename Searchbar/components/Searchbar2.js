import React, { useState, useEffect } from 'react'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import Sear from '../icon/icon-action-search_24px.png'
import Date from '../icon/date_range-24px.png'
import Vin from '../icon/filter_vintage-24px.png'
import Loc from '../icon/location_on-24px.png'

function Searchbar2(props) {
  return (
    <>
      <div className="searchbarrr">
        <div className="container-fluid mt-5">
          <form className="form-inline md-form mb-4 col-8 m-auto position-relative">
            <img src={Sear} alt="Sear" className="position-absolute searchicon" />

            <input
              className="form-control rounded-pill col-6 searchbarrrr"
              type="text"
              placeholder="尋找活動"
              aria-label="Search"
            />
            <button className="btn rounded-pill btn-md sub" type="submit">
              搜尋
            </button>
          </form>
          <div className="mr-auto mb-4 col-8 m-auto tags d-flex">
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img src={Loc} alt="Loc" />
              地點(縣市)
            </button>
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img src={Date} alt="Date" />
              時間
            </button>
            <button className="btn rounded-pill btn-md d-flex ta" type="button">
              <img src={Vin} alt="Vin" />
              類型
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchbar2
