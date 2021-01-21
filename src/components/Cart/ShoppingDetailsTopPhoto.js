import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/cart/shoppingdetailstopphoto.scss'

function ShoppingDetailsTopPhoto(props) {
  return (
    <>
      <div className="shoppingdetailstopphoto">
        <img src={devUrl + '/pic/pic/Group 598.png'} />
      </div>
    </>
  )
}

export default ShoppingDetailsTopPhoto
