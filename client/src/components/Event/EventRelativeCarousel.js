import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import EventCardVerRelative from './EventCardVerRelative'
import '../../style/event/event_relative_carousel.scss'

class EventRelativeCarousel extends Component {
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
        itemsToShow={3}
        itemPadding={[10, 10, 38, 10]}
        // enableAutoPlay
        // autoPlaySpeed={2000}
      >
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
        <div className="carousel2_block">
          <EventCardVerRelative />
        </div>
      </Carousel>
    )
  }
}

export default EventRelativeCarousel
