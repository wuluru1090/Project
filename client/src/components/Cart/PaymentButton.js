import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/paymentbutton.scss'

function PaymentButton(props) {
  return (
    <>
      <div className="paybutton">
        <div className="b2 d-flex">
          <Link to="/cart" className="btn d-flex paymentbutton1">
            回上一頁
          </Link>
          <Link to="/QuerenPage" className="btn d-flex paymentbutton2">
            下一步
          </Link>
        </div>
      </div>
    </>
  )
}

export default PaymentButton
