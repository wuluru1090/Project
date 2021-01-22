import '../../index.scss'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import { MdVisibility, MdClear } from 'react-icons/md'
import { Card, Button } from 'react-bootstrap'
import { devUrl } from '../../config'
import { DateConvert } from '../../components/Main/DateTimeConverter'
import { withRouter } from 'react-router-dom'

function MemberMyCollection(props) {
  const [memlikeevent, setMemberlikeEvent] = useState([])

  useEffect(() => {
    Axios.get(
      `http://localhost:3001/member/get/collection/event/${props.match.params.id}`
    )
      .then((res) => {
        setMemberlikeEvent(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const deletelike = (eventId) => {
    Axios.delete(
      `http://localhost:3001/api/delete/eventlike?eventId=${eventId}&member=${props.match.params.id}`
    )
    alert('取消收藏')
    console.log(eventId)
  }

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
                        <h5>我的收藏</h5>
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
                                `/member/${props.match.params.id}/MyCollection`
                              }
                            >
                              活動
                            </a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a
                              href={
                                devUrl +
                                `/member/${props.match.params.id}/MyCollection/Class`
                              }
                            >
                              課程
                            </a>
                          </li>
                        </ul>
                        <br />
                        {memlikeevent.map((val) => {
                          return (
                            <div className="pdCard ">
                              <div className="ccard position-relative">
                                <div className="d-flex dcard">
                                  <div>
                                    <img
                                      src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                      className="card-img-top photo"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="card-body ">
                                      <h5 className="card-title">
                                        {val.event_name}
                                      </h5>

                                      <div className="d-flex bbb">
                                        <img
                                          className="icon"
                                          src="/pic/svg/photo-camera.svg"
                                          alt=""
                                        />
                                        <p className="caption">
                                          {val.event_location}
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
                                            jsonDate={val.event_start_time}
                                          />
                                          &nbsp;~&nbsp;
                                          <DateConvert
                                            jsonDate={val.event_end_time}
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
                                          {val.event_address}
                                        </p>
                                      </div>
                                      <div
                                        className="position-absolute"
                                        style={{
                                          bottom: '8px',
                                          right: '10px',
                                        }}
                                      >
                                        <div className="d-flex justify-content-end">
                                          <Button
                                            onClick={() => {
                                              deletelike(val.event_id)
                                            }}
                                            className="btn-style botton-font btn_icon mem_card_btn d-flex align-items-center "
                                            style={{
                                              backgroundColor: '#df3d00',
                                              marginBottom: '8px',
                                            }}
                                          >
                                            <MdClear />
                                            取消收藏
                                          </Button>
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
                              </div>
                            </div>
                          )
                        })}
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

export default withRouter(MemberMyCollection)
