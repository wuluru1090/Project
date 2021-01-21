import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { devUrl } from '../../config'

import { NavLink } from 'react-router-dom'

function Buttonx3(props) {
  return (
    <>
      <div className="d-flex">
        <Link to="/" className="btn d-flex confirmbutton2">
          活動
        </Link>
        <Link to="/FukuanClassPage" className="btn d-flex confirmbutton2">
          課程
        </Link>
        <Link to="/NextTimePage" className="btn d-flex confirmbutton2">
          下次再買
        </Link>
      </div>
    </>
  )
}

export default Buttonx3
