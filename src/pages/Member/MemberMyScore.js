import '../../index.scss'
import React, { useState } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Button } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/member/member_score.scss'
import Rating from '../../components/Member/rating'
import '../../style/member/member_navbar2.scss'
import '../../style/member/member.scss'
import { MdGrade } from 'react-icons/md'

function MemberMyScore(props) {
  const [toscore, setToscore] = useState(0)

  return (
    <>
      <body>
        <div className="background_wave ">
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
                        className="navbarbox2 "
                      >
                        <ul className="row navbar2  d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a href="#" className="memnav_alink1">
                              未評價
                            </a>
                            <li className=" subtitle1 sublist">
                              <a href="#" className="memnav_alink2">
                                活動
                              </a>
                            </li>
                            <li className=" subtitle1 sublist">
                              <a href="#" className="memnav_alink2">
                                課程
                              </a>
                            </li>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a href="#" className="memnav_alink1">
                              已評價
                            </a>
                            <li className=" subtitle1  sublist">
                              <a href="#" className="memnav_alink2">
                                活動
                              </a>
                            </li>
                            <li className=" subtitle1  sublist">
                              <a href="#" className="memnav_alink2">
                                課程
                              </a>
                            </li>
                          </li>
                        </ul>
                        <br />
                        <div className="pd_score">
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
                                    <p className="card-text d-flex">
                                      2021-01-28
                                    </p>
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
                                  <div className="d-flex justify-content-end">
                                    <p>You clicked {toscore} times</p>
                                    <Button
                                      onClick={() => setToscore(toscore + 1)}
                                      className="btn-style botton-font btn_icon mem_card_btn btn_toscore"
                                    >
                                      <MdGrade />
                                      我要評價
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <form
                            className="mymem_toscoreM"
                            // style={{ display: 'none' }}
                          >
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
                              <div className="score_table">
                                <div className="d-flex mem_toscore_table">
                                  <p className=" d-flex align-items-center">
                                    評分
                                  </p>
                                  <Rating />
                                </div>
                                <div className="d-flex mem_toscore_table ">
                                  <p className=" d-flex align-items-start">
                                    評價
                                  </p>
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
                            </div>
                          </form>
                          <br />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </article>
              </aside>
            </main>
          </div>

          <br />
        </div>
      </body>
    </>
  )
}

export default MemberMyScore
