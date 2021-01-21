import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/atmconfirmframe.scss'

function AtmConfirmFrame(props) {
  return (
    <>
      <div className="atmconfirmframetop">
        <div className="atmconfirmframe1">購買完成</div>
        <div className="atmconfirmframe2"></div>
      </div>
    </>
  )
}

export default AtmConfirmFrame
