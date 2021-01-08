import React from 'react'
import '../../style/default.scss'
import UploadButton from './Uploadbutton'
import { Card } from 'react-bootstrap'
import '../../style/member/member_card.scss'
import { MdCameraAlt } from 'react-icons/md'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'
import RatingReadOnly from '../../components/Member/rating_readonly'

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
              <input
                accept="image/*"
                className=""
                style={{ display: 'none' }}
                id="iconmemphoto-button-file"
                type="file"
              />
              <label htmlFor="iconmemphoto-button-file">
                <MdCameraAlt
                  aria-label="upload picture"
                  component="span"
                  className=" position-absolute  translate-middle "
                  style={{
                    width: '42px',
                    height: '42px',
                    top: '40px',
                    right: '-5px',
                    color: '#104b6d',
                    cursor: ' pointer ',
                  }}
                />
              </label>
            </div>
          </div>

          <Card.Body>
            <Card.Text className="d-flex justify-content-center  align-items-center">
              <RatingReadOnly />
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
