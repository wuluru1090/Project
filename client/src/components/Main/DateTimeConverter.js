import React from 'react'

//轉換json日期格式
function dateConvert(jsonDate) {
  let json = String(jsonDate.jsonDate).split(' ')
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
  console.log(date)
  return date
}

//單獨轉換json時間
function timeConvert(jsonTime) {
  let json = String(jsonTime.jsonTime).split(' ')

  let time = new Date(json[0])
  let arrayTime = String(time).split(' ')
  let takeOutTime = String(arrayTime[4]).split(':')
  time = takeOutTime[0] + ':' + takeOutTime[1]

  return time
}

export { dateConvert as DateConvert, timeConvert as TimeConvert }
