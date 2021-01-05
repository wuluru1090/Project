import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_detail_info.scss'
import { Card } from 'react-bootstrap'
import { MdDone, MdAccessTime, MdExplore, MdCall, MdFlag } from 'react-icons/md'

function EventDetailInfo() {
  return (
    <>
      <Card className="event-info-card">
        <Card.Body className="card_body">
          <div className="paragraph d-flex align-items-start">
            <MdDone />
            <div className="info">
              <div className="subtitle2 font-bold">報名截止：</div>
              <div className="subtitle2">2020-12-19</div>
              <div>16:00</div>
            </div>
          </div>
          <div className="paragraph d-flex align-items-start">
            <MdAccessTime />
            <div className="info">
              <div className="subtitle2 font-bold">活動時間：</div>
              <div className="subtitle2">2020-03-15(一)~2020-03-17(三)</div>
              <div>08:00-21:00</div>
            </div>
          </div>
          <div className="paragraph d-flex align-items-start">
            <MdExplore />
            <div className="info">
              <div className="subtitle2 font-bold">集合地點：</div>
              <div className="subtitle2">阿里山火車站</div>
              <div>605嘉義縣阿里山鄉2鄰17號</div>
            </div>
          </div>
          <div className="paragraph d-flex align-items-start">
            <MdFlag />
            <div className="info">
              <div className="subtitle2 font-bold">活動地點：</div>
              <div className="subtitle2">阿里山森林遊樂園區</div>
              <div>605嘉義縣阿里山鄉2鄰17號</div>
            </div>
          </div>
          <div className="paragraph last-para d-flex align-items-start">
            <MdCall />
            <div className="info">
              <div className="subtitle2 font-bold">聯繫主揪：</div>
              <div className="subtitle2">line ID：12456892</div>
              <div className="subtitle2"></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default EventDetailInfo
