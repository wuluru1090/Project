import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '../../style/soya/selecttime.scss'

const SelectTime = (props) => {
  const { startDate, setStartDate, inittime } = props

  const [sDate, setSDate] = useState(new Date())

  return (
    <DatePicker
      selected={sDate}
      onChange={(date) => {
        setStartDate(date)
        setSDate(date)
      }}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      className="testt form-control form-control-md"
    />
  )
}

export default SelectTime
