import React from 'react'
import '../../style/default.scss'
import '../../style/member_navbar.scss'
function MemberContentNavbar() {
  return (
    <>
      <div className="container ">
        <ul className="row navbar ">
          <li className="row subtitle1 d-flex align-items-center">
            <li eventKey="4" className="subtitle1 mian_li">
              <a href="#">發起中</a>
            </li>
          </li>
          <li className="row subtitle1 d-flex align-items-center">
            <li eventKey="5" className="subtitle1  mian_li">
              <a href="#">已完成</a>
            </li>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MemberContentNavbar
