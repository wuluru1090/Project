import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/querentopphoto.scss'

function QuerenTopPhoto(props) {
  return (
    <>
      <div className="querentopphoto">
        <img src={devUrl + '/pic/pic/Group 599.png'} />
      </div>
    </>
  )
}

export default QuerenTopPhoto
