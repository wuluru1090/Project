import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import '../../style/member_navbar.scss'
import { devUrl } from '../../config'
import { Card, Nav, NavDropdown, Button } from 'react-bootstrap'
import { MdVisibility, MdDone } from 'react-icons/md'
function MemberMyjoinin(props) {
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
                  <div className="container ">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的揪團</h5>
                        <Button
                          onclick=""
                          className="btn-style botton-font btn_icon"
                        >
                          <MdVisibility />
                          檢視
                        </Button>
                      </Card.Header>
                      <Card.Body style={{ padding: '0  38px  43px 42px' }}>
                        <ul className="row ">
                          <li className="row subtitle1">
                            購物車
                            <li eventKey="4.1" className="subtitle1">
                              活動
                            </li>
                            <li eventKey="4.2" className="subtitle1">
                              課程
                            </li>
                          </li>
                          <li className="row subtitle1">
                            未付款
                            <li eventKey="4.1" className="subtitle1">
                              活動
                            </li>
                            <li eventKey="4.2" className="subtitle1">
                              課程
                            </li>
                          </li>
                        </ul>

                        {/* <div className="d-flex justify-content-start">
                          <nav className="row ">
                            <ul className=" nav">購物車</ul>
                            <li className="nav-item">活動</li>
                            <li className="nav-item">課程</li>
                            <ul className=" nav">未付款</ul>
                            <li className="nav-item">活動</li>
                            <li className="nav-item">課程</li>
                          </nav>
                        </div> */}
                        <Button
                          type="submit"
                          className="btn-style botton-font btn_icon  "
                        >
                          <MdDone />
                          儲存
                        </Button>
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

export default MemberMyjoinin
