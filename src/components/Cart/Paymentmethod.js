import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import CreditModel from './CreditModal'
import '../../style/cart/paymentmethod.scss'

function Paymentmethod(props) {
  return (
    <>
      <div className="top">
        <div className="f1">選擇付款方式</div>
        <div className="f2">
          <CreditModel />
        </div>
      </div>
    </>
  )
}

export default Paymentmethod
