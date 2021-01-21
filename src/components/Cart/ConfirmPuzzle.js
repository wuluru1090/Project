import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/confirmpuzzle.scss'

function ConfirmPuzzle(props) {
  return (
    <>
      <div className="confirmpuzzlel">
        <img
          src={devUrl + '/pic/svg/puzzle1.svg'}
          className="confirmpuzzle1"
          alt="..."
        />
      </div>
    </>
  )
}

export default ConfirmPuzzle
