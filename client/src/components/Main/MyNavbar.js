import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import { MdShoppingCart } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/navbar.scss'

// 有改一點樣式
import '../../style/soya/login2.scss'
import Axios from 'axios'
import Logout from '../Soya/Logout'
import { Modal, Button } from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  withRouter,
} from 'react-router-dom'

function MyNavbar(props) {
  // 登入狀態
  const { isAuth, setIsAuth } = props

  // 拿到會員id
  const [member, setMember] = useState()
  const [memberidd, setMemberidd] = useState('')
  const [memberInfo, setMemberInfo] = useState()

  //保護頁面
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  Axios.defaults.withCredentials = true

  // 查看登入狀態+設置session 拿到id值
  useEffect(() => {
    Axios.get('http://localhost:3001/login')
      .then((response) => {
        // console.log(response)
        if (response.data.loggedIn === true) {
          // console.log(response.data)
          setMemberidd(response.data.user[0].member_id)
          setIsAuth(true)
          // console.log(memberidd)
        }
      })
      .then(() => {
        window.sessionStorage.setItem('useriddd', `${memberidd}`)
        const loginid = window.sessionStorage.getItem('useriddd')
        console.log(loginid)
      })
  }, [isAuth])

  useEffect(() => {
    if (memberidd !== '') {
      Axios.get(`http://localhost:3001/member/get/${memberidd}`).then(
        (response) => {
          setMemberInfo(response.data[0])
          console.log(response.data)
        }
      )
    }
  }, [memberidd])

  return (
    <>
      {/* .navbar-expand-{sm|md|lg|xl}決定在哪個斷點以上就出現漢堡式選單 */}
      <div className="navbar1">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          fixed="top"
          style={{ padding: '0', height: '80px' }}
        >
          <Navbar.Brand as={NavLink} to="/" exact>
            <img
              className="Logo"
              src={devUrl + '/Pic/SVG/logo.svg'}
              alt="揪影"
            />
          </Navbar.Brand>
          <Nav className="nav1">
            {props.isAuth ? (
              <Nav.Link className="navLink" as={NavLink} to="/eventstart">
                發起揪影
              </Nav.Link>
            ) : (
              <button
                className="navLink btn btnstartjoinnn"
                as={NavLink}
                onClick={handleShow}
              >
                發起揪影
              </button>
            )}
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>尚未登入會員</Modal.Title>
              </Modal.Header>
              <Modal.Body>您必須先登入會員，才能發起活動</Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ color: 'white' }}
                  variant="secondary"
                  onClick={handleClose}
                >
                  關閉
                </Button>
                <Link to="/login">
                  <Button variant="primary" onClick={handleClose}>
                    登入會員
                  </Button>
                </Link>
              </Modal.Footer>
            </Modal>
            <Nav.Link className="navLink" as={NavLink} to="/event" exact>
              參加攝影團
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/class">
              精選課程
            </Nav.Link>
          </Nav>
          <Nav className="nav2">
            <Nav.Link className="icon" href="cart">
              <MdShoppingCart size={20} />
            </Nav.Link>
          </Nav>

          {isAuth ? (
            <div className="position-relative" style={{ marginRight: '75px' }}>
              <NavDropdown
                title=""
                id="basic-nav-dropdown"
                className="text-align-center"
              >
                <NavDropdown.Item
                  style={{
                    color: '#104b6d',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                  }}
                >
                  嗨!&nbsp;&nbsp;{memberInfo && memberInfo.member_name}
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`/member/${memberidd}`}
                  style={{ paddingTop: '12px' }}
                >
                  會員中心
                </NavDropdown.Item>
                <NavDropdown.Item href={`/member/${memberidd}/Myjoinin`}>
                  我的揪團
                </NavDropdown.Item>
                <NavDropdown.Item href={`/member/${memberidd}/MyCollection`}>
                  我的收藏
                </NavDropdown.Item>
                <NavDropdown.Item
                  href={`/member/${memberidd}/MyPhoto`}
                  style={{ paddingBottom: '12px' }}
                >
                  我的相簿
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{
                    color: '#104b6d',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(0,0,0,0.2)',
                  }}
                >
                  <Logout isAuth={isAuth} setIsAuth={setIsAuth} />
                </NavDropdown.Item>
              </NavDropdown>
              <figure className="memberPhoto position-absolute">
                {memberInfo && (
                  <img
                    src={`${devUrl}/Pic/mem_img/${memberInfo.member_img}`}
                    alt=""
                  />
                )}
                {/* <img src={devUrl + '/Pic/pic/member.jpg'} alt="" /> */}
              </figure>
            </div>
          ) : (
            <button
              className="btn loginoutbtn"
              onClick={(e) => {
                props.history.push('/login')
              }}
            >
              登入
            </button>
          )}

          {/* </Navbar.Collapse> */}
        </Navbar>
      </div>
    </>
  )
}

export default withRouter(MyNavbar)
