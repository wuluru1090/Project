import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import { Nav } from 'react-bootstrap'
import '../../style/member/member_card.scss'
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
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import { devUrl } from '../../config'

function MemberNavlist(props) {
  const [member, setMember] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <>
      {member.map((val) => {
        return (
          <div className="container ">
            <Nav defaultActiveKey="/home" className="flex-column  mem_navlist">
              <Nav.Link
                href={devUrl + `/member/${props.match.params.id}`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdAccountBox />
                <h6>會員資料</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                href={devUrl + `/member/${props.match.params.id}/Myjoinin`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdCameraEnhance />
                <h6>我的揪團</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                href={devUrl + `/member/${props.match.params.id}/MyOrder`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div>
                <MdShoppingCart />
                <h6>訂單管理</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-3"
                href={devUrl + `/member/${props.match.params.id}/MyCoupon`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdLoyalty />
                <h6>&ensp;折價券&ensp;</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-4"
                href={devUrl + `/member/${props.match.params.id}/MyCollection`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdTurnedIn />
                <h6>我的收藏</h6>
              </Nav.Link>
              <Nav.Link
                href={devUrl + `/member/${props.match.params.id}/MyPhoto`}
                eventKey="link-5"
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar "></div>
                <MdImage />
                <h6>我的相簿</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-6"
                href={devUrl + `/member/${props.match.params.id}/MyHistory`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdRestore />
                <h6>歷史紀錄</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-7"
                href={devUrl + `/member/${props.match.params.id}/MyScore`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdInsertComment />
                <h6>我的評價</h6>
              </Nav.Link>
              <Nav.Link
                eventKey="link-8"
                href={devUrl + `/member/${props.match.params.id}/MyManagement`}
                className=" d-flex align-items-center justify-content-center mem_navlist_icon"
              >
                <div className="mem_listbar"></div> <MdBrightnessHigh />
                <h6>帳號管理</h6>
              </Nav.Link>
            </Nav>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(MemberNavlist)
