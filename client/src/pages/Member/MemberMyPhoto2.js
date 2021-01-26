import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import '../../style/member/member.scss'
import '../../style/member/member_photo2.scss'
import { devUrl } from '../../config'
import { Card, Button } from 'react-bootstrap'
import { MdDelete } from 'react-icons/md'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import { DateConvert } from '../../components/Main/DateTimeConverter'
import Swal from 'sweetalert2'

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
        setAtt(res.data.slice(0, 1))
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
    console.log(event_id)
    console.log(addphoto)

    Axios.post('http://localhost:3001/member/photo', {
      event_id: event_id,
      member_id: `${props.match.params.id}`,
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
  function upUp() {
    setTimeout(function () {
      document.getElementById('photo-button').click()
      setTimeout(window.location.reload(), 500)
    }, 500)
  }

  var updateList = []

  const [status, setStatus] = useState('unupload')
  //上傳函式
  const add2Update = (photo_id) => {
    console.log(photo_id)
    if (!updateList.includes(photo_id)) {
      updateList = [...updateList, photo_id]
      // console.log(updateList)
    } else {
      const newList = updateList.filter((v) => v !== photo_id)
      updateList = newList
    }
    console.log(updateList)
  }

  // 目前無法即使顯示即刪除多個
  const delphoto = (updateList) => {
    console.log(updateList)
    Axios.put('http://localhost:3001/member/update/photo', {
      photo_id: updateList,
    })
    console.log(updateList)
    Swal.fire('確定刪除照片', '', 'success').then((result) => {
      if (result.isConfirmed) {
      }
      setTimeout(window.location.reload(), 500)
    })
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
                            <div className="row">
                              <Link
                                to={`/member/${props.match.params.id}/MyPhoto`}
                              >
                                <h5>我的相簿</h5>
                              </Link>
                              <h5> /{m.event_name}</h5>
                            </div>
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
                            <div>
                              {photo.length > 0 ? (
                                <div className=" d-flex flex-wrap">
                                  {photo.map((p) => {
                                    return (
                                      <div
                                        className="myphoto"
                                        style={{ marginBottom: '32px' }}
                                      >
                                        <div className=" d-flex justify-content-end">
                                          <input
                                            type="checkbox"
                                            name="checkbox"
                                            onClick={(e) => {
                                              add2Update(e.target.value)
                                            }}
                                            value={p.photo_id}
                                            id="img"
                                          />
                                        </div>

                                        <img
                                          src={`${devUrl}/pic/event_pic/${p.photo_name}`}
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
                            // onClick={add2Update}
                            onClick={(e) => {
                              e.preventDefault()
                              delphoto(updateList)
                            }}
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
