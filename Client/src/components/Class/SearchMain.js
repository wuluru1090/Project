import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/search_main.scss'
import { devUrl } from '../../config'
import Axios from 'axios'

// 元件
import Accordion from './Accordion'
import Selection from '../Class/Selection'
import Pagination from '../Main/Pagination'
import ClassResultCard from '../Class/ClassResultCard'

function SearchMain() {
  const [searchDatas, setSearchDatas] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/class`)
      .then((response) => {
        setSearchDatas(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const ClassCard = (
    <div className="search-result">
      {searchDatas.map((val) => {
        return <ClassResultCard className="class_result_card" cardData={val} />
      })}
    </div>
  )

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
            {ClassCard}
            {/* <ClassResultCard /> */}
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
