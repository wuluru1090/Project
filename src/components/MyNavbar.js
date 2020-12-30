import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { MdSearch } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import {devUrl} from '../config/'
import '../style/navbar.scss'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  const [member,setMember]=useState()
  return (
    <>
      {/* .navbar-expand-{sm|md|lg|xl}決定在哪個斷點以上就出現漢堡式選單 */}
      <div className="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img className="Logo" src={devUrl+'/Pic/SVG/logo.svg'} alt="揪影" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="nav1">
            <Nav.Link className="navLink" as={NavLink} to="/home" exact={true}>
              發起揪影
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/join">
              參加攝影團
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="/class">
              精選課程
            </Nav.Link>
          </Nav>
          <Nav className="nav2">
            <Nav.Link className="icon" href="#"><MdSearch /></Nav.Link>
            <Nav.Link className="icon" href="#memes">< MdShoppingCart/></Nav.Link>
          </Nav>
          <div className="memberPhoto">
          <figure>
              <img src={devUrl+'/Pic/pic/member.jpg'} alt=""/>
          </figure>
          </div>
        {/* </Navbar.Collapse> */}
      </Navbar>
      </div>
    </>
  )
}

export default MyNavbar