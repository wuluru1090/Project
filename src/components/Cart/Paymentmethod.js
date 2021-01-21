import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/paymentmethod.scss'

function Paymentmethod(props) {
  return (
    <>
      <div className="top">
        <div className="f1">選擇付款方式</div>
        <div className="f2">
          <form>
            <div className="paym">
              <input type="radio" name="name" className="pmb" />
              LINE PAY
              <img
                src={devUrl + '/pic/pic/Line pay.png'}
                className="ppml"
                alt="..."
              />
              <br />
              <input type="radio" name="name" className="pmb" />
              ATM 付款
              <br />
              <input type="radio" name="name" className="pmb" />
              信用卡線上付款
              <img
                src={devUrl + '/pic/pic/credit card.png'}
                className="ppm"
                alt="..."
              />
              <br />
              <input type="radio" name="name" className="pmb" />
              超商繳費
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Paymentmethod
