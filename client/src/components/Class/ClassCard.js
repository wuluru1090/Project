import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/class_card.scss'
import { Card } from 'react-bootstrap'
import Axios from 'axios'
import { MdDone, MdAccessTime, MdExplore, MdCall } from 'react-icons/md'
import { withRouter } from 'react-router-dom'

function ClassCard(props) {
  const [classCardData, setClassCardData] = useState([])

  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')
    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    var yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/${props.match.params.id}`)
      .then((response) => {
        setClassCardData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      {classCardData.map((val) => {
        return (
          <Card className="class-info-card">
            <Card.Body className="card_body">
              <div className="class_card_paragraph d-flex align-items-start">
                <MdDone />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    報名截止：
                  </div>
                  <div className="subtitle2">
                    {dateConvert(val.class_deadline)}
                  </div>
                </div>
              </div>
              <div className="class_card_paragraph d-flex align-items-start">
                <MdAccessTime />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    上課時間：
                  </div>
                  <div className="subtitle2">
                    {dateConvert(val.class_start_date)}&nbsp;~&nbsp;
                    {dateConvert(val.class_end_date)}
                  </div>
                  <div className="subtitle2">{val.class_day}</div>
                  <div className="subtitle2">{val.class_time}</div>
                </div>
              </div>
              <div className="class_card_paragraph d-flex align-items-start ">
                <MdExplore />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    上課地點：
                  </div>
                  <div className="subtitle2">{val.class_place}</div>
                  <div className="subtitle2">{val.class_address}</div>
                </div>
              </div>
              <div className="class_card_paragraph last-para d-flex align-items-start">
                <MdCall />
                <div className="info">
                  <div className="subtitle2 font-bold small-title">
                    聯繫老師：
                  </div>
                  <div className="subtitle2">0{val.class_teacher_phone}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default withRouter(ClassCard)
