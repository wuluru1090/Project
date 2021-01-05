import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SortingOptions = [
  {
    key: 'New',
    text: '最新上架優先',
    value: 'New',
  },
  {
    key: 'Low2High',
    text: '價格由低至高',
    value: 'Low2High',
  },
  {
    key: 'High2Low',
    text: '價格由高至低',
    value: 'High2Low',
  },
]

const Dropdown1 = () => (
  <Dropdown placeholder="排序方式" fluid selection options={SortingOptions} />
)

export default Dropdown1
