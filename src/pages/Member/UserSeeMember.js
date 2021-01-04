import '../../index.scss'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import { MdStar, MdStarBorder, MdStarHalf, MdVisibility } from 'react-icons/md'
import '../../style/member_card.scss'
import { devUrl } from '../../config'
function UserSeeMember(props) {
  return (
    <>
      <body>
        <div className="background_wave ">
          <header>
            <MyNavbar />
          </header>
          <div className="wrapper">
            <main className="container">
              <aside className="d-flex justify-content-center card_body">
                <br />
                <div className="user_mem_card">
                  <div className="d-flex justify-content-center align-items-center user_card">
                    <img
                      className=" rounded-circle d-flex justify-content-center "
                      style={{ width: '160px' }}
                      variant="top"
                      src={devUrl + '/pic/pic/member.jpg'}
                      alt=""
                    />
                  </div>

                  <div className="d-flex justify-content-center  ">
                    <p className=" d-flex align-items-center">2.5</p>

                    <div className="star">
                      <MdStar />
                      <MdStar />
                      <MdStarHalf />
                      <MdStarBorder />
                      <MdStarBorder />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center  ">
                    <Button
                      onclick=""
                      className="botton-font btn_icon d-flex justify-content-center align-items-center "
                    >
                      <MdVisibility />
                      檢視
                    </Button>
                  </div>

                  {/* <Card.Footer>
            <small className="text-muted">5.0 我是評分系統</small>
          </Card.Footer> */}

                  <br />
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="photo_album">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
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
                        </figure>
                      </div>
                    </div>
                    <div className="photo_album">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
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
                        </figure>
                      </div>
                    </div>
                    <div className="photo_album">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
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
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </main>
          </div>
        </div>

        <Footer />
      </body>
    </>
  )
}

export default UserSeeMember
