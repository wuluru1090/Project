import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member.scss'
import '../../style/member/member_photo2.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { DateConvert } from '../../components/Main/DateTimeConverter'

function MemberMyPhoto2(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [photo, setPhoto] = useState([])
  const [attphoto, setAttphoto] = useState([])
  const [addphoto, setAddphoto] = useState([])
  const [photo_id, setPhotoid] = useState([])

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

  const postphoto = (event_id) => {
    // console.log(event_id)
    console.log(addphoto)

    Axios.post('http://localhost:3001/member/photo', {
      event_id: event_id,
      member_id: `${props.match.params.id}`,
      // photo_show: coupon.coupon_name,
      photo_name: addphoto,
    }).then((res) => {
      setAttphoto([
        ...addphoto,
        {
          event_id: event_id,
          member_id: `${props.match.params.id}`,
          photo_name: addphoto,
        },
      ])
    })
  }

  //目前無法即使顯示即刪除
  const delphoto = () => {
    console.log(photo_id)

    Axios.put('http://localhost:3001/member/update/photo', {
      photo_id: photo_id,
      valid: 0,
    }).then((res) => {})
  }

  function upUp() {
    setTimeout(function () {
      document.getElementById('photo-button').click()
      // setTimeout(window.location.reload(), 500)
    }, 500)
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
                  <div className="container ">
                    <Card className="mem_box">
                      {att.map((m) => {
                        return (
                          <Card.Header className="mem_title d-flex justify-content-between">
                            <h5>我的相簿/{m.event_name}</h5>
                            <form>
                              <input
                                accept="image/*"
                                className=""
                                style={{ display: 'none' }}
                                id="postphoto-button-file"
                                type="file"
                                name="files"
                                onChange={(e) => {
                                  setAddphoto(e.target.value.split('\\').pop())
                                  upUp(m.event_id)
                                }}
                              />
                              <label htmlFor="postphoto-button-file">
                                <img
                                  className="addphoto2"
                                  src={devUrl + '/pic/SVG/photoadd2.svg'}
                                  alt="add2"
                                  style={{ cursor: ' pointer ' }}
                                ></img>
                              </label>
                            </form>
                            <input
                              accept="image/*"
                              className=""
                              style={{ display: 'none' }}
                              id="photo-button"
                              type="button"
                              value="上傳"
                              onClick={() => {
                                postphoto(m.event_id)
                              }}
                            />
                          </Card.Header>
                        )
                      })}

                      <Card.Body style={{ padding: '14px  42px  14px 42px' }}>
                        <div className="photo_album3 d-flex ">
                          <div className="img_box3  d-flex justify-content-between">
                            <div className=" d-flex flex-wrap">
                              {photo.length > 0 ? (
                                <div>
                                  {photo.map((p) => {
                                    return (
                                      <div className="myphoto">
                                        <div className=" d-flex justify-content-end">
                                          <input
                                            type="checkbox"
                                            onChange={(e) => {
                                              setPhotoid(e.target.value)
                                            }}
                                            value={p.photo_id}
                                          />
                                        </div>

                                        <img
                                          // src={
                                          //   devUrl +
                                          //   `pic/event_photo/${p.photo_name}`
                                          // }
                                          src={
                                            devUrl + '/pic/pic/桌布-德國.jpg'
                                          }
                                          alt="photo1"
                                        ></img>

                                        <figcaption className="d-flex justify-content-center">
                                          {/* <h6>{p.photo_name}</h6> */}
                                        </figcaption>
                                        <p className="d-flex justify-content-end">
                                          {/* <DateConvert jsonDate={p.c_date} /> */}
                                        </p>
                                      </div>
                                    )
                                  })}
                                </div>
                              ) : (
                                <div style={{ margin: '32px' }}>
                                  <p>尚未上傳照片趕快上傳吧</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-end">
                          <Button
                            onClick={delphoto}
                            className="btn-style $botton-font btn_icon mem_card_btn"
                          >
                            <MdDelete />
                            刪除照片
                          </Button>
                        </div>
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

export default withRouter(MemberMyPhoto2)
