import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_detail_info.scss'
import { Card } from 'react-bootstrap'
import { MdDone, MdAccessTime, MdExplore, MdCall, MdFlag } from 'react-icons/md'

function EventDetailInfo(props) {
  // console.log(props)
  const [detailInfo, setdetailIfo] = useState(props.initValue)
  console.log(detailInfo)
  return (
    <>
      {detailInfo.map((val) => {
        return (
          <Card className="event-info-card">
            <Card.Body className="card_body">
              <div className="paragraph d-flex align-items-start">
                <MdDone />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    報名截止：
                  </div>
                  <div className="subtitle2">2020-12-19</div>
                  <div className="subtitle2">16:00</div>
                </div>
              </div>
              <div className="paragraph d-flex align-items-start">
                <MdAccessTime />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    活動時間：
                  </div>
                  <div className="subtitle2">2020-03-15(一)~2020-03-17(三)</div>
                  <div className="subtitle2">08:00-21:00</div>
                </div>
              </div>
              <div className="paragraph d-flex align-items-start ">
                <MdExplore />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    集合地點：
                  </div>
                  <div className="subtitle2">{val.event_meeting_point}</div>
                  <div className="subtitle2">{val.event_meeting_address}</div>
                </div>
              </div>
              <div className="paragraph d-flex align-items-start">
                <MdFlag />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    活動地點：
                  </div>
                  <div className="subtitle2">{val.event_location}</div>
                  <div className="subtitle2">{val.event_address}</div>
                </div>
              </div>
              <div className="paragraph last-para d-flex align-items-start">
                <MdCall />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    聯繫主揪：
                  </div>
                  <div className="subtitle2">line ID：12456892</div>
                  <div className="subtitle2"></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default EventDetailInfo
