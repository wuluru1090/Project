import '../../index.scss'
import React from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'

import '../../style/member/member.scss'
import '../../style/member/member_photo.scss'
import { devUrl } from '../../config'
import { Card } from 'react-bootstrap'
import { MdAddCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
function MemberMyPhoto(props) {
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
                  <div className="container ">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的相簿</h5>
                      </Card.Header>
                      <Card.Body style={{ padding: '14px  42px  43px 42px' }}>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="photo_album  justify-content-start ">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box d-flex align-items-center">
                              <div className="d-flex justify-content-center flex-wrap">
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
                                <figure className="position-relative">
                                  <div className="addphoto position-absolute ">
                                    <Link to="/member/MyPhoto2">
                                      <MdAddCircle />
                                    </Link>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="photo_album  justify-content-start ">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box d-flex align-items-center">
                              <div className="d-flex justify-content-center flex-wrap">
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
                                <figure className="position-relative">
                                  <div className="addphoto position-absolute ">
                                    <Link to="/member/MyPhoto2">
                                      <MdAddCircle />
                                    </Link>
                                  </div>
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="photo_album  justify-content-start ">
                            <h6 className="subtitle2">
                              綠意盎藍一日遊遊遊遊遊
                            </h6>
                            <div className="img_box d-flex align-items-center">
                              <div className="d-flex justify-content-center flex-wrap">
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
                                <figure className="position-relative">
                                  <div className="addphoto position-absolute ">
                                    <Link to="/member/MyPhoto2">
                                      <MdAddCircle />
                                    </Link>
                                  </div>
                                </figure>
                              </div>
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
          <br />
        </div>
      </body>
    </>
  )
}

export default MemberMyPhoto
