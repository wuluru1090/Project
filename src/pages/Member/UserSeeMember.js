import '../../index.scss'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import {
  MdStar,
  MdStarBorder,
  MdStarHalf,
  MdVisibility,
  MdFolder,
} from 'react-icons/md'
import '../../style/user_member.scss'
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
                      style={{ width: '220px' }}
                      variant="top"
                      src={devUrl + '/pic/pic/member.jpg'}
                      alt=""
                    />
                  </div>
                  <br />
                  <div className="mem_nameandtitle">
                    <h5 className="d-flex justify-content-center ">Tina</h5>

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
                  </div>

                  <div className="d-flex justify-content-center  ">
                    <Button
                      onclick=""
                      className="botton-font btn_icon btn-mem_view d-flex justify-content-center align-items-center "
                    >
                      <MdVisibility className="botton-font" />
                      歷史評價
                    </Button>
                  </div>

                  <br />
                  <div className="d-flex justify-content-between ">
                    <div className="photo_album2">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
                      <div className="img_box2">
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
                    <div className="photo_album2">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
                      <div className="img_box2">
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
                    <div className="photo_album2">
                      <h6 className="subtitle2">綠意盎藍一日遊遊遊遊遊</h6>
                      <div className="img_box2">
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
