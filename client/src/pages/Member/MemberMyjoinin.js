import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { MdVisibility, MdBrightnessHigh } from 'react-icons/md'
import '../../style/member/member_navbar.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { DateConvert } from '../../components/Main/DateTimeConverter'
import '../../style/member/member_pdcard.scss'
function MemberMyjoinin(props) {
  const [memjoinin, setMemberjoinin] = useState([])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/event_host/${props.match.params.id}`
    )
      .then((res) => {
        setMemberjoinin(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

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
                  <div className="container ">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的揪團</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/Myjoinin`
                              }
                            >
                              發起中
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyjoininFinish`
                              }
                            >
                              已完成
                            </a>
                          </li>
                        </ul>
                        <br />
                        {memjoinin.length > 0 ? (
                          <div>
                            {memjoinin.map((val) => {
                              return (
                                <div className="pdCard">
                                  <div className="ccard">
                                    <div className="d-flex dcard">
                                      <div>
                                        <img
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          className="card-img-top photo"
                                          alt="..."
                                        />
                                      </div>
                                      <div className="">
                                        <div className="card-body">
                                          <h5 className="card-title">
                                            {val.event_name}
                                          </h5>

                                          <div className="d-flex bbb">
                                            <img
                                              className="icon"
                                              src="/pic/svg/photo-camera.svg"
                                              alt=""
                                            />
                                            <p className="caption">
                                              {val.event_location}
                                            </p>
                                          </div>
                                          <div className="d-flex bbb">
                                            <img
                                              className="icon2"
                                              src="/pic/svg/date_range-24px.svg"
                                              alt=""
                                            />
                                            <p className="caption  d-flex">
                                              <DateConvert
                                                jsonDate={val.event_start_time}
                                              />
                                              &nbsp;~&nbsp;
                                              <DateConvert
                                                jsonDate={val.event_end_time}
                                              />
                                            </p>
                                          </div>
                                          <div className="d-flex bbb">
                                            <img
                                              className="icon3"
                                              src="/pic/svg/location_on-24px.svg"
                                              alt=""
                                            />
                                            <p className="caption ">
                                              {val.event_address}
                                            </p>
                                          </div>
                                          <div className="d-flex justify-content-end btn_group">
                                            <Button
                                              onclick=""
                                              className="btn-style botton-font btn_icon mem_card_btn"
                                            >
                                              <MdVisibility />
                                              活動檢視
                                            </Button>

                                            <Button
                                              onclick=""
                                              className="btn-style botton-font btn_icon mem_card_btn btn_edit"
                                            >
                                              <MdBrightnessHigh />
                                              活動編輯
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          <div style={{ marginTop: '32px' }}>
                            <p>沒有舉辦揪影，趕快去發起活動吧</p>
                          </div>
                        )}
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

export default withRouter(MemberMyjoinin)
