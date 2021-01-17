import '../../index.scss'
import '../../style/member/member_pdcard2.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member_navbar2.scss'
import { Card, Button, Accordion } from 'react-bootstrap'
import {
  MdVisibility,
  MdFormatListBulleted,
  MdPlaylistAddCheck,
  MdShoppingCart,
  MdFormatListNumbered,
} from 'react-icons/md'
import { devUrl } from '../../config'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import {
  DateConvert,
  TimeConvert,
} from '../../components/Main/DateTimeConverter'
import { Link } from '@material-ui/core'

function MemberMyOrderEventNopay(props) {
  const [membereventorder, setMemberEventorder] = useState([])
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/order/event/pay/${props.match.params.id}`
    )
      .then((res) => {
        console.log(res)
        setMemberEventorder(res.data)
        if (res.data) {
          setMemberEvent(res.data[0])
          console.log(JSON.parse(res.data[0].event_id))
          setEvents(JSON.parse(res.data[0].event_id))
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getAtt = async () => {
    await Axios.get(
      `http://localhost:3001/member/order/event/pay/att?id=${events.join(',')}`
    )
      .then((res) => {
        if (res.data) {
          setAtt(res.data)
          console.log(res.data)
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getEvent()
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      getAtt()
    }
  }, [events])

  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper ">
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
                        <h5>訂單管理</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox2 "
                      >
                        <ul className="row navbar2  d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a href="#" className="memnav_alink1">
                              已付款
                            </a>
                            <li className=" subtitle1 sublist">
                              <a
                                href={
                                  devUrl +
                                  `/member/${props.match.params.id}/MyOrder`
                                }
                                className="memnav_alink2"
                              >
                                活動
                              </a>
                            </li>
                            <li className=" subtitle1 sublist">
                              <a
                                href={
                                  devUrl +
                                  `/member/${props.match.params.id}/MyOrder/Class`
                                }
                                className="memnav_alink2"
                              >
                                課程
                              </a>
                            </li>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a href="#" className="memnav_alink1">
                              未付款
                            </a>
                            <li className=" subtitle1  sublist">
                              <a
                                href={
                                  devUrl +
                                  `/member/${props.match.params.id}/MyOrder/Event/Pay`
                                }
                                className="memnav_alink2"
                              >
                                活動
                              </a>
                            </li>
                            <li className=" subtitle1  sublist">
                              <a
                                href={
                                  devUrl +
                                  `/member/${props.match.params.id}/MyOrder/Class/Pay`
                                }
                                className="memnav_alink2"
                              >
                                課程
                              </a>
                            </li>
                          </li>
                        </ul>
                        <br />
                        {membereventorder.map((list) => {
                          return (
                            <div className="ordercard">
                              <Accordion>
                                <Card>
                                  <Card.Header>
                                    <div className="order_list d-flex">
                                      <div className="list_img  d-flex justify-content-start d-flex align-items-start flex-wrap">
                                        {att.map((m) => {
                                          return (
                                            <div className="d-flex  align-items-center justify-content-center">
                                              <img
                                                src={
                                                  devUrl +
                                                  '/pic/pic/桌布-德國.jpg'
                                                }
                                                alt="..."
                                              />
                                            </div>
                                          )
                                        })}
                                      </div>

                                      <div className="d-flex justify-content-center align-items-start row order_li">
                                        <ul>
                                          <li>
                                            <p>
                                              <MdFormatListBulleted />
                                              訂單成立時間&nbsp;:&nbsp;
                                              <DateConvert
                                                jsonDate={
                                                  list.order_create_time
                                                }
                                              ></DateConvert>
                                              {/* <TimeConvert
                                                jsonTime={
                                                  list.order_create_time
                                                }
                                              ></TimeConvert> */}
                                            </p>
                                          </li>
                                          <li>
                                            <Button
                                              className="btn-style botton-font btn_icon d-flex align-items-center justify-content-center "
                                              style={{
                                                backgroundColor: '#12d0c9',
                                              }}
                                            >
                                              <MdShoppingCart />
                                              前往付款
                                            </Button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <Accordion.Toggle
                                      as={Button}
                                      variant="link"
                                      eventKey="0"
                                      className="float-right"
                                    >
                                      <Button className="btn-style botton-font btn_icon mem_card_btn ">
                                        <MdFormatListNumbered />
                                        詳細資訊
                                      </Button>
                                    </Accordion.Toggle>
                                  </Card.Header>
                                  <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                      {att.map((m) => {
                                        return (
                                          <div className="pdCard2">
                                            <div className="ccard">
                                              <div className="d-flex dcard">
                                                <div>
                                                  <img
                                                    src={
                                                      devUrl +
                                                      '/pic/pic/桌布-德國.jpg'
                                                    }
                                                    className="card-img-top photo"
                                                    alt="..."
                                                  />
                                                </div>
                                                <div className="">
                                                  <div className="card-body">
                                                    <h5 className="card-title">
                                                      {m.event_name}
                                                    </h5>

                                                    <div className="d-flex bbb">
                                                      <img
                                                        className="icon"
                                                        src="/pic/svg/photo-camera.svg"
                                                        alt=""
                                                      />
                                                      <p className="caption">
                                                        {m.event_location}
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
                                                          jsonDate={
                                                            m.event_start_time
                                                          }
                                                        />
                                                        &nbsp;~&nbsp;
                                                        <DateConvert
                                                          jsonDate={
                                                            m.event_end_time
                                                          }
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
                                                        {m.event_address}
                                                      </p>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                      <Button
                                                        onclick=""
                                                        className="btn-style botton-font btn_icon mem_card_btn"
                                                      >
                                                        <MdVisibility />
                                                        活動檢視
                                                      </Button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      })}
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                            </div>
                          )
                        })}
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

export default withRouter(MemberMyOrderEventNopay)
