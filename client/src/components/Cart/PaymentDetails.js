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
                  src={devUrl + '/pic/event/光之穹頂1.jpg'}
                  className="detailsphoto"
                  alt="..."
                />
              </div>
              <div className="divx4">
                <div className="divtext pbox1 d-flex bigtext3">
                  <div>蒼穹之間</div>
                  <div>單人費用</div>
                </div>
                <div className="divtext pbox2 d-flex">
                  <div className="d-flex">
                    <img
                      className="icon3"
                      src="/pic/svg/date_range-24px.svg"
                      alt=""
                    />
                    2021-02-06
                  </div>
                </div>
                <div className="divtext pbox3 d-flex">
                  <div>人數X1</div>
                  <div>NT$0</div>
                </div>
                <hr className="hrm" />
                <div className="divtext pbox4 d-flex">
                  <div>總金額</div>
                  <div className="bigtext2">NT$0</div>
                </div>
              </div>
            </div>
            <hr className="hrm" />
            <div className="detailsframe d-flex">
              <div>
                <img
                  src={devUrl + '/pic/event/田寮月世界2.jpg'}
                  className="detailsphoto"
                  alt="..."
                />
              </div>
              <div className="divx4">
                <div className="divtext pbox1 d-flex bigtext3">
                  <div>探索月世界</div>
                  <div>單人費用</div>
                </div>
                <div className="divtext pbox2 d-flex">
                  <div className="d-flex">
                    <img
                      className="icon3"
                      src="/pic/svg/date_range-24px.svg"
                      alt=""
                    />
                    2021-02-17
                  </div>
                </div>
                <div className="divtext pbox3 d-flex">
                  <div>人數X1</div>
                  <div>NT$200</div>
                </div>
                <hr className="hrm" />
                <div className="divtext pbox4 d-flex">
                  <div>總金額</div>
                  <div className="bigtext2">NT$200</div>
                </div>
              </div>
            </div>
            <div className="hrm2"></div>
            <div className="totalm d-flex">
              <div className="bigtext3">支付金額</div>
              <div className="bigtext">NT$200</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentDetails
