import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/soya4.scss'
import { Link } from 'react-router-dom'
import { MdDateRange, MdLocationOn, MdPhotoCamera } from 'react-icons/md'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import { Modal, Button } from 'react-bootstrap'

function SoYa4(props) {
  const { isAuth, setIsAuth } = props

  // 保護頁面
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
                  {isAuth ? (
                    <Link
                      to="/eventstart"
                      className="gobutton rounded-circle d-flex"
                    >
                      GO!
                    </Link>
                  ) : (
                    <button
                      className="btn gobutton rounded-circle d-flex"
                      onClick={handleShow}
                    >
                      GO!
                    </button>
                  )}
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>尚未登入會員</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>您必須先登入會員，才能發起活動</Modal.Body>
                    <Modal.Footer>
                      <Button
                        style={{ color: 'white' }}
                        variant="secondary"
                        onClick={handleClose}
                      >
                        關閉
                      </Button>
                      <Link to="/login">
                        <Button variant="primary">登入會員</Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div>
                  <div className="recenthot">近期熱門揪影活動</div>
                  <div className="recenthotline"></div>
                </div>
                <div className="contentbox">
                  <div className="d-flex contentboxbox">
                    <div className="contentbox_left">
                      <div className="contentno1">
                        <Link to="/event/31">
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
                          <Link to="/event/78">
                            <img
                              src={devUrl + '/pic/soya/page4img1.png'}
                              alt="contentno2"
                              className="cover-fit contentno2img"
                            />
                            <div className="contentname1">
                              <div className="contentname1title">
                                人像攝影練習(有模特)
                              </div>
                              <div className="d-flex">
                                <button className="contentname1tag rounded-pill">
                                  歐風
                                </button>
                                <button className="contentname1tag rounded-pill">
                                  鄉村風
                                </button>
                              </div>
                              <div className="contentname1det d-flex">
                                <MdPhotoCamera className="MdPhotoCameradet" />
                                R-room 攝影棚
                              </div>
                              <div className="contentname1det d-flex">
                                <MdDateRange className="MdPhotoCameradet" />
                                2021/2/2 10:30 ~ 12:30
                              </div>
                              <div className="contentname1det d-flex">
                                <MdLocationOn className="MdPhotoCameradet" />
                                新北市板橋區後埔街21號
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="contentno3 contentno">
                          <Link to="/event/62">
                            <img
                              src={devUrl + '/pic/soya/sixtyrock.jpg'}
                              alt="contentno3"
                              className="cover-fit contentno3img"
                            />
                            <div className="contentname1">
                              <div className="contentname1title">
                                金燦金針花海拍攝
                              </div>
                              <div className="d-flex">
                                <button className="contentname1tag rounded-pill">
                                  日出
                                </button>
                                <button className="contentname1tag rounded-pill">
                                  花海
                                </button>
                              </div>
                              <div className="contentname1det d-flex">
                                <MdPhotoCamera className="MdPhotoCameradet" />
                                六十石山
                              </div>
                              <div className="contentname1det d-flex">
                                <MdDateRange className="MdPhotoCameradet" />
                                2021/2/1 ~ 2021/2/4
                              </div>
                              <div className="contentname1det d-flex">
                                <MdLocationOn className="MdPhotoCameradet" />
                                花蓮縣富里鄉竹田村
                              </div>
                            </div>
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
                          <div className="contentname1">
                            <div className="contentname1title">
                              大稻埕碼頭姑娘
                            </div>
                            <div className="d-flex">
                              <button className="contentname1tag rounded-pill">
                                夕陽
                              </button>
                              <button className="contentname1tag rounded-pill">
                                人文
                              </button>
                            </div>
                            <div className="contentname1det d-flex">
                              <MdPhotoCamera className="MdPhotoCameradet" />
                              大稻埕碼頭
                            </div>
                            <div className="contentname1det d-flex">
                              <MdDateRange className="MdPhotoCameradet" />
                              2021/2/2 15:30 ~ 18:30
                            </div>
                            <div className="contentname1det d-flex">
                              <MdLocationOn className="MdPhotoCameradet" />
                              台北市大同區大稻埕碼頭
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="d-flex cont5_6">
                        <div className="contentno5 contentno">
                          <Link to="/event/10">
                            <img
                              src={devUrl + '/pic/soya/badguy2.jpg'}
                              alt="contentno5"
                              className="cover-fit contentno5img"
                            />
                            <div className="contentname1">
                              <div className="contentname1title">
                                居家簡約風攝影
                              </div>
                              <div className="d-flex">
                                <button className="contentname1tag rounded-pill">
                                  簡約風
                                </button>
                                <button className="contentname1tag rounded-pill">
                                  居家風
                                </button>
                              </div>
                              <div className="contentname1det d-flex">
                                <MdPhotoCamera className="MdPhotoCameradet" />
                                拍廊
                              </div>
                              <div className="contentname1det d-flex">
                                <MdDateRange className="MdPhotoCameradet" />
                                2021/2/3 16:00 ~ 18:00
                              </div>
                              <div className="contentname1det d-flex">
                                <MdLocationOn className="MdPhotoCameradet" />
                                新北市新莊區思源路129巷26號
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="contentno6 contentno">
                          <Link to="/event/73">
                            <img
                              src={devUrl + '/pic/soya/chuderstat2.jpg'}
                              alt="contentno6"
                              className="cover-fit contentno6img"
                            />

                            <div className="contentname1">
                              <div className="contentname1title">
                                東台灣海線一次拍完
                              </div>
                              <div className="d-flex">
                                <button className="contentname1tag rounded-pill">
                                  鐵道
                                </button>
                                <button className="contentname1tag rounded-pill">
                                  海景
                                </button>
                              </div>
                              <div className="contentname1det d-flex">
                                <MdPhotoCamera className="MdPhotoCameradet" />
                                崇德火車站
                              </div>
                              <div className="contentname1det d-flex">
                                <MdDateRange className="MdPhotoCameradet" />
                                2021/2/12 5:00 ~ 14:00
                              </div>
                              <div className="contentname1det d-flex">
                                <MdLocationOn className="MdPhotoCameradet" />
                                花蓮縣 秀林鄉 崇德村海濱路 96 號
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="contentno7 contentno">
                        <Link to="/event/63">
                          <img
                            src={devUrl + '/pic/soya/page4img2.png'}
                            alt="contentno7"
                            className="cover-fit contentno7img"
                          />
                          <div className="contentname1">
                            <div className="contentname1title">
                              螢光之海馬祖藍眼淚
                            </div>
                            <div className="d-flex">
                              <button className="contentname1tag rounded-pill">
                                海景
                              </button>
                              <button className="contentname1tag rounded-pill">
                                生態
                              </button>
                            </div>
                            <div className="contentname1det d-flex">
                              <MdPhotoCamera className="MdPhotoCameradet" />
                              馬祖藍眼淚
                            </div>
                            <div className="contentname1det d-flex">
                              <MdDateRange className="MdPhotoCameradet" />
                              2021/2/2 ~ 2021/2/6
                            </div>
                            <div className="contentname1det d-flex">
                              <MdLocationOn className="MdPhotoCameradet" />
                              馬祖南竿、北竿、莒光及東引島
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-end flex-column">
                  <Link to="/event">
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
