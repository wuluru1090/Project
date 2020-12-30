import React from 'react'
import '../style/default.scss'
import { Card, Nav } from 'react-bootstrap'
import '../style/member_card.scss'
import { MdStar, MdStarBorder, MdStarHalf, MdCameraAlt } from 'react-icons/md'
// var Rating = require('react-rating')
// React.createElement(Rating)
function MemberCard() {
  return (
    <>
      <div className="container ">
        <Card className="card d-flex justify-content-start ">
          <div className="d-flex justify-content-center align-items-center">
            <Card.Img
              className=" rounded-circle "
              style={{ width: '160px' }}
              variant="top"
              src="./pic/pic/member.jpg"
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

        <br />

        <Nav defaultActiveKey="/home" className="flex-column  mem_navlist">
          <Nav.Link
            href="/home"
            className=" d-flex align-items-center justify-content-around"
          >
            <div className="mem_listbar">
              <MdStarBorder />
            </div>
            <h6>會員資料</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-1">
            <h6>我的揪團</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-2">
            <h6>訂單管理</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-3">
            <h6>折價券</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-4">
            <h6>我的收藏</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-5">
            <h6>我的相簿</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-6">
            <h6>歷史紀錄</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-7">
            <h6>我的評價</h6>
          </Nav.Link>
          <Nav.Link eventKey="link-8">
            <h6>帳號管理</h6>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default MemberCard
