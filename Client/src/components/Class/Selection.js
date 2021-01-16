import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const SortingOptions = [
  {
    key: 'New',
    text: '最新上架優先',
    value: '1',
  },
  {
    key: 'Low2High',
    text: '價格由低至高',
    value: '2',
  },
  {
    key: 'High2Low',
    text: '價格由高至低',
    value: '3',
  },
]
const dropdownStyle = {
  fontSize: '20px',
}

const Dropdown1 = (props) => {
  const [value, setValue] = useState()

  return (
    <Dropdown
      placeholder="排序方式"
      fluid
      selection
      onChange={(e, { value }) => {
        console.log(value)
        setValue(value)
        props.setOrder(value)
      }}
      value={value}
      options={SortingOptions}
      style={dropdownStyle}
    />
  )
}

export default Dropdown1
