import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'

class CarouselItem extends Component {
  constructor() {
    super()

    this.state = {
      items: [
        { id: 1, title: '食物', imgURL: 'themepicture3.png' },
        { id: 2, title: '商業攝影', imgURL: 'classcontentimg4.png' },
        { id: 3, title: '底片沖洗', imgURL: '22037345467485_132.jpg' },
        { id: 4, title: 'vlog', imgURL: 'eventstartphoyo1.jpg' },
        { id: 5, title: '全部', imgURL: 'page4img2.png' },
        { id: 6, title: '人像', imgURL: 'dscf0623-edit.jpg' },
        { id: 7, title: '手機', imgURL: 'classcontentimg3.png' },
        { id: 8, title: '風景', imgURL: 'eventstartphoyo2.jpg' },
        { id: 9, title: '影像編輯', imgURL: 'themepicture2.png' },
        {
          id: 10,
          title: '商品',
          imgURL: 'ffd696a6203a7cd24d337cbc0b8b0ab2.jpg',
        },
        { id: 11, title: '空拍', imgURL: 'themepicture4.png' },
      ],
    }
  }

  render() {
    const { items } = this.state
    return (
      <Carousel
        verticalMode
        itemsToShow={4}
        pagination={true}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
      >
        {items.map((item) => (
          <div key={item.id} className="classcontentcaro">
            <Link to="/class">
              <img
                src={devUrl + '/pic/soya/' + item.imgURL}
                alt="classcontentcaroimg"
                className="cover-fit classcontentcaroimg"
              />
              <div
                className="classcontentcarotheme"
                style={{ fontSize: '16px' }}
              >
                {item.title}
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    )
  }
}

export default CarouselItem
