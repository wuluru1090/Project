import React from 'react'
import '../../style/default.scss'
import { Card, Breadcrumb, Button } from 'react-bootstrap'
import '../../style/member_content.scss'
function MemberContentNavbar() {
  return (
    <>
      <div className="container ">
        <Breadcrumb>
          <Breadcrumb.Item href="#">購物車</Breadcrumb.Item>
          <Breadcrumb.Item href="#">活動</Breadcrumb.Item>
          <Breadcrumb.Item active>課程</Breadcrumb.Item>
          <Breadcrumb.Item active>未付款</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  )
}

export default MemberContentNavbar
