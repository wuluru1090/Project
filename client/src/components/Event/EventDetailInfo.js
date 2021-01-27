import React, { useState, useEffect } from 'react'
import { DateConvert, TimeConvert } from '../Main/DateTimeConverter'
import '../../style/default.scss'
import '../../style/event/event_detail_info.scss'
import { Card } from 'react-bootstrap'
import {
  MdDone,
  MdAccessTime,
  MdExplore,
  MdCall,
  MdFlag,
  MdPerson,
} from 'react-icons/md'

function EventDetailInfo(props) {
  const [detailInfo, setDetailInfo] = useState(props.initValue)
  const contact = JSON.parse(detailInfo[0].event_host_contact)

  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }

  //單獨轉換json日期
  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')

    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1

    let yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }
  //單獨轉換json時間
  function timeConvert(jsonTime) {
    let json = String(jsonTime).split(' ')

    let time = new Date(json[0])
    let arrayTime = String(time).split(' ')
    let takeOutTime = String(arrayTime[4]).split(':')
    time = takeOutTime[0] + ':' + takeOutTime[1]

    return time
  }

  return (
    <>
      {detailInfo.length > 0 &&
        detailInfo.map((val) => {
          return (
            <Card className="event-info-card">
              <Card.Body className="card_body">
                <div className="paragraph d-flex align-items-start">
                  <MdDone />
                  <div className="info">
                    <div className="subtitle2 font-bold small-title">
                      報名截止：
                    </div>
                    <div className="subtitle2">
                      <DateConvert jsonDate={val.event_deadline_date} />
                    </div>
                    <div className="subtitle2">
                      <TimeConvert jsonTime={val.event_deadline_date} />
                    </div>
                  </div>
                </div>
                <div className="paragraph d-flex align-items-start">
                  <MdPerson />
                  <div className="info">
                    <div className="subtitle2 font-bold small-title">
                      名額上限：
                    </div>
                    <div className="subtitle2">{val.event_limit_number} 人</div>
                  </div>
                </div>
                <div className="paragraph d-flex align-items-start">
                  <MdAccessTime />
                  <div className="info">
                    <div className="subtitle2 font-bold small-title">
                      活動時間：
                    </div>
                    <div className="subtitle2">
                      {isOneDay(
                        dateConvert(val.event_start_time),
                        dateConvert(val.event_end_time)
                      )
                        ? `${dateConvert(val.event_start_time)}`
                        : `${dateConvert(val.event_start_time)} ~ ${dateConvert(
                            val.event_end_time
                          )}`}
                    </div>
                    <div className="subtitle2">
                      <TimeConvert jsonTime={val.event_start_time} />
                      &nbsp;~&nbsp;
                      <TimeConvert jsonTime={val.event_end_time} />
                    </div>
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
                    <div className="subtitle2">
                      {contact.contact_name !== ''
                        ? `聯絡人姓名 : ${contact.contact_name}`
                        : ''}
                    </div>
                    <div className="subtitle2">
                      {contact.contact_phone !== ''
                        ? `聯絡人電話 : ${contact.contact_phone}`
                        : ''}
                    </div>
                    <div className="subtitle2">
                      {contact.contact_email !== ''
                        ? `聯絡人信箱 : ${contact.contact_email}`
                        : ''}
                    </div>
                    <div className="subtitle2">
                      {contact.contact_lineId !== ''
                        ? `Line ID : ${contact.contact_lineId}`
                        : ''}
                    </div>
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
