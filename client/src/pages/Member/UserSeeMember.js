import '../../index.scss'
import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdVisibility, MdFolderOpen } from 'react-icons/md'
import '../../style/member/user_member.scss'
import { devUrl } from '../../config'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { DateConvert } from '../../components/Main/DateTimeConverter'

function UserSeeMember(props) {
  const [member, setMember] = useState([])
  const [lgShow, setLgShow] = useState(false)
  const [score, setScore] = useState([])
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [photo, setPhoto] = useState([])
  const [attphoto, setAttphoto] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/score/${props.match.params.id}`)
      .then((res) => {
        setScore(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/event/${props.match.params.id}`
    )
      .then((res) => {
        setMemberEvent(res.data[0])
        // console.log(res.data[0])
        if (res.data) {
          console.log(JSON.parse(res.data[0].event_id))
          setEvents(JSON.parse(res.data[0].event_id))
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getAtt = async () => {
    await Axios.get(
      `http://localhost:3001/member/history/event/att?id=${events.join(',')}`
    )
      .then((res) => {
        setAtt(res.data)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getPhoto = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/event/photo?id=${events.join(
        ','
      )}&member=${props.match.params.id}`
    )
      .then((res) => {
        setPhoto(res.data)
        console.log(res.data)
        setAttphoto(res.data.slice(0, 4))
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getEvent()
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      getAtt()
      getPhoto()
    }
  }, [events])

  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper">
            <main className="container">
              {member.map((val) => {
                return (
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
                            <div className=" d-flex justify-content-center star">
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

                      <div className="d-flex justify-content-around  photo_album_all flex-wrap">
                        {att.map((m) => {
                          return (
                            <a
                              href={
                                devUrl + `/see/${props.match.params.id}/Album`
                              }
                            >
                              <div className="photo_album2 albumtitle">
                                <h6 className="subtitle2 font-bold">
                                  {m.event_name} &nbsp;
                                  <MdFolderOpen />
                                </h6>

                                <div className="img_box2">
                                  <div className="">
                                    {attphoto.map((p) => {
                                      return (
                                        <img
                                          src={`${devUrl}/pic/event_pic/${p.photo_name}`}
                                          alt="photo1"
                                        ></img>
                                      )
                                    })}
                                  </div>
                                </div>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </aside>
                )
              })}

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
                    {score.map((s) => {
                      return (
                        <div className="list-content row holder">
                          <div className="pic col-2 d-flex justify-content-start align-items-center">
                            <figure>
                              <img
                                className=" rounded-circle  "
                                variant="top"
                                src={devUrl + `/pic/mem_img/${s.member_img}`}
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="detail d-flex col-10 align-items-center">
                            <div className="de">
                              <h6>{s.member_name}</h6>
                              <div
                                className="d-flex justify-content-start"
                                style={{ margin: '0px' }}
                              >
                                <div className="d-flex justify-content-center  ">
                                  <div className=" d-flex justify-content-center star">
                                    <p
                                      className=" d-flex align-items-center star_Points"
                                      style={{
                                        margin: '0px',
                                        padding: '0px',
                                      }}
                                    >
                                      <Box
                                        sml={2}
                                        style={{
                                          margin: '0px',
                                          padding: '0px',
                                        }}
                                      >
                                        {s.rating}
                                      </Box>
                                    </p>
                                    <Rating
                                      name="read-only"
                                      value={s.rating}
                                      precision={0.5}
                                      readOnly
                                      style={{
                                        margin: '0px',
                                        padding: '0px',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p
                                  className="subtitle2 
comments"
                                >
                                  {s.rating_evaluate}
                                </p>
                                <p className="subtitle2">
                                  <DateConvert
                                    jsonDate={s.c_date}
                                  ></DateConvert>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
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

export default withRouter(UserSeeMember)
