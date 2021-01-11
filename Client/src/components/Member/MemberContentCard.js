import React from 'react'
import '../../style/default.scss'
import { Card, Button } from 'react-bootstrap'
import '../../style/member_content.scss'
import { MdVisibility, MdDone } from 'react-icons/md'
function MemberContentCard() {
  return (
    <>
      <div className="container ">
        <Card className="mem_box">
          <Card.Header className="mem_title d-flex justify-content-between">
            <h5>我的揪團</h5>
            <Button onclick="" className="btn-style botton-font btn_icon">
              <MdVisibility />
              檢視
            </Button>
          </Card.Header>
          <Card.Body style={{ padding: '0  38px  43px 42px' }}>
            <div className="d-flex justify-content-end">
              <p>156464494</p>
              <Button
                type="submit"
                className="btn-style botton-font btn_icon  "
              >
                <MdDone />
                儲存
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default MemberContentCard
