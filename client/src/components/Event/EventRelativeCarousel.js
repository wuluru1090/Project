import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import EventCardVerRelative from './EventCardVerRelative'
import '../../style/event/event_relative_carousel.scss'
import Axios from 'axios'

class EventRelativeCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    Axios.get(
      `http://localhost:3001/api/eventsearch/relative?theme=${this.props.initValue}`
    ).then((res) => {
      // console.log(res)
      this.setState({ data: res.data })
    })
  }
  render() {
    return (
      <Carousel
        itemsToScroll={1}
        itemsToShow={3}
        itemPadding={[10, 10, 38, 10]}
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
      </Carousel>
    )
  }
}

export default EventRelativeCarousel
