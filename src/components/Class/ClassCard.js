import React from 'react'
import '../../style/default.scss'
import '../../style/class/class_card.scss'
import { Card } from 'react-bootstrap'
import { MdDone, MdAccessTime, MdExplore, MdCall } from 'react-icons/md'

function ClassCard() {
  const class_info = {
    deadline: '2020-12-19',
    class_date: {
      date: '2020-12-20 ~ 2021-01-30',
      week: '每周一、四',
      time: '08:00-21:00',
    },
    class_location: {
      location: '光廊攝影棚',
      address: '605嘉義縣阿里山鄉2鄰17號',
    },
    teacher_contact: 'line ID：12456892',
  }
  return (
    <>
      <Card className="class-info-card">
        <Card.Body className="card_body">
          <div className="class_card_paragraph d-flex align-items-start">
            <MdDone />
            <div className="info">
              <div className="subtitle2 font-bold small-title">報名截止：</div>
              <div className="subtitle2">{class_info.deadline}</div>
            </div>
          </div>
          <div className="class_card_paragraph d-flex align-items-start">
            <MdAccessTime />
            <div className="info">
              <div className="subtitle2 font-bold small-title">上課時間：</div>
              <div className="subtitle2">{class_info.class_date.date}</div>
              <div className="subtitle2">{class_info.class_date.week}</div>
              <div className="subtitle2">{class_info.class_date.time}</div>
            </div>
          </div>
          <div className="class_card_paragraph d-flex align-items-start ">
            <MdExplore />
            <div className="info">
              <div className="subtitle2 font-bold small-title">上課地點：</div>
              <div className="subtitle2">
                {class_info.class_location.location}
              </div>
              <div className="subtitle2">
                {class_info.class_location.address}
              </div>
            </div>
          </div>
          <div className="class_card_paragraph last-para d-flex align-items-start">
            <MdCall />
            <div className="info">
              <div className="subtitle2 font-bold small-title">聯繫老師：</div>
              <div className="subtitle2">{class_info.teacher_contact}</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ClassCard
