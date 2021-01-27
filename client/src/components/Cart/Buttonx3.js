import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style/cart/buttonx3.scss'

function Buttonx3(props) {
  return (
    <>
      <div className="d-flex buttonx3">
        <Link to="/cart" className="btn">
          活動
        </Link>
        <Link to="/cart2" className="btn">
          課程
        </Link>
        <Link to="/NextTime" className="btn">
          下次再買
        </Link>
      </div>
    </>
  )
}

export default Buttonx3
