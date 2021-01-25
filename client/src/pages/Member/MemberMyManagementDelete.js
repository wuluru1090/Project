import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Form, Button, Modal, Spinner } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import '../../style/member/member_score.scss'
import '../../style/member/member_modal.scss'
import { devUrl } from '../../config'
import Axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

function MemberMyManagementDelete(props) {
  const [member, setMember] = useState([])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const deleteAccount = (member) => {
    Axios.delete(`http://localhost:3001/api/delete/${member}`)
    alert('確定刪除')
  }
  // function deteAcc() {
  //   setTimeout(function () {
  //     const spinner = (
  //       <>
  //         <Spinner animation="border" variant="primary" />
  //       </>
  //     )
  //   }, 1000)
  // }

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
                        <h5>帳號管理</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  42px  43px 42px' }}
                        className="navbarbox "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyManagement`
                              }
                            >
                              修改密碼
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyManagement/Delete`
                              }
                            >
                              刪除帳號
                            </a>
                          </li>
                        </ul>
                        <br />
                        {member.map((val) => {
                          return (
                            <Form className="  mem_inf">
                              <div className="d-flex justify-content-between ">
                                <p style={{ color: '#707070' }}>
                                  刪除你的揪影帳戶與個人資料
                                </p>

                                <Button
                                  onClick={handleShow}
                                  className="btn-style botton-font btn_icon mem_card_btn  "
                                  style={{ backgroundColor: '#df3d00' }}
                                >
                                  <MdDeleteForever />
                                  刪除帳號
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
                                    <h5>確定要刪除嗎?</h5>
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <h6>
                                    <Spinner
                                      animation="grow"
                                      variant="danger"
                                      size="sm"
                                    />
                                    警告
                                  </h6>

                                  <p>確定後將永久你的刪除揪影帳戶與個人資料</p>
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
                                    <Link to="/home">
                                      <Button
                                        variant="primary"
                                        className="btn_modal "
                                        onClick={() => {
                                          deleteAccount(val.member_id)
                                        }}
                                      >
                                        確定
                                      </Button>
                                    </Link>
                                  </div>
                                </Modal.Footer>
                              </Modal>
                            </Form>
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

export default withRouter(MemberMyManagementDelete)
