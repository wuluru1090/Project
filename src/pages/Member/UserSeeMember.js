import '../../index.scss'
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdVisibility, MdFolderOpen } from 'react-icons/md'
import RatingReadOnly from '../../components/Member/rating_readonly'
import '../../style/member/user_member.scss'
import { devUrl } from '../../config'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

function UserSeeMember(props) {
  const [member, setMember] = useState([])
  const [lgShow, setLgShow] = useState(false)
  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      {member.map((val) => {
        return (
          <body>
            <div className="background_wave ">
              <div className="wrapper">
                <main className="container">
                  <aside className="d-flex justify-content-center user_card_body">
                    <br />

                    <div className="user_mem_card">
                      <div className="d-flex justify-content-center align-items-center user_card">
                        <img
                          className=" rounded-circle d-flex justify-content-center "
                          style={{ width: '220px', height: '220px' }}
                          variant="top"
                          src={devUrl + `/pic/mem_img/${val.member_img}`}
                          alt=""
                        />
                      </div>
                      <br />
                      <div className=" d-flex justify-content-center">
                        <div className="mem_nameandtitle ">
                          <h5 className="d-flex justify-content-center ">
                            {val.member_name}
                          </h5>
                          <p className="d-flex justify-content-center ">
                            {val.member_about}
                          </p>

                          <div className="d-flex justify-content-center  ">
                            <div className=" d-flex justify-content-center">
                              <p className=" d-flex align-items-center star_Points">
                                <Box sml={2}>{val.member_Average_rating} </Box>
                              </p>
                              <Rating
                                name="read-only"
                                value={val.member_Average_rating}
                                precision={0.5}
                                readOnly
                              />
                            </div>
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
                        <Link to="/see/Album">
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

                        <Link to="/see/Album">
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
                        <Link to="/see/Album">
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
                                <RatingReadOnly />
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
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="detail d-flex col-10 align-items-center">
                            <div className="de">
                              <h6>陳宇軒</h6>
                              <div className="align-items-center">
                                <RatingReadOnly />
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
        )
      })}
    </>
  )
}

export default withRouter(UserSeeMember)
