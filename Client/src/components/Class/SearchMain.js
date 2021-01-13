import React from 'react'
import ClassResultCard from '../Class/ClassResultCard'
import '../../style/default.scss'
import '../../style/class/search_main.scss'
import { devUrl } from '../../config'

// 元件
import Accordion from './Accordion'
import Selection from '../Class/Selection'
import Pagination from '../Main/Pagination'

function SearchMain() {
  return (
    <>
      <div className="class-search-wrapper">
        <div className="d-flex justify-content-between top-part">
          <div className="bread-crumb font20">麵包屑放置處</div>
          <div className="d-flex">
            <Selection />
          </div>
        </div>
        <div className="d-flex main-area">
          <div>
            <Accordion />
          </div>
          <div className="right-side">
            <div className="font20">
              搜尋結果<span>?</span>筆結果
            </div>
            <div className="search-result">
              {/* <ClassResultCard className="class_result_card" />
              <ClassResultCard />
              <ClassResultCard />
              <ClassResultCard />
              <ClassResultCard />
              <ClassResultCard /> */}
            </div>
            <div className="pagination_block">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchMain
