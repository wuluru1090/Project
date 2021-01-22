import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya4.scss'
import { Link } from 'react-router-dom'
import { MdDateRange, MdLocationOn, MdPhotoCamera } from 'react-icons/md'
import { ParallaxProvider, Parallax } from 'react-skrollr'

function SoYa4(props) {
  return (
    <>
      <ParallaxProvider>
        <Parallax>
          <main className="soya4">
            <div>
              <div>
                <img
                  className="whitewave"
                  src={devUrl + '/pic/soya/whitewave1.svg'}
                  alt="whitewave"
                />
              </div>
              <div className="startjoinbox wrapper">
                <div className="startjointitlebox d-flex">
                  <div className="startjointitle d-flex">立即開始揪影</div>
                  <Link
                    to="/eventstart"
                    className="gobutton rounded-circle d-flex"
                  >
                    GO!
                  </Link>
                </div>
                <div>
                  <div className="recenthot">近期熱門揪影活動</div>
                  <div className="recenthotline"></div>
                </div>
                <div className="contentbox">
                  <div className="d-flex contentboxbox">
                    <div className="contentbox_left">
                      <div className="contentno1">
                        <Link to="#">
                          <img
                            src={devUrl + '/pic/soya/fallfeather.png'}
                            alt="contentno1"
                            className="cover-fit contentno1img"
                          />
                          <div className="contentname1">
                            <div className="contentname1title">
                              落羽松巡禮第一站
                            </div>
                            <div className="d-flex">
                              <button className="contentname1tag rounded-pill">
                                戶外
                              </button>
                              <button className="contentname1tag rounded-pill">
                                自然
                              </button>
                            </div>
                            <div className="contentname1det d-flex">
                              <MdPhotoCamera className="MdPhotoCameradet" />
                              花蓮鈺展苗圃落羽松
                            </div>
                            <div className="contentname1det d-flex">
                              <MdDateRange className="MdPhotoCameradet" />
                              2021/1/21 ~ 2020/1/30
                            </div>
                            <div className="contentname1det d-flex">
                              <MdLocationOn className="MdPhotoCameradet" />
                              花蓮縣壽豐鄉大學路二段1號
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="d-flex cont2_3">
                        <div className="contentno2 contentno">
                          <Link to="#">
                            <img
                              src={devUrl + '/pic/soya/page4img1.png'}
                              alt="contentno2"
                              className="cover-fit contentno2img"
                            />
                            <div className="contentname">
                              人像攝影練習(有模特)
                            </div>
                          </Link>
                        </div>
                        <div className="contentno3 contentno">
                          <Link to="#">
                            <img
                              src={devUrl + '/pic/soya/sixtyrock.jpg'}
                              alt="contentno3"
                              className="cover-fit contentno3img"
                            />
                            <div className="contentname">金燦金針花海拍攝</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="contentbox_right">
                      <div className="contentno4 contentno">
                        <Link to="#">
                          <img
                            src={devUrl + '/pic/soya/pag4img3.png'}
                            alt="contentno4"
                            className="cover-fit contentno4img"
                          />
                          <div className="contentname">大稻埕碼頭姑娘</div>
                        </Link>
                      </div>
                      <div className="d-flex cont5_6">
                        <div className="contentno5 contentno">
                          <Link to="#">
                            <img
                              src={devUrl + '/pic/soya/badguy2.jpg'}
                              alt="contentno5"
                              className="cover-fit contentno5img"
                            />
                            <div className="contentname">居家簡約風攝影</div>
                          </Link>
                        </div>
                        <div className="contentno6 contentno">
                          <Link to="#">
                            <img
                              src={devUrl + '/pic/soya/chuderstat2.jpg'}
                              alt="contentno6"
                              className="cover-fit contentno6img"
                            />
                            <div className="contentname">
                              東台灣海線一次拍完
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="contentno7 contentno">
                        <Link to="#">
                          <img
                            src={devUrl + '/pic/soya/page4img2.png'}
                            alt="contentno7"
                            className="cover-fit contentno7img"
                          />
                          <div className="contentname">螢光之海馬祖藍眼淚</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end flex-column">
                  <Link to="#">
                    <div className="morejoin">更多揪影</div>
                    <div className="morejoinline"></div>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  className="whitewavedown"
                  src={devUrl + '/pic/soya/whitewavedown.svg'}
                  alt="whitewavedown"
                />
              </div>
            </div>
          </main>
        </Parallax>
      </ParallaxProvider>
    </>
  )
}

export default SoYa4
