import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Form, Button } from 'react-bootstrap'
import { MdCreate } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/member/member_score.scss'
import Axios from 'axios'
import { withRouter, Link } from 'react-router-dom'

function MemberMyManagement(props) {
  const [member, setMember] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
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
                              <Form.Group
                                controlId="formBasicEmail"
                                className="mem_form"
                              >
                                <Form.Label className=" ">
                                  <p className="subtitle1">現有密碼</p>
                                </Form.Label>
                                <Form.Control
                                  type="Password"
                                  placeholder="現有密碼"
                                  className="  text_w"
                                  aria-describedby="inputGroupPrepend"
                                  value={val.member_account}
                                  // onChange=
                                />
                              </Form.Group>
                              <Form.Group
                                controlId="formBasicEmail"
                                className="mem_form"
                              >
                                <Form.Label className="">
                                  <p className="subtitle1">更改密碼</p>
                                </Form.Label>
                                <Form.Control
                                  type="Password"
                                  placeholder="更改密碼"
                                  className="  text_w"
                                />
                                <div id="Help" className="form-text caption">
                                  請輸入6-12字元
                                </div>
                              </Form.Group>

                              <Form.Group
                                controlId="formBasicEmail"
                                className="mem_form"
                              >
                                <Form.Label className="">
                                  <p className="subtitle1">確認密碼</p>
                                </Form.Label>
                                <Form.Control
                                  type="Password"
                                  placeholder="確認密碼"
                                  className="  text_w"
                                />
                              </Form.Group>
                              <div className=" d-flex justify-content-end ">
                                <Button
                                  onclick=""
                                  className="btn-style botton-font btn_icon mem_card_btn  "
                                >
                                  <MdCreate />
                                  確認修改
                                </Button>
                              </div>
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

export default withRouter(MemberMyManagement)
