import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import EventCardVerRelative from './EventCardVerRelative'
import '../../style/event/event_relative_carousel.scss'
<<<<<<< HEAD
import Axios from 'axios'

class EventRelativeCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    Axios.get(
      `http://localhost:3001/api/eventsearch/relative?theme=${this.props.initValue.theme}&id=${this.props.initValue.id}`
    ).then((res) => {
      // console.log(res)
      this.setState({ data: res.data })
    })
  }
  render() {
=======

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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
    return (
      <Carousel
        itemsToScroll={1}
        itemsToShow={3}
        itemPadding={[10, 10, 38, 10]}
<<<<<<< HEAD
      >
        {this.state.data.map((val) => {
          return (
            <>
              <div className="carousel2_block">
                <EventCardVerRelative initValue={val} />
              </div>
            </>
          )
        })}
=======
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
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
      </Carousel>
    )
  }
}

export default EventRelativeCarousel
