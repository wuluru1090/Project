import '../../index.scss'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdVisibility, MdFolderOpen } from 'react-icons/md'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import '../../style/member/user_member.scss'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'
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
                      <p className=" d-flex align-items-center star_Points">
                        2.5
                      </p>

                      <div>
                        <Rating
                          name="customized-empty"
                          defaultValue={5}
                          precision={0.5}
                          emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mem_namescorh">
                    <Button
                      onClick={() => setLgShow(true)}
                      className="btn_icon btn-mem_view d-flex justify-content-center align-items-center"
                    >
                      <MdVisibility className="botton-font" />
                      歷史評價
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between  photo_album_all flex-wrap">
                    <Link to="#">
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
                    </Link>

                    <Link to="#">
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
                    </Link>
                    <Link to="#">
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
                    </Link>
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
                        <Link to="">
                          <figure>
                            <img
                              className=" rounded-circle  "
                              variant="top"
                              src={devUrl + '/pic/pic/member.jpg'}
                              alt=""
                            />
                          </figure>
                        </Link>
                      </div>
                      <div className="detail d-flex col-10 align-items-center">
                        <div className="de">
                          <h6>陳宇軒</h6>
                          <div
                            className="d-flex justify-content-start"
                            style={{ margin: '0px' }}
                          >
                            <p
                              className=" d-flex align-items-center  star_Points"
                              style={{ margin: '0px' }}
                            >
                              2.5
                            </p>
                            <div>
                              <Rating
                                name="customized-empty"
                                defaultValue={5}
                                precision={0.5}
                                emptyIcon={
                                  <StarBorderIcon fontSize="inherit" />
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <p
                              className="subtitle2 
comments"
                            >
                              太棒了1213456666666666666666666666666666666666666666666666666666
                            </p>
                            <p className="subtitle2">1月1日, 12:25</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="list-content row holder">
                      <div className="pic col-2 d-flex justify-content-start align-items-center">
                        <Link to="">
                          {' '}
                          <figure>
                            <img
                              className=" rounded-circle  "
                              variant="top"
                              src={devUrl + '/pic/pic/member.jpg'}
                              alt=""
                            />{' '}
                          </figure>
                        </Link>
                      </div>
                      <div className="detail d-flex col-10 align-items-center">
                        <div className="de">
                          <h6>陳宇軒</h6>
                          <div
                            className="d-flex justify-content-start"
                            style={{ margin: '0px' }}
                          >
                            <p
                              className=" d-flex align-items-center  star_Points"
                              style={{ margin: '0px' }}
                            >
                              2.5
                            </p>
                            <div>
                              <Rating
                                name="customized-empty"
                                defaultValue={5}
                                precision={0.5}
                                emptyIcon={
                                  <StarBorderIcon fontSize="inherit" />
                                }
                              />
                            </div>
                          </div>

                          <div>
                            <p
                              className="subtitle2 
comments"
                            >
                              太棒了1213456
                            </p>
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
