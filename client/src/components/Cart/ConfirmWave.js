import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/confirmwave.scss'

function ConfirmWave(props) {
  return (
    <>
      <div className="wavebox">
        <div className="confirmw">
          <img
            src={devUrl + '/pic/svg/wave.svg'}
            className="confirmsv1"
            alt="..."
          />
          <div className="man d-flex">
            <div>
              <img
                src={devUrl + '/pic/svg/yellow man.svg'}
                className="confirmsv2 d-flex"
                alt="..."
              />
            </div>
            <div>
              <img
                src={devUrl + '/pic/pic/blue woman.png'}
                className="confirmsv3 d-flex"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmWave
