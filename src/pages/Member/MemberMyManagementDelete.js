import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Form, Button } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import '../../style/member/member_score.scss'
import { devUrl } from '../../config'

function MemberMyManagementDelete(props) {
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
                            <a href={devUrl + '/member/MyManagement'}>
                              修改密碼
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a href={devUrl + '/member/MyManagement/Delete'}>
                              刪除帳號
                            </a>
                          </li>
                        </ul>
                        <br />
                        <Form className="  mem_inf">
                          <div className="d-flex justify-content-between ">
                            <p style={{ color: '#707070' }}>
                              刪除你的揪影帳戶與個人資料
                            </p>
                            <Button
                              onclick=""
                              className="btn-style botton-font btn_icon mem_card_btn  "
                              style={{ backgroundColor: '#df3d00' }}
                            >
                              <MdDeleteForever />
                              刪除帳號
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
          <br />
        </div>
      </body>
    </>
  )
}

export default MemberMyManagementDelete
