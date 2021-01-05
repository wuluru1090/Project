import React from 'react'
import '../../style/default.scss'
import { Card } from 'react-bootstrap'
import '../../style/member/member_card.scss'
import { MdStar, MdStarBorder, MdStarHalf, MdCameraAlt } from 'react-icons/md'
import { devUrl } from '../../config'

// var Rating = require('react-rating')
// React.createElement(Rating)
function MemberCard() {
  return (
    <>
      <div className="container ">
        <Card className="mem_card d-flex justify-content-start ">
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img
              className=" rounded-circle "
              style={{ width: '160px' }}
              variant="top"
              src={devUrl + '/pic/pic/member.jpg'}
              alt=""
            />
            <div class="position-relative">
              <MdCameraAlt
                className=" position-absolute  translate-middle "
                style={{
                  width: '42px',
                  height: '42px',
                  top: '40px',
                  right: '-5px',
                  color: '#104b6d',
                }}
              />
            </div>
          </div>

          <Card.Body>
            <Card.Text className="d-flex justify-content-center  ">
              <p className=" d-flex align-items-center">2.5</p>

              <div className="star">
                <MdStar />
                <MdStar />
                <MdStarHalf />
                <MdStarBorder />
                <MdStarBorder />
              </div>
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">5.0 我是評分系統</small>
          </Card.Footer> */}
        </Card>
      </div>
    </>
  )
}

export default MemberCard
