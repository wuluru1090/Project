import React from 'react'
import '../style/default.scss'
import '../style/class_card.scss'
import { Card } from 'react-bootstrap'

function ClassCard() {
  return (
    <>
      <Card className="card1">
        <Card.Body className="card_body">
          <div className="paragraph">
            <span>報名截止：</span>
            <br />
            <span>2020-12-19</span>
          </div>
          <div className="paragraph">
            <span>上課時間：</span>
            <br />
            <span>2020-12-20~2020-01-30</span>
          </div>
          <div className="paragraph">
            <span>上課地點：</span>
            <br />
            <span>光廊攝影棚</span>
            <br />
            <span>地址放在這裡喔</span>
          </div>
          <div className="paragraph">
            <span>聯繫老師：</span>
            <br />
            <span>09123456789</span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ClassCard
