import '../../index.scss'
import React, { useState } from 'react'
import { Button, Modal, Card } from 'react-bootstrap'
import {
  MdStar,
  MdStarBorder,
  MdStarHalf,
  MdVisibility,
  MdFolderOpen,
} from 'react-icons/md'
import '../../style/member/user_member.scss'
import { devUrl } from '../../config'
function UserSeeMember(props) {
  const [lgShow, setLgShow] = useState(false)
  return (
    <>
      <body>
        <div className="background_wave ">
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

                  <div className="d-flex justify-content-center ">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="botton-font btn_icon btn-mem_view d-flex justify-content-center align-items-center "
                    >
                      <MdVisibility className="botton-font" />
                      歷史評價
                    </Button>
                  </div>

                  <br />
                  <div className="d-flex justify-content-between  photo_album_all flex-wrap">
                    <div className="photo_album2">
                      <h6 className="subtitle2 font-bold">
                        綠意盎藍一日遊遊遊遊遊 &nbsp;
                        <MdFolderOpen />
                      </h6>

                      <div className="img_box2">
                        <div className="">
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
                        </div>
                      </div>
                    </div>

                    <div className="photo_album2">
                      <h6 className="subtitle2 font-bold">
                        綠意盎藍一日遊遊遊遊遊 &nbsp;
                        <MdFolderOpen />
                      </h6>

                      <div className="img_box2">
                        <div className="">
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
                        </div>
                      </div>
                    </div>
                    <div className="photo_album2">
                      <h6 className="subtitle2 font-bold">
                        綠意盎藍一日遊遊遊遊遊 &nbsp;
                        <MdFolderOpen />
                      </h6>

                      <div className="img_box2">
                        <div className="">
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
                        </div>
                      </div>
                    </div>
                    <div className="photo_album2">
                      <h6 className="subtitle2 font-bold">
                        綠意盎藍一日遊遊遊遊遊 &nbsp;
                        <MdFolderOpen />
                      </h6>

                      <div className="img_box2">
                        <div className="">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    <h5>歷史評價</h5>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="mem_coll_list ">
                    <div className="list-content row holder">
                      <div className="pic col-2 d-flex justify-content-start align-items-center">
                        <figure>
                          <img
                            className=" rounded-circle  "
                            variant="top"
                            src={devUrl + '/pic/pic/member.jpg'}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="detail d-flex col-10 align-items-center">
                        <div className="de">
                          <h6>陳宇軒</h6>
                          <p className="subtitle2 host">主揪</p>
                          <div className="d-flex justify-content-center ">
                            <p className=" d-flex align-items-center">2.5</p>
                            <div className="star">
                              <MdStar />
                              <MdStar />
                              <MdStarHalf />
                              <MdStarBorder />
                              <MdStarBorder />
                            </div>
                          </div>
                          <h6 className="subtitle2 ">太棒了1213456</h6>
                          <p className="subtitle2">1月1日, 12:25</p>
                        </div>
                      </div>
                    </div>
                    <br />

                    <div className="list-content row">
                      <div className="pic col-2 d-flex justify-content-start align-items-center">
                        <figure>
                          <img
                            className=" rounded-circle  "
                            variant="top"
                            src={devUrl + '/pic/pic/member.jpg'}
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="detail d-flex col-10 align-items-center">
                        <div className="de">
                          <h6>陳宇軒</h6>
                          <Card.Text className="d-flex justify-content-center  ">
                            <p className=" d-flex align-items-center">2.5</p>

                            <div className="star">
                              <MdStar />
                              <MdStar />
                              <MdStarHalf />
                              <MdStarBorder />
                              <MdStarBorder />
                            </div>
                          </Card.Text>
                          <h6 className="subtitle2 ">太棒了1213456</h6>
                          <p className="subtitle2">1月1日, 12:25</p>
                        </div>
                      </div>
                    </div>

                    <div className="list-content row">
                      <div className="pic col-2 d-flex justify-content-start align-items-center">
                        <figure>
                          <img src="" alt="" />
                        </figure>
                      </div>
                      <div className="detail d-flex col-10 align-items-center">
                        <div className="de">
                          <h6>陳宇軒</h6>
                          <div
                            className="d-flex justify-content-center"
                            style={{ margin: '0px' }}
                          >
                            <p
                              className=" d-flex align-items-center  "
                              style={{ margin: '0px' }}
                            >
                              2.5
                            </p>
                            <div className="star" style={{ margin: '0px' }}>
                              <MdStar />
                              <MdStar />
                              <MdStarHalf />
                              <MdStarBorder />
                              <MdStarBorder />
                            </div>
                          </div>

                          <div>
                            <h6 className="subtitle2 ">太棒了1213456</h6>
                            <p className="subtitle2">1月1日, 12:25</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Modal.Body>

                {/* <Modal.Footer>
                  <Button
                    variant="secondary btn_style btn-mem_view "
                    onClick={() => setLgShow(true)}
                  >
                    返回
                  </Button>
                </Modal.Footer> */}
              </Modal>
            </main>
          </div>
        </div>
      </body>
    </>
  )
}

export default UserSeeMember
