import React from 'react'
import '../../style/default.scss'
import { Nav } from 'react-bootstrap'
import '../../style/member_card.scss'
import {
  MdAccountBox,
  MdCameraEnhance,
  MdShoppingCart,
  MdLoyalty,
  MdTurnedIn,
  MdImage,
  MdRestore,
  MdInsertComment,
  MdBrightnessHigh,
} from 'react-icons/md'

function MemberNavlist() {
  return (
    <>
      <div className="container ">
        <Nav defaultActiveKey="/home" className="flex-column  mem_navlist">
          <Nav.Link
            href="/member"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdAccountBox />
            <h6>會員資料</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-1"
            href="/member/Myjoinin"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdCameraEnhance />
            <h6>我的揪團</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-2"
            href="/member/MyOrder"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div>
            <MdShoppingCart />
            <h6>訂單管理</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-3"
            href="/member/MyCoupon"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdLoyalty />
            <h6>&ensp;折價券&ensp;</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-4"
            href="/member/MyCollection"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdTurnedIn />
            <h6>我的收藏</h6>
          </Nav.Link>
          <Nav.Link
            href="/member/MyPhoto"
            eventKey="link-5"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar "></div>
            <MdImage />
            <h6>我的相簿</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-6"
            href="/member/MyHistory"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdRestore />
            <h6>歷史紀錄</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-7"
            href="/member/MyScore"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdInsertComment />
            <h6>我的評價</h6>
          </Nav.Link>
          <Nav.Link
            eventKey="link-8"
            href="/member/MyManagement"
            className=" d-flex align-items-center justify-content-center mem_navlist_icon"
          >
            <div className="mem_listbar"></div> <MdBrightnessHigh />
            <h6>帳號管理</h6>
          </Nav.Link>
        </Nav>
      </div>
    </>
  )
}

export default MemberNavlist
