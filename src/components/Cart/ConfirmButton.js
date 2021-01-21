import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/confirmbutton.scss'

function ConfirmButton(props) {
  return (
    <>
      <div className="conbutton">
        <div className="b1 d-flex">
          <Link to="/" className="btn d-flex confirmbutton1">
            查詢訂單
          </Link>
          <Link to="/" className="btn d-flex confirmbutton2">
            繼續購物
          </Link>
        </div>
      </div>
    </>
  )
}

export default ConfirmButton
