import React from 'react'
import '../../style/default.scss'
import '../../style/class/class_card.scss'
import { Card } from 'react-bootstrap'
import { MdDone, MdAccessTime, MdExplore, MdCall } from 'react-icons/md'

function ClassCard() {
  return (
    <>
      <Card className="class-info-card">
        <Card.Body className="card_body">
          <div className="paragraph">
            <MdDone />
            <div className="info">
              <span>報名截止：</span>
              <br />
              <span>2020-12-19</span>
            </div>
          </div>
          <div className="paragraph">
            <MdAccessTime />
            <div className="info">
              <span>上課時間：</span>
              <br />
              <span>2020-12-20~2020-01-30</span>
            </div>
          </div>
          <div className="paragraph">
            <MdExplore />
            <div className="info">
              <span>上課地點：</span>
              <br />
              <span>光廊攝影棚</span>
              <br />
              <span>地址放在這裡喔</span>
            </div>
          </div>
          <div className="paragraph">
            <MdCall />
            <div className="info">
              <span>聯繫老師：</span>
              <br />
              <span>09123456789</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ClassCard
