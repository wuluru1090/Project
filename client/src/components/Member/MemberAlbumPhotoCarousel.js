import React, { useEffect, useState } from 'react'
import { devUrl } from '../../config'
import Carousel from 'react-elastic-carousel'
import '../../style/event/event_album_photo_carousel.scss'
import Axios from 'axios'
import { withRouter, useHistory } from 'react-router'

function MemberAlbumPhotoCarousel(props) {
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
      <Carousel
        itemsToScroll={1}
        itemsToShow={1}
        itemPadding={[10, 10, 10, 10]}
        // initialActiveIndex={ind}
      >
        {photo.map((val) => {
          return (
            <>
              <figure className="box">
                <img
                  className="event-photo"
                  src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                  alt=""
                ></img>
              </figure>
            </>
          )
        })}
      </Carousel>
    </>
  )
}

export default withRouter(MemberAlbumPhotoCarousel)
