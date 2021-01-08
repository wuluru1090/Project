import '../../index.scss'
import React, { useState } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Button, Accordion } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/member/member_score.scss'
import Rating from '../../components/Member/rating'
import '../../style/member/member_navbar.scss'
import '../../style/member/member.scss'
import { MdGrade } from 'react-icons/md'

function MemberMyScore(props) {
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
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox"
                      >
                        <ul className="row navbar d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a href="#">未評價</a>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a href="#">已評價</a>
                          </li>
                        </ul>
                        <br />
                        <Card.Body style={{ padding: '0' }}>
                          <Accordion>
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
                                        <p className="card-text">
                                          四草綠色隧道
                                        </p>
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
                                      <div className=" d-flex justify-content-end">
                                        <div>
                                          <Accordion.Toggle
                                            as={Button}
                                            variant="link"
                                            eventKey="0"
                                          >
                                            <Button className="btn-style botton-font btn_icon mem_card_btn btn_toscore">
                                              <MdGrade />
                                              我要評價
                                            </Button>
                                          </Accordion.Toggle>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Accordion.Collapse eventKey="0">
                                <form className="mymem_toscoreM">
                                  <div className="mymem_toscore">
                                    <div className="row mem_toscore_G ">
                                      <figure className="">
                                        <img
                                          className="mem_toscore"
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          alt="photo1"
                                        ></img>
                                        <figcaption>王陽明</figcaption>
                                      </figure>

                                      <figure className="">
                                        <img
                                          className="mem_toscore"
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          alt="photo1"
                                        ></img>
                                        <figcaption>王陽明</figcaption>
                                      </figure>
                                      <figure className="">
                                        <img
                                          className="mem_toscore"
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          alt="photo1"
                                        ></img>
                                        <figcaption>王陽明</figcaption>
                                      </figure>
                                    </div>
                                    <div className="score_table">
                                      <div className="d-flex mem_toscore_table align-items-center ">
                                        <p className=" d-flex score_p">評分</p>
                                        <Rating />
                                      </div>
                                      <div className="d-flex mem_toscore_table ">
                                        <p className=" d-flex align-items-start score_p">
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
                                      <div className="d-flex justify-content-end ">
                                        <Button className="btn_sm join d-flex  align-items-center justify-content-center">
                                          送出
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </Accordion.Collapse>
                            </div>
                          </Accordion>
                        </Card.Body>
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
