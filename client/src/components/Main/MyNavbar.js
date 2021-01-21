import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import { MdShoppingCart } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/navbar.scss'
import '../../style/soya/login.scss'
import Axios from 'axios'
import Logout from '../Soya/Logout'

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
  const { isAuth, setIsAuth } = props
  const [member, setMember] = useState()

  const [memberidd, setMemberidd] = useState('')

  Axios.defaults.withCredentials = true

  // 查看登入狀態+設置session 拿到id值
  useEffect(() => {
    Axios.get('http://localhost:3001/login')
      .then((response) => {
        console.log(response)
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
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="nav1">
            <Nav.Link className="navLink" as={NavLink} to="/begin">
              發起揪影
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/event-search">
              參加攝影團
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/class">
              精選課程
            </Nav.Link>
          </Nav>
          <Nav className="nav2">
            <Nav.Link className="icon" href="#">
              <MdSearch />
            </Nav.Link>
            <Nav.Link className="icon" href="cart">
              <MdShoppingCart />
            </Nav.Link>
          </Nav>
          <div className="memberPhoto">
            <figure>
              {props.isAuth ? (
                <img src={devUrl + '/Pic/pic/member.jpg'} alt="" />
              ) : (
                <img src={devUrl + '/Pic/pic/filter_vintage-24px.png'} alt="" />
              )}
            </figure>
          </div>

          {isAuth ? (
            <Logout isAuth={isAuth} setIsAuth={setIsAuth} />
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
