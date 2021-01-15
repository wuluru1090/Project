import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/search_main.scss'
import { devUrl } from '../../config'
import Axios from 'axios'

// 元件
// import Accordion from './Accordion'
import Selection from '../Class/Selection'
import Pagination from '../Main/Pagination'
import ClassResultCard from '../Class/ClassResultCard'
import Sidebar from '../Class/Sidebar'

function SearchMain() {
  const [searchDatas, setSearchDatas] = useState([])
  const [showDatas, setShowDatas] = useState([])
  const [theme, setTheme] = useState([])
  console.log(theme)

  useEffect(() => {
    Axios.get(`http://localhost:3001/class`)
      .then((response) => {
        // console.log(response.data.length)
        // setShowDatas(response.data)
        setSearchDatas(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/category?id=${theme.join(',')}`)
      .then((response) => {
        setShowDatas(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  // useEffect(() => {
  //   if (theme.length === 0) {
  //     setShowDatas(searchDatas)
  //   } else {
  //     const newShowDatas = searchDatas.filter((val) => {
  //       return theme.includes(val.class_theme_name)
  //     })
  //     // console.log(newShowDatas)
  //     setShowDatas(newShowDatas)
  //   }
  // }, [theme])

  const ClassCard = (
    <div className="search-result">
      {showDatas.map((val) => {
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
          <div className="left-side">
            <Sidebar setTheme={setTheme} />
          </div>
          <div className="right-side">
            <div className="font20">搜尋結果：{showDatas.length}筆</div>
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
