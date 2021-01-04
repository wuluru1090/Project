import '../../index.scss'
import React from 'react'
import MemberContent from '../../components/Member/MemberContent'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import '../../style/member.scss'
import '../../style/member_photo.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import { MdAddCircle } from 'react-icons/md'
function MemberMyPhoto(props) {
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
                        <h5>我的相簿</h5>
                      </Card.Header>
                      <Card.Body style={{ padding: '14px  42px  43px 42px' }}>
                        <div className="d-flex justify-content-around flex-wrap">
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle href="/member/MyPhoto/Pic" />
                                  </div>
                                </figure>
                              </figure>
                            </div>
                          </div>
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle />
                                  </div>
                                </figure>
                              </figure>
                            </div>
                          </div>
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle />
                                  </div>
                                </figure>
                              </figure>
                            </div>
                          </div>
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle />
                                  </div>
                                </figure>
                              </figure>
                            </div>
                          </div>
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle />
                                  </div>
                                </figure>
                              </figure>
                            </div>
                          </div>
                          <div className="photo_album">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box">
                              <figure className="d-flex justify-content-end flex-wrap">
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
                                <figure className="d-flex justify-content-end">
                                  <div className="addphoto ">
                                    <MdAddCircle />
                                  </div>
                                </figure>
                              </figure>
                            </div>
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

export default MemberMyPhoto
