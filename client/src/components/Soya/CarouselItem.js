import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import { devUrl } from '../../config'

class CarouselItem extends Component {
  constructor() {
    super()

    this.state = {
      items: [
        { id: 1, title: '商業攝影', imgURL: 'classcontentimg3.png' },
        { id: 2, title: '外拍', imgURL: 'page4img2.png' },
        { id: 3, title: '風景照', imgURL: 'themepicture2.png' },
        { id: 4, title: '我難過的是', imgURL: 'pag4img3.png' },
        { id: 5, title: '野', imgURL: 'page4img2.png' },
        { id: 6, title: '商業攝影', imgURL: 'classcontentimg3.png' },
        { id: 7, title: '外拍', imgURL: 'page4img2.png' },
        { id: 8, title: '風景照', imgURL: 'themepicture2.png' },
      ],
    }
  }

  render() {
    const { items } = this.state
    return (
      <Carousel verticalMode itemsToShow={4} pagination={true}>
        {items.map((item) => (
          <div key={item.id} className="classcontentcaro">
            <img
              src={devUrl + '/pic/soya/' + item.imgURL}
              alt="classcontentcaroimg"
              className="cover-fit classcontentcaroimg"
            />
            <div className="classcontentcarotheme">{item.title}</div>
          </div>
        ))}
      </Carousel>
    )
  }
}

export default CarouselItem
