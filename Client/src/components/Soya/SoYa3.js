import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya3.scss'

function SoYa3(props) {
  return (
    <>
      <main className="soya3 d-flex">
        <div className="d-flex justify-content-between stepbox wrapper">
          <div className="left_step">
            <div className="ststep1">
              <div className="step1box">
                <img
                  className="step1pic cover-fit"
                  src={devUrl + '/pic/soya/step1.png'}
                  alt="step1"
                />
              </div>

              <img
                className="step1smguy"
                src={devUrl + '/pic/soya/step1smguy.svg'}
                alt="step1smguy"
              />
              <img
                className="step1cloud"
                src={devUrl + '/pic/soya/step1cloud.svg'}
                alt="step1cloud"
              />
            </div>

            <div className="ststep3">
              <div className="step3box">
                <img
                  className="step3pic cover-fit"
                  src={devUrl + '/pic/soya/step3.png'}
                  alt="step3"
                />
              </div>
              <img
                className="step3smguy"
                src={devUrl + '/pic/soya/step3smguy.svg'}
                alt="step3smguy"
              />
            </div>
          </div>
          <div className="right_step">
            <div className="ststep2">
              <div className="step2box">
                <img
                  className="step2pic cover-fit"
                  src={devUrl + '/pic/soya/step2.png'}
                  alt="step2"
                />
              </div>
              <img
                className="step2smguy"
                src={devUrl + '/pic/soya/step2smguy.svg'}
                alt="step2smguy"
              />
              <img
                className="step1_3"
                src={devUrl + '/pic/soya/step1_3.svg'}
                alt="step1_3"
              />
            </div>
            <div className="ststep4">
              <div className="step4box">
                <img
                  className="step4pic cover-fit"
                  src={devUrl + '/pic/soya/step4.png'}
                  alt="step4"
                />
              </div>
              <img
                className="step4smguy"
                src={devUrl + '/pic/soya/step4smguy.svg'}
                alt="step4smguy"
              />
              <img
                className="step4leaf"
                src={devUrl + '/pic/soya/step4leaf.svg'}
                alt="step4leaf"
              />
              <img
                className="step3_5"
                src={devUrl + '/pic/soya/step3_5.svg'}
                alt="step3_5"
              />
              <img
                className="step4_5"
                src={devUrl + '/pic/soya/step4_5.svg'}
                alt="step4_5"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SoYa3
