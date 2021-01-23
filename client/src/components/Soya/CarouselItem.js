import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'

class CarouselItem extends Component {
  constructor() {
    super()

    this.state = {
      items: [
        { id: 1, title: '食物', imgURL: 'classcontentimg3.png' },
        { id: 2, title: '商業攝影', imgURL: 'page4img2.png' },
        { id: 3, title: '底片沖洗', imgURL: 'themepicture2.png' },
        { id: 4, title: 'vlog', imgURL: 'pag4img3.png' },
        { id: 5, title: '手機', imgURL: 'page4img2.png' },
        { id: 6, title: '人像', imgURL: 'classcontentimg3.png' },
        { id: 7, title: '全部', imgURL: 'classcontentimg3.png' },
        { id: 8, title: '風景', imgURL: 'page4img2.png' },
        { id: 9, title: '影像編輯', imgURL: 'themepicture2.png' },
        { id: 10, title: '商品', imgURL: 'classcontentimg3.png' },
        { id: 11, title: '空拍', imgURL: 'page4img2.png' },
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
