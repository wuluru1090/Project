import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/paymentdetails.scss'

function PaymentDetails(props) {
  return (
    <>
      <div className="paymentdetailstop">
        <div className="paymentdetails1">付款明細</div>
        <div className="paymentdetails2">
          <div className="divmt">
            <div className="detailsframe d-flex">
              <div>
                <img
                  src={devUrl + '/pic/class/p7.jpg'}
                  className="detailsphoto"
                  alt="..."
                />
              </div>
              <div className="divx4">
                <div className="divtext pbox1 d-flex bigtext3">
                  <div>手機人像攝影課程</div>
                  <div>單人費用</div>
                </div>
                <div className="divtext pbox2 d-flex">
                  <div className="d-flex">
                    <img
                      className="icon3"
                      src="/pic/svg/date_range-24px.svg"
                      alt=""
                    />
                    2021-02-07
                  </div>
                </div>
                <div className="divtext pbox3 d-flex">
                  <div>人數X1</div>
                  <div>NT$4000</div>
                </div>
                <hr className="hrm" />
                <div className="divtext pbox4 d-flex">
                  <div>總金額</div>
                  <div className="bigtext2">NT$4000</div>
                </div>
              </div>
            </div>
            <hr className="hrm" />
            <div className="detailsframe d-flex">
              <div>
                <img
                  src={devUrl + '/pic/class/p52.jpg'}
                  className="detailsphoto"
                  alt="..."
                />
              </div>
              <div className="divx4">
                <div className="divtext pbox1 d-flex bigtext3">
                  <div>時尚攝影高階班</div>
                  <div>單人費用</div>
                </div>
                <div className="divtext pbox2 d-flex">
                  <div className="d-flex">
                    <img
                      className="icon3"
                      src="/pic/svg/date_range-24px.svg"
                      alt=""
                    />
                    2021-02-14
                  </div>
                </div>
                <div className="divtext pbox3 d-flex">
                  <div>人數X1</div>
                  <div>NT$5500</div>
                </div>
                <hr className="hrm" />
                <div className="divtext pbox4 d-flex">
                  <div>總金額</div>
                  <div className="bigtext2">NT$1700</div>
                </div>
              </div>
            </div>
            <div className="hrm2"></div>
            <div className="totalm d-flex">
              <div className="bigtext3">支付金額</div>
              <div className="bigtext">NT$5700</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDetails
