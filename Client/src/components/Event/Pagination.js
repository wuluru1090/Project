import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_search.scss'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

function Pagination() {
  return (
    <>
      <button className="prev">
        <MdKeyboardArrowLeft />
      </button>
      <button className="pages">1</button>
      <button className="pages">2</button>
      <button className="pages">3</button>
      <button className="prev">
        <MdKeyboardArrowRight />
      </button>
    </>
  )
}

export default Pagination
