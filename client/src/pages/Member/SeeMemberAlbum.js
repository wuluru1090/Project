import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Link, withRouter, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { DateConvert } from '../../components/Main/DateTimeConverter'

function SeeMemberAlbum(props) {
  const [memberevent, setMemberEvent] = useState([])
  const [events, setEvents] = useState([])
  const [att, setAtt] = useState([])
  const [photo, setPhoto] = useState([])
  const [attphoto, setAttphoto] = useState([])
  const [addphoto, setAddphoto] = useState([])
  window.scrollTo(0, 0)
  let history = useHistory()

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

  return (
    <>
      <div className="album-page">
        <div className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <a href={devUrl + `/see/${props.match.params.id}`}>
            <div>回到會員頁</div>
          </a>
        </div>

        <div className="title row">
          {att.map((m) => {
            return (
              <div className="word col-9">
                <h6>
                  <DateConvert jsonDate={m.event_start_time} />
                  &nbsp;~&nbsp;
                  <DateConvert jsonDate={m.event_end_time} />
                </h6>
                <h5>{m.event_name}</h5>
              </div>
            )
          })}
        </div>

        {/* 圖片部分開始 */}

        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            {photo.length > 0 ? (
              photo.map((p) => {
                return (
                  <div className="photo-card col-4">
                    <figure>
                      <a
                        href={
                          devUrl + `/see/${props.match.params.id}/Album/photo`
                        }
                      >
                        <img
                          src={`${devUrl}/pic/event_pic/${p.photo_name}`}
                          alt=""
                        ></img>
                      </a>
                    </figure>
                    {/* <div>
                      <p className="subtitle1">by&nbsp;&nbsp;{p.member_name}</p>
                    </div> */}
                  </div>
                )
              })
            ) : (
              <div style={{ fontSize: '18px' }}>尚無照片顯示</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(SeeMemberAlbum)
