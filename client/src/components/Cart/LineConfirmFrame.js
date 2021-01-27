import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/lineconfirmframe.scss'

function LineConfirmFrame(props) {
  return (
    <>
      <div className="lineconfirmframetop">
        <div className="lineconfirmframe1">購買完成</div>
        <div className="lineconfirmframe2">
          <img
            className="lineimg"
            src={devUrl + '/pic/cart/line pay.jpg'}
            alt="..."
          />
        </div>
      </div>
    </>
  )
}

export default LineConfirmFrame
