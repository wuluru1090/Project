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

function MemberHistoryClass(props) {
  const [memberclass, setMemberClass] = useState([])
  const [classes, setClasses] = useState([])
  const [att, setAtt] = useState([])

  const getEvent = async () => {
    await Axios.get(
      `http://localhost:3001/member/get/history/class/${props.match.params.id}`
    )
      .then((res) => {
        setMemberClass(res.data[0])
        if (res.data) {
          console.log(JSON.parse(res.data[0].class_id))
          setClasses(JSON.parse(res.data[0].class_id))
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
      `http://localhost:3001/member/history/class/att?id=${classes.join(',')}`
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
    if (classes.length > 0) {
      getAtt()
    }
  }, [classes])

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
                            <a href="#">活動</a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a href="#">課程</a>
                          </li>
                        </ul>
                        <br />

                        {att.map((m) => {
                          return (
                            <div className="pdCard">
                              <div className="ccard">
                                <div className="d-flex dcard">
                                  <div>
                                    <img
                                      src={devUrl + '/pic/pic/桌布-德國.jpg'}
                                      className="card-img-top photo"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="">
                                    <div className="card-body">
                                      <h5 className="card-title">
                                        {m.class_name}
                                      </h5>

                                      <div className="d-flex bbb">
                                        <img
                                          className="icon"
                                          src="/pic/svg/photo-camera.svg"
                                          alt=""
                                        />
                                        <p className="caption">
                                          {m.class_place}
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
                                            jsonDate={m.class_start_date}
                                          />
                                          &nbsp;~&nbsp;
                                          <DateConvert
                                            jsonDate={m.class_end_date}
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
                                          {m.class_address}
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

export default withRouter(MemberHistoryClass)
