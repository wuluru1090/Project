import React, { Component, useEffect, useState } from 'react'
import { devUrl } from '../../config'
import Carousel from 'react-elastic-carousel'
import '../../style/event/event_album_photo_carousel.scss'
import Axios from 'axios'
import { withRouter } from 'react-router'

function EventAlbumPhotoCarousel(props) {
  console.log(props)
  const photo = props.match.params.photo
  const id = props.match.params.id
  const [photoList, setPhotoList] = useState([])
  const [ind, setInd] = useState(0)

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/album/${id}`)
      .then((response) => {
        setPhotoList(response.data)
        console.log(response.data)
        let name = response.data.map((val) => val.photo_name)
        let index = name.indexOf(photo)
        setInd(index)
        console.log(name.indexOf(photo))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  // useEffect(() => {
  //   if (photoList.length > 0) {
  //     let name = photoList.map((val) => val.photo_name)
  //     setIndex(name.indexOf(photo))
  //   }
  // }, [photoList])

  return (
    <>
      <Carousel
        itemsToScroll={1}
        itemsToShow={1}
        itemPadding={[10, 10, 10, 10]}
        initialActiveIndex={ind}
      >
        {photoList.map((val) => {
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

export default withRouter(EventAlbumPhotoCarousel)
