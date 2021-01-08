import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member_coupon.scss'
import '../../style/member/member_navbar.scss'
import { Card, Button } from 'react-bootstrap'
import { MdArchive } from 'react-icons/md'
import { devUrl } from '../../config'

function MemberCoupon(props) {
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
                        <h5>折價券</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox "
                      >
                        <br />
                        <h6>我的折價券</h6>
                        <hr className="hrline" />
                        <p>尚未領取</p>

                        <h6>領取折價券</h6>
                        <hr className="hrline" />
                        <div className=" d-flex justify-content-between">
                          <div className=" coupon ">
                            <p className="d-flex justify-content-center">
                              註冊禮
                            </p>
                            <p className="d-flex justify-content-center">
                              活動滿500折100元
                            </p>
                            <div className="d-flex justify-content-end">
                              <button className=" btn_sm join">領取</button>
                            </div>
                          </div>
                          <div className=" coupon  ">
                            <p className="d-flex justify-content-center">
                              註冊禮
                            </p>
                            <p className="d-flex justify-content-center">
                              活動滿500折100元
                            </p>
                            <div className="d-flex justify-content-end">
                              <button className="  btn_sm join">領取</button>
                            </div>
                          </div>
                          <div className=" coupon ">
                            <p className="d-flex justify-content-center">
                              註冊禮
                            </p>
                            <p className="d-flex justify-content-center">
                              活動滿500折100元
                            </p>
                            <div className="d-flex justify-content-end">
                              <button className=" btn_sm join">領取</button>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className=" d-flex justify-content-end ">
                          <button className=" btn_style subtitle2 botton-font btn_icon mem_card_btn">
                            <MdArchive />
                            一鍵領取
                          </button>
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

export default MemberCoupon
