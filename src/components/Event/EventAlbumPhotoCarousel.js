import React, { Component } from 'react'
import { devUrl } from '../../config'
import Carousel from 'react-elastic-carousel'
import '../../style/event/event_album_photo_carousel.scss'

class EventAlbumPhotoCarousel extends Component {
  // state = {
  //   items: [
  //     { id: 1, title: 'item #1' },
  //     { id: 2, title: 'item #2' },
  //     { id: 3, title: 'item #3' },
  //     { id: 4, title: 'item #4' },
  //     { id: 5, title: 'item #5' },
  //   ],
  // }

  render() {
    // const { items } = this.state
    return (
      <Carousel
        itemsToScroll={1}
        itemsToShow={1}
        itemPadding={[10, 10, 10, 10]}
        // enableAutoPlay
        // autoPlaySpeed={2000}
      >
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/Pic/pic/event-slider1.jpg'}
            alt=""
          ></img>
        </figure>

        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/Pic/pic/event-slider3.jpg'}
            alt=""
          ></img>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/Pic/pic/event-slider4.jpg'}
            alt=""
          ></img>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/Pic/pic/event-slider1.jpg'}
            alt=""
          ></img>
        </figure>
        <figure className="box">
          <img
            className="event-photo"
            src={devUrl + '/Pic/pic/event-slider2.jpg'}
            alt=""
          ></img>
        </figure>
      </Carousel>
    )
  }
}

export default EventAlbumPhotoCarousel
