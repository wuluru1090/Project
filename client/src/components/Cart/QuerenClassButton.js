import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/querenbutton.scss'

function QuerenClassButton(props) {
  return (
    <>
      <div className="querenbutton">
        <div className="b1 d-flex">
          <Link
            to="/PaymentMethodClassPage"
            className="btn d-flex confirmbutton1"
          >
            回上一頁
          </Link>
          <Link
            to="/LastConfirmationPage1"
            className="btn d-flex confirmbutton2"
          >
            完成結帳
          </Link>
        </div>
      </div>
    </>
  )
}

export default QuerenClassButton
