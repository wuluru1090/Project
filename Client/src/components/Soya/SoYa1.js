import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya1.scss'
import { Link } from 'react-router-dom'

function SoYa1(props) {
  return (
    <>
      <div className="soya1" id="soya1">
        <div className="wrapper">
          <div className="page1titlebox">
            <div className="marginbox">
              <h2 className="page1title  d-flex">尋找理想中的攝影行程</h2>
              <div>{props.children}</div>
            </div>
          </div>

          <div>
            <a
              href="#soya1"
              className="fixbutton d-flex position-fixed scroll-to-top"
            >
              TOP
            </a>
          </div>
        </div>

        <div>
          <img
            className="wave container-fluid"
            src={devUrl + '/pic/soya/wavenew7.svg'}
            alt="waveup"
          />
        </div>
      </div>
    </>
  )
}

export default SoYa1
