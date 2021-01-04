import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import { Card } from 'react-bootstrap'
import { MdStar, MdStarBorder, MdStarHalf, MdCameraAlt } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/member_score.scss'

function MemberMyScore(props) {
  return (
    <>
      <body>
        <div className="background_wave ">
          <header>
            <MyNavbar />
          </header>
          <div className="wrapper  ">
            <main className="container">
              <aside className="d-flex justify-content-end">
                <br />
                <div>
                  <MemberCard />
                  <br />
                  <MemberNavlist />
                </div>

                <article>
                  <div className="container">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的評價</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  42px  43px 42px' }}
                        className="box "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a href="#">活動</a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a href="#">課程</a>
                          </li>
                        </ul>
                        <br />
                        <div className="ccard">
                          <div className="d-flex dcard">
                            <div>
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                className="card-img-top photo"
                                alt="..."
                              />
                            </div>
                            <div className="">
                              <div className="card-body">
                                <h5 className="card-title">
                                  四草綠意盎然 台南七股一日遊
                                </h5>

                                <div className="d-flex bbb">
                                  <img
                                    className="icon"
                                    src="/pic/svg/photo-camera.svg"
                                    alt=""
                                  />
                                  <p className="card-text">四草綠色隧道 </p>
                                </div>
                                <div className="d-flex bbb">
                                  <img
                                    className="icon2"
                                    src="/pic/svg/date_range-24px.svg"
                                    alt=""
                                  />
                                  <p className="card-text d-flex">2021-01-28</p>
                                </div>
                                <div className="d-flex bbb">
                                  <img
                                    className="icon3"
                                    src="/pic/svg/location_on-24px.svg"
                                    alt=""
                                  />
                                  <p className="card-text">
                                    台南市歸仁區歸仁大道100號
                                  </p>
                                </div>
                                <div className="d-flex justify-content-end ">
                                  <div className="d-flex">
                                    <button className="btn_sm join">
                                      我要評價
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="mymem_toscore">
                          <div className="row mem_toscore_G ">
                            <figure className="">
                              <img
                                className="mem_toscore"
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <figcaption>王陽明</figcaption>
                            </figure>

                            <figure className="">
                              <img
                                className="mem_toscore"
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <figcaption>王陽明</figcaption>
                            </figure>
                            <figure className="">
                              <img
                                className="mem_toscore"
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <figcaption>王陽明</figcaption>
                            </figure>
                          </div>
                          <div className="d-flex">
                            <p className=" d-flex align-items-center">評分</p>

                            <div className="star">
                              <MdStarBorder />
                              <MdStarBorder />
                              <MdStarBorder />
                              <MdStarBorder />
                              <MdStarBorder />
                            </div>
                          </div>
                          <div className="d-flex">
                            <p className=" d-flex align-items-start">評價</p>
                            <div class="form-floating">
                              <textarea
                                className="form-control ScoText"
                                placeholder="評價內容"
                                id="floatingTextarea2"
                              ></textarea>
                            </div>
                          </div>
                          <br />
                          <div className="d-flex justify-content-end">
                            <button className="btn_sm join ">送出</button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </article>
              </aside>
            </main>
          </div>
          {/* 背景icon 需要再研究 */}
          <div className="bg-couple row d-flex align-items-end ">
            <figure>
              <img src={devUrl + '/pic/SVG/couple man.svg'} alt="背景iocn男" />
            </figure>
            <figure>
              <img
                src={devUrl + '/pic/SVG/couple woman.svg'}
                alt="背景iocn女"
              />
            </figure>
          </div>
          <br />
        </div>

        <Footer />
      </body>
    </>
  )
}

export default MemberMyScore
