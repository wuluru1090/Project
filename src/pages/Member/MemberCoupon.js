import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member_coupon.scss'
import '../../style/member_navbar.scss'
import { Card, Button } from 'react-bootstrap'
import { MdVisibility } from 'react-icons/md'
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
                        className="box "
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
                              <button className="btn_style r subtitle2 ">
                                領取
                              </button>
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
                              <button className="btn_style r subtitle2 ">
                                領取
                              </button>
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
                              <button className="btn_style r subtitle2 ">
                                領取
                              </button>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className=" d-flex justify-content-end ">
                          <button className=" btn_style subtitle2 ">
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
      </body>
    </>
  )
}

export default MemberCoupon
