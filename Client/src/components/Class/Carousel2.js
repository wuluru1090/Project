import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../Class/ClassCard2'
import '../../style/class/Carousel2.scss'

class Carousel2 extends Component {
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
      <Carousel itemsToScroll={1} itemsToShow={3} itemPadding={[50, 0, 0, 0]}>
        <div className="carousel2_block">
          <Card />
        </div>
        <div className="carousel2_block">
          <Card />
        </div>
        <div className="carousel2_block">
          <Card />
        </div>
        <div className="carousel2_block">
          <Card />
        </div>
        <div className="carousel2_block">
          <Card />
        </div>
        <div className="carousel2_block">
          <Card />
        </div>
      </Carousel>
    )
  }
}

export default Carousel2
