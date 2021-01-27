import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { Card, Button, Accordion } from 'react-bootstrap'
import { devUrl } from '../../config'
import '../../style/member/member_scoreok.scss'
import '../../style/member/member_navbar.scss'
import '../../style/member/member.scss'
import { MdGrade } from 'react-icons/md'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { DateConvert } from '../../components/Main/DateTimeConverter'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

function MemberMyScoreOk(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [score, setScore] = useState([])
  const [member_id, setMemberId] = useState('')
  const [event_id, setEventId] = useState('')
  const [toscore_id, setToscoreId] = useState('')
  // const [rating, setRating] = useState('')
  const [rating_eva, setRatingEva] = useState('')
  const [value, setValue] = React.useState(5)
  const [hover, setHover] = React.useState(-1)
  const [attmem, setAttmem] = useState([])
  const [attendants, setAttendants] = useState([])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/event/${props.match.params.id}`
    )
      .then((res) => {
        setMemberEvent(res.data[0])
        if (res.data) {
          setEvents(JSON.parse(res.data[0].event_id))
          console.log(JSON.parse(res.data[0].event_id))
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
        if (res.data) {
          // console.log(res.data)
          // console.log(JSON.parse(res.data[0].event_attendents))
          setAttendants(JSON.parse(res.data[0].event_attendents))
        } else {
          return
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getAttmem = async () => {
    await Axios.get(
      `http://localhost:3001/member/history/event/att/mem?id=${attendants.join(
        ','
      )}`
    )
      .then((res) => {
        console.log(res.data)
        setAttmem(res.data)

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
    }
  }, [events])

  useEffect(() => {
    if (attendants.length > 0) {
      getAttmem()
    }
  }, [attendants])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/score/mem/${props.match.params.id}`
    ).then((res) => {
      setScore(res.data)
      console.log(res.data)
    })
  }, [])

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
                  <div className="container">
                    <Card className="mem_box">
                      <Card.Header className="mem_title d-flex justify-content-between">
                        <h5>我的評價</h5>
                      </Card.Header>

                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox1"
                      >
                        <ul className="row navbarmems d-flex align-items-center">
                          <li className=" subtitle1  main_li  d-flex align-items-center">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyScore`
                              }
                            >
                              未評價
                            </a>
                          </li>
                          <li className=" subtitle1 main_li  d-flex align-items-center">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyScoreOk`
                              }
                            >
                              已評價
                            </a>
                          </li>
                        </ul>
                        <br />
                        {att.length > 0 ? (
                          <div>
                            {att.map((m) => {
                              return (
                                <Card.Body style={{ padding: '0' }}>
                                  <Accordion>
                                    <div className="pd_score">
                                      <div className="ccard">
                                        <div className="d-flex dcard">
                                          <div>
                                            <img
                                              src={
                                                devUrl +
                                                '/pic/event/' +
                                                m.event_photo
                                              }
                                              className="card-img-top photo"
                                              alt="..."
                                            />
                                          </div>
                                          <div className="">
                                            <div className="card-body">
                                              <h5 className="card-title">
                                                {m.event_name}
                                              </h5>
                                              <div className="d-flex bbb">
                                                <img
                                                  className="icon"
                                                  src="/pic/svg/photo-camera.svg"
                                                  alt=""
                                                />
                                                <p className="caption">
                                                  {m.event_location}
                                                </p>
                                              </div>
                                              <div className="d-flex bbb">
                                                <img
                                                  className="icon2"
                                                  src="/pic/svg/date_range-24px.svg"
                                                  alt=""
                                                />
                                                <p className="caption  d-flex">
                                                  <DateConvert
                                                    jsonDate={
                                                      m.event_start_time
                                                    }
                                                  />
                                                  &nbsp;~&nbsp;
                                                  <DateConvert
                                                    jsonDate={m.event_end_time}
                                                  />
                                                </p>
                                              </div>
                                              <div className="d-flex bbb">
                                                <img
                                                  className="icon3"
                                                  src="/pic/svg/location_on-24px.svg"
                                                  alt=""
                                                />
                                                <p className="caption ">
                                                  {m.event_address}
                                                </p>
                                              </div>
                                            </div>

                                            <div className=" d-flex justify-content-end">
                                              <div>
                                                <Accordion.Toggle
                                                  as={Button}
                                                  variant="link"
                                                  eventKey="0"
                                                >
                                                  <Button className="btn-style botton-font btn_icon mem_card_btn btn_toscore">
                                                    <MdGrade />
                                                    我的評價
                                                  </Button>
                                                </Accordion.Toggle>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

<<<<<<< HEAD
                                    <Accordion.Collapse eventKey="0">
                                      <form className="mymem_toscoreM">
                                        <div className="mymem_toscore">
                                          <div className="score_table">
                                            <div>
                                              {score.length > 0 ? (
                                                <div>
                                                  {score.map((s) => {
                                                    return (
                                                      <div className="list-content row holder">
                                                        <div className="pic col-2 d-flex justify-content-start align-items-center">
                                                          <figure>
                                                            <img
                                                              className=" rounded-circle mem_img "
=======
                            <Accordion.Collapse eventKey="0">
                              <form className="mymem_toscoreM">
                                <div className="mymem_toscore">
                                  <div className="score_table">
                                    <div>
                                      {score.length > 0 ? (
                                        <div>
                                          {score.map((s) => {
                                            return (
                                              <div className="list-content row holder">
                                                <div className="pic col-2 d-flex justify-content-start align-items-center">
                                                  <figure>
                                                    <img
                                                      className=" rounded-circle mem_img "
                                                      style={{
                                                        width: '80px',
                                                        height: '80px',
                                                      }}
                                                      variant="top"
                                                      src={
                                                        devUrl +
                                                        `/pic/mem_img/${s.member_img}`
                                                      }
                                                      alt=""
                                                    />
                                                  </figure>
                                                </div>
                                                <div className="detail d-flex col-10 align-items-center">
                                                  <div className="de">
                                                    <h6
                                                      style={{
                                                        margin: '8px 0 0 0',
                                                        padding: '0px',
                                                      }}
                                                    >
                                                      {s.member_name}
                                                    </h6>
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
>>>>>>> 2904d813d9bfab6eede45df99c859cf1feac2d62
                                                              style={{
                                                                width: '80px',
                                                                height: '80px',
                                                              }}
                                                              variant="top"
                                                              src={
                                                                devUrl +
                                                                `/pic/mem_img/${s.member_img}`
                                                              }
                                                              alt=""
                                                            />
                                                          </figure>
                                                        </div>
                                                        <div className="detail d-flex col-10 align-items-center">
                                                          <div className="de">
                                                            <h6
                                                              style={{
                                                                margin:
                                                                  '8px 0 0 0',
                                                                padding: '0px',
                                                              }}
                                                            >
                                                              {s.member_name}
                                                            </h6>
                                                            <div
                                                              className="d-flex justify-content-start"
                                                              style={{
                                                                margin: '0px',
                                                              }}
                                                            >
                                                              <div className="d-flex justify-content-center  ">
                                                                <div className=" d-flex justify-content-center star">
                                                                  <p
                                                                    className=" d-flex align-items-center star_Points"
                                                                    style={{
                                                                      margin:
                                                                        '0px',
                                                                      padding:
                                                                        '0px',
                                                                    }}
                                                                  >
                                                                    <Box
                                                                      sml={2}
                                                                      style={{
                                                                        margin:
                                                                          '0px',
                                                                        padding:
                                                                          '0px',
                                                                      }}
                                                                    >
                                                                      {s.rating}
                                                                    </Box>
                                                                  </p>
                                                                  <Rating
                                                                    name="read-only"
                                                                    value={
                                                                      s.rating
                                                                    }
                                                                    precision={
                                                                      0.5
                                                                    }
                                                                    readOnly
                                                                    style={{
                                                                      margin:
                                                                        '8px 0',
                                                                      padding:
                                                                        '0px',
                                                                    }}
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div>
                                                              <p
                                                                className="subtitle2 
                                                   
comments"
                                                                style={{
                                                                  margin: '0px',
                                                                  padding:
                                                                    '0px',
                                                                }}
                                                              >
                                                                {
                                                                  s.rating_evaluate
                                                                }
                                                              </p>
                                                              <p
                                                                className="subtitle2"
                                                                style={{
                                                                  margin:
                                                                    '8px 0',
                                                                  padding:
                                                                    '0px',
                                                                }}
                                                              >
                                                                <DateConvert
                                                                  jsonDate={
                                                                    s.c_date
                                                                  }
                                                                ></DateConvert>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    )
                                                  })}
                                                </div>
                                              ) : (
                                                <div
                                                  style={{ marginTop: '32px' }}
                                                >
                                                  <p>未完成活動無法進行評論</p>
                                                </div>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </Accordion.Collapse>
                                  </Accordion>
                                </Card.Body>
                              )
                            })}
                          </div>
                        ) : (
                          <div style={{ marginTop: '32px' }}>
                            <p>無活動評論紀錄</p>
                          </div>
                        )}
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

export default withRouter(MemberMyScoreOk)
