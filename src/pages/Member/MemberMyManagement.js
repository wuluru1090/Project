import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import { Card, Form, Button } from 'react-bootstrap'
import { MdCreate } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/member_score.scss'

function MemberMyManagement(props) {
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
                        <h5>帳號管理</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  42px  43px 42px' }}
                        className="box "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a href="#">修改密碼</a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a href="#">刪除帳號</a>
                          </li>
                        </ul>
                        <br />
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
                              請輸入6-12字元，至少包含1個數字、1個字母
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
                              活動檢視
                            </Button>
                          </div>
                        </Form>
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

export default MemberMyManagement
