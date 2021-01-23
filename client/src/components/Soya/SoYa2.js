import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { devUrl } from '../../config'
import '../../style/soya/soya2.scss'

function SoYa2(props) {
  // 子傳子元件
  const { setConditionsobad } = props
  const go2Themesobad = async (themeId) => {
    // alert(themeId)
    await setConditionsobad({
      searchbar: '',
      locate: '',
      time: '',
      theme: themeId,
      type: '',
    })
    props.history.push('/event')
  }

  return (
    <>
      <main className="d-flex soya2 wrapper">
        <div className="lovebox" style={{ color: '#ffffff' }}>
          <p className="lovetitle font-bold">任選您喜愛的攝影主題</p>
          <div className="topline"></div>
          <p className="lovepara">
            我們擁有各式各樣的攝影主題，點選右邊的攝影圖片進入您有興趣的內容，並開始您的活動。
          </p>
        </div>
        <div className="sudoku">
          <div className="row">
            <div className="col themepic">
              <p
                valueaaa="1"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                  // console.log(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn1"
              >
                風景攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/pag4img3.png'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="2"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn2"
              >
                人像攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/themepicture1.png'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="3"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn3"
              >
                商業攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/battleo.jpg'}
                alt="themepicture"
              />
            </div>
          </div>
          <div className="row">
            <div className="col themepic">
              <p
                valueaaa="4"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn4"
              >
                生態攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/fourgress1.jpg'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="5"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn5"
              >
                建築攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/cheapcircle.jpg'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="8"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn8"
              >
                夜景攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/themepicture2.png'}
                alt="themepicture"
              />
            </div>
          </div>
          <div className="row">
            <div className="col themepic">
              <p
                valueaaa="9"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn9"
              >
                人文攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/deerhigh.gif'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="10"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn10"
              >
                手機攝影
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/classcontentimg3.png'}
                alt="themepicture"
              />
            </div>
            <div className="col themepic">
              <p
                valueaaa="12"
                onClick={(e) => {
                  go2Themesobad(e.target.getAttribute('valueaaa'))
                }}
                className="themepicturetitle botton-font nnn12"
              >
                其他
              </p>
              <img
                className="themepicture cover-fit"
                src={devUrl + '/pic/soya/oldstation.jpg'}
                alt="themepicture"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default withRouter(SoYa2)
