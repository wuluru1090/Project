import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MemberPdCard2 from '../../components/Member/MemberPdCard2'
// import CartNavbarlist from '../../components/Member/Cart_Navbarlist'
import '../../style/member/member.scss'
import { Card } from 'react-bootstrap'
import { devUrl } from '../../config'

function MemberMyOrder(props) {
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
                        className="box "
                      >
                        {/* <CartNavbarlist /> */}
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a href="#">購物車</a>
                            <li className=" subtitle1 sublist">
                              <a href="#">活動</a>
                            </li>
                            <li className=" subtitle1 sublist">
                              <a href="#">課程</a>
                            </li>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a href="#">未付款</a>
                            <li className=" subtitle1  sublist">
                              <a href="#">活動</a>
                            </li>
                            <li className=" subtitle1  sublist">
                              <a href="#">課程</a>
                            </li>
                          </li>
                        </ul>
                        <br />
                        <MemberPdCard2 />
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

export default MemberMyOrder
