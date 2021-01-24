import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { MdVisibility } from 'react-icons/md'
import { Button, Card } from 'react-bootstrap'
import '../../style/member/member_navbar.scss'
import { devUrl } from '../../config'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { DateConvert } from '../../components/Main/DateTimeConverter'

function MemberHistory(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/event/${props.match.params.id}`
    )
      .then((res) => {
        setMemberEvent(res.data[0])
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

  useEffect(() => {
    getEvent()
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      getAtt()
    }
  }, [events])

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
                        <h5>歷史紀錄</h5>
                      </Card.Header>
                      <Card.Body
                        style={{ padding: '0  38px  43px 42px' }}
                        className="navbarbox "
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyHistory`
                              }
                            >
                              活動
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyHistory/Class`
                              }
                            >
                              課程
                            </a>
                          </li>
                        </ul>
                        <br />

                        {att.length > 0 ? (
                          <div className="pdCard">
                            {att.map((m) => {
                              return (
                                <div className="ccard">
                                  <div className="d-flex dcard">
                                    <div>
                                      <img
                                        src={
                                          devUrl + '/pic/event/' + m.event_photo
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
                                              jsonDate={m.event_start_time}
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
                                        <div className="d-flex justify-content-end">
                                          <Button
                                            onclick=""
                                            className="btn-style botton-font btn_icon mem_card_btn"
                                          >
                                            <MdVisibility />
                                            活動檢視
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        ) : (
                          <div style={{ marginTop: '14px' }}>
                            <p>沒有歷史紀錄趕快參與揪影吧</p>
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

export default withRouter(MemberHistory)
