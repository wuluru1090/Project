import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya5.scss'
import { Link } from 'react-router-dom'
import {
  MdDateRange,
  MdLocationOn,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from 'react-icons/md'

function SoYa5(props) {
  return (
    <>
      <div className="soya5 wrapper">
        <div className="classbox">
          <div className="classtitlebox">
            <div className="classtitle">精選攝影課程</div>
            <div className="classtitleline"></div>
          </div>
          <div className="classcontentbox d-flex">
            <div className="classcontent_left">
              <div className="classcontentimg">
                <Link to="#">
                  <img
                    className="cover-fit"
                    src={devUrl + '/pic/soya/classcontentimg1.png'}
                    alt="classcontentimg"
                  />
                </Link>
              </div>
              <div className="classcontenttitle">
                用手機．拍片去！手機輕旅行的影片日記
              </div>
              <div className="classcontenttext">
                這堂課將用系統且完整的方式，深入淺出地分享旅行錄影的技巧，只要善用自己的手機，
                就能用影片記錄下自己的旅行日記。
              </div>
              <div className="classcontentinfobox d-flex">
                <div className="classcontentinfo">
                  <div className="classcontentinfoicon d-flex">
                    <MdDateRange className="MdDateRangeicon" />
                    2020/10/04 ~ 2020/11/01
                  </div>
                  <div className="classcontentinfoicon d-flex">
                    <MdLocationOn className="MdDateRangeicon" />
                    桃園市中壢區中北路200號
                  </div>
                </div>
                <button className="btn classcontentinfobutton caption rounded-pill d-flex">
                  參加課程
                </button>
              </div>
            </div>
            <div className="classcontent_right">
              <div className="classcontentcaro">
                <Link to="#">
                  <img
                    src={devUrl + '/pic/soya/page4img2.png'}
                    alt="classcontentcaroimg"
                    className="cover-fit classcontentcaroimg"
                  />
                  <div className="classcontentcarotheme">商業攝影</div>
                </Link>
              </div>
              <div className="classcontentcaro">
                <Link to="#">
                  <img
                    src={devUrl + '/pic/soya/themepicture2.png'}
                    alt="classcontentcaroimg"
                    className="cover-fit classcontentcaroimg"
                  />
                  <div className="classcontentcarotheme">商業攝影</div>
                </Link>
              </div>
              <div className="classcontentcaro">
                <Link to="#">
                  <img
                    src={devUrl + '/pic/soya/pag4img3.png'}
                    alt="classcontentcaroimg"
                    className="cover-fit classcontentcaroimg"
                  />
                  <div className="classcontentcarotheme">商業攝影</div>
                </Link>
              </div>
              <div className="classcontentcaro">
                <Link to="#">
                  <img
                    src={devUrl + '/pic/soya/classcontentimg3.png'}
                    alt="classcontentcaroimg"
                    className="cover-fit classcontentcaroimg"
                  />
                  <div className="classcontentcarotheme">商業攝影</div>
                </Link>
              </div>
              <MdKeyboardArrowUp className="caroarrowup" />
              <MdKeyboardArrowDown className="caroarrowdown" />
            </div>
          </div>
          <div className="classmoreclassbox d-flex flex-column">
            <div className="classmoreclass">更多課程</div>
            <div className="classmoreclassline"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SoYa5
