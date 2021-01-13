import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_fixed_bottom.scss'
import { DateConvert, TimeConvert } from '../Main/DateTimeConverter'

function EventFixedBottom(value) {
  const bottomData = value.value

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
      <div className="fixed_bottom">
        <div className="d-flex justify-content-between fixed_bottom_wrapper ">
          <div className="fixed_bottom_first">
            <div>
              {isOneDay(
                dateConvert(bottomData.event_start_time),
                dateConvert(bottomData.event_end_time)
              )
                ? `${dateConvert(bottomData.event_start_time)} ${timeConvert(
                    bottomData.event_start_time
                  )} ~ ${timeConvert(bottomData.event_end_time)}
                          `
                : `${dateConvert(bottomData.event_start_time)} 
                      ${timeConvert(bottomData.event_start_time)} ~ 
                      ${dateConvert(bottomData.event_end_time)} 
                      ${timeConvert(bottomData.event_end_time)}`}
            </div>
            <div className="fixed_class_title">{bottomData.event_name}</div>
          </div>
          <div className="d-flex align-items-center fixed_bottom_second">
            <div className="fixed_info">
              <div>NT${bottomData.event_fees}</div>
              <div>
                剩下
                {parseInt(bottomData.event_valid_attendents) -
                  JSON.parse(bottomData.event_attendents).length}
                個名額
              </div>
            </div>
            <button className="btn d-flex align-items-center justify-content-center fixed_cart_button ">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventFixedBottom
