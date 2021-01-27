import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/confirmtopphoto.scss'

function ConfirmTopPhoto(props) {
  return (
    <>
      <div className="confirmtopphoto">
        <img src={devUrl + '/pic/pic/Group 600.png'} />
      </div>
    </>
  )
}

export default ConfirmTopPhoto
