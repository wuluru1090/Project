import React, { useState, useEffect } from 'react'
import 'taipei-sans-tc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

function MyNavbar(props) {
  return (
    <>
      {/* .navbar-expand-{sm|md|lg|xl}決定在哪個斷點以上就出現漢堡式選單 */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img className="Logo" src="./pic/logo.svg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav1">
            <Nav.Link className="navLink" as={NavLink} to="#" exact={true}>
              發起揪影
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="#">
              參加攝影團
            </Nav.Link>
            <Nav.Link className="navLink" as={NavLink} to="#">
              精選課程
            </Nav.Link>
          </Nav>
          <Nav className="nav2">
            <Nav.Link href="#">
              <FontAwesomeIcon className="search" icon={faSearch} size="lg" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
