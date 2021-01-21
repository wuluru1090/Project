import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya1.scss'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import ScrollTop from '../Main/ScrollTop'
import { ParallaxProvider, Parallax } from 'react-skrollr'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4

function SoYa1(props) {
  return (
    <>
      <div className="soya1" id="soya1">
<<<<<<< HEAD
=======
        <ParallaxProvider>
          <Parallax>
            <div
              id="skrollrbg1"
              className="skrollable skrollable-between"
              data-0="background-position:0px 0px;"
              data-end="background-position:100px 2500px;"
            ></div>
          </Parallax>

          <Parallax>
            <div
              id="skrollrbg2"
              className="skrollable skrollable-between"
              data-0="background-position:0px 0px;"
              data-end="background-position:100px 1500px;"
            ></div>
          </Parallax>

          <Parallax>
            <div
              id="skrollrbg3"
              data-0="background-position:0px 0px;"
              data-end="background-position:100px 500px;"
              class="skrollable skrollable-between"
            ></div>
          </Parallax>

          <Parallax>
            <div
              id="skrollrbg4"
              data-0="background-position:0px 0px;"
              data-end="background-position:100px 1000px;"
              class="skrollable skrollable-between"
            ></div>
          </Parallax>
        </ParallaxProvider>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
        <div className="wrapper">
          <div className="page1titlebox">
            <div className="marginbox">
              <h2 className="page1title  d-flex">尋找理想中的攝影行程</h2>
              <div>{props.children}</div>
            </div>
          </div>

          <div>
<<<<<<< HEAD
            <a
              href="#soya1"
              className="fixbutton d-flex position-fixed scroll-to-top"
            >
              TOP
            </a>
=======
            <ScrollTop />
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
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
