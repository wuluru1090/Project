import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/totalinf.scss'

function DetailsAmount(props) {
  return (
    <>
      <div>
        <div className="totalinfbox d-flex">
          <div className="boxx2 d-flex">
            <div>
              <div className="inft">訂購人資訊</div>
              <div className="inf  d-flex">
                <div>
                  <div className="infd">姓名:</div>
                  <div className="infd">手機:</div>
                  <div className="infd">信箱:</div>
                </div>
                <div>
                  <div className="infd">胡子</div>
                  <div className="infd">0911111111</div>
                  <div className="infd">aa@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxx3 d-flex">
            <div>
              <div className="money d-flex">商品金額</div>
              <div className="money d-flex">優惠卷折抵金額</div>
              <div className="money d-flex">本次訂單需付金額</div>
              <div className="money d-flex">付款方式</div>
            </div>
            <div>
              <div className="money d-flex moneyex"> NT$5700元</div>
              <div className="money d-flex moneyred"> - 0元</div>
              <div className="money d-flex">NT$5700元</div>
              <div className="money d-flex">信用卡</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsAmount
