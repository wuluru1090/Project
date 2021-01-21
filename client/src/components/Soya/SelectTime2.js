import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import '../../style/soya/selecttime.scss'

const SelectTime2 = (props) => {
  const [sDate, setSDate] = useState(new Date())
  const { endDate, setEndDate } = props

  return (
    <DatePicker
      selected={sDate}
      onChange={(date) => {
        setEndDate(date)
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

export default SelectTime2
