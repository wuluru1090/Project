import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_search.scss'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Pagination from 'react-bootstrap/Pagination'

function EventPagination() {
  let active = 2
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }
  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  )
}

export default EventPagination
