import '../../index.scss'
import '../../style/member/member_pdcard2.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member_navbar2.scss'
import { Card, Button, Accordion, Modal, Spinner } from 'react-bootstrap'
import {
  MdVisibility,
  MdFormatListBulleted,
  MdPlaylistAddCheck,
  MdFormatListNumbered,
  MdDescription,
  MdClear,
} from 'react-icons/md'
import { devUrl } from '../../config'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { DateConvert } from '../../components/Main/DateTimeConverter'

function MemberMyOrderClass(props) {
  const [memberclassorder, setMemberClassorder] = useState([])
  const [memberclass, setMemberClass] = useState([])
  const [classes, setClasses] = useState([])
  const [att, setAtt] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getClass = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/order/class/${props.match.params.id}`
    )
      .then((res) => {
        console.log(res)
        setMemberClassorder(res.data)
        if (res.data) {
          setMemberClass(res.data[0])
          console.log(JSON.parse(res.data[0].class_id))
          setClasses(JSON.parse(res.data[0].class_id))
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
      `http://localhost:3001/member/order/class/att?id=${classes.join(',')}`
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
    getClass()
  }, [])

  useEffect(() => {
    if (classes.length > 0) {
      getAtt()
    }
  }, [classes])

  const delorder = (order_id) => {
    console.log(order_id)

    Axios.put('http://localhost:3001/member/update/classorder', {
      order_id: order_id,
    }).then((res) => {
      setShow(false)
      setTimeout(window.location.reload(), 500)
    })
  }

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
                        <ul className="row navbarmem2  d-flex align-items-center">
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
                        {memberclassorder.length > 0 ? (
                          <div>
                            {memberclassorder.map((list) => {
                              return (
                                <div className="ordercard">
                                  <Accordion>
                                    <Card>
                                      <Card.Header>
                                        <div className="order_list d-flex position-relative">
                                          <div className="list_img  d-flex justify-content-start  align-items-start  flex-wrap">
                                            {att.map((m) => {
                                              return (
                                                <div className="d-flex  align-items-center justify-content-center">
                                                  <img
                                                    src={
                                                      devUrl +
                                                      `/pic/class/${m.class_main_pic}`
                                                    }
                                                    alt="..."
                                                  />
                                                </div>
                                              )
                                            })}
                                          </div>

                                          <div
                                            className="d-flex justify-content-center align-items-center row order_li"
                                            style={{ marginLeft: '8px' }}
                                          >
                                            <ul>
                                              <li>
                                                <p>
                                                  <MdDescription />
                                                  訂單編號&nbsp;:&nbsp;
                                                  {list.order_id}
                                                </p>
                                              </li>
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
                                                <p>
                                                  <MdPlaylistAddCheck />
                                                  付款日期&nbsp;:&nbsp;
                                                  <DateConvert
                                                    jsonDate={list.payment_date}
                                                  ></DateConvert>
                                                </p>
                                              </li>
                                              <li
                                                className="d-flex justify-content-end position-absolute "
                                                style={{
                                                  bottom: '8px',
                                                  right: '14px',
                                                }}
                                              >
                                                <div className="d-flex justify-content-end">
                                                  <Button
                                                    onClick={handleShow}
                                                    className="btn-style botton-font btn_icon  d-flex align-items-center "
                                                    style={{
                                                      backgroundColor:
                                                        '#df3d00',
                                                    }}
                                                  >
                                                    <MdClear />
                                                    取消訂單
                                                  </Button>
                                                </div>
                                                <Modal
                                                  show={show}
                                                  onHide={handleClose}
                                                  backdrop="static"
                                                  keyboard={false}
                                                >
                                                  <Modal.Header closeButton>
                                                    <Modal.Title>
                                                      <h5>確定要取消嗎?</h5>
                                                    </Modal.Title>
                                                  </Modal.Header>
                                                  <Modal.Body>
                                                    <p>確定後將取消訂單</p>
                                                  </Modal.Body>
                                                  <Modal.Footer>
                                                    <div className="mem_inf">
                                                      <Button
                                                        variant="secondary"
                                                        onClick={handleClose}
                                                        className="btn_modal"
                                                      >
                                                        離開
                                                      </Button>

                                                      <Button
                                                        variant="primary"
                                                        className="btn_modal "
                                                        onClick={() => {
                                                          delorder(
                                                            list.order_id
                                                          )
                                                        }}
                                                      >
                                                        確定
                                                      </Button>
                                                    </div>
                                                  </Modal.Footer>
                                                </Modal>
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
                                          <Button className="btn-style botton-font btn_icon mem_card_btn btn_toscore">
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
                                                          `/pic/class/${m.class_main_pic}`
                                                        }
                                                        className="card-img-top photo"
                                                        alt="..."
                                                      />
                                                    </div>
                                                    <div className="">
                                                      <div className="card-body">
                                                        <h5 className="card-title">
                                                          {m.class_name}
                                                        </h5>

                                                        <div className="d-flex bbb">
                                                          <img
                                                            className="icon"
                                                            src="/pic/svg/photo-camera.svg"
                                                            alt=""
                                                          />
                                                          <p className="caption">
                                                            {m.class_place}
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
                                                                m.class_start_date
                                                              }
                                                            />
                                                            &nbsp;~&nbsp;
                                                            <DateConvert
                                                              jsonDate={
                                                                m.class_end_date
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
                                                            {m.class_address}
                                                          </p>
                                                        </div>
                                                        <div className="d-flex justify-content-end">
                                                          <Button
                                                            onclick=""
                                                            className="btn-style botton-font btn_icon mem_card_btn"
                                                            href={
                                                              devUrl +
                                                              `/class/${m.class_id}`
                                                            }
                                                          >
                                                            <MdVisibility />
                                                            課程檢視
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
                          </div>
                        ) : (
                          <div style={{ marginTop: '32px' }}>
                            <p>沒有訂單資訊趕快去精選課程看看吧</p>
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

export default withRouter(MemberMyOrderClass)
