import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import '../../style/member.scss'
import '../../style/member_photo2.scss'
import { devUrl } from '../../config'
import { Card } from 'react-bootstrap'
import { MdAddCircleOutline } from 'react-icons/md'
function MemberMyPhoto2(props) {
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
                        <h5>我的相簿/一日遊是我</h5>
                        <div className="addphoto2 ">
                          <MdAddCircleOutline />
                        </div>
                      </Card.Header>
                      <Card.Body style={{ padding: '14px  42px  43px 42px' }}>
                        <div className="photo_album3 ">
                          <div className="img_box3   d-flex justify-content-start">
                            <figure className=" d-flex justify-content-between flex-wrap">
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                              <img
                                src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                alt="photo1"
                              ></img>
                            </figure>
                          </div>
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

        <Footer />
      </body>
    </>
  )
}

export default MemberMyPhoto2
