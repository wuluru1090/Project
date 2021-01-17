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
import Bread from '../Main/BreadCrumb'
import axios from 'axios'

function SearchMain() {
  const [allDatas, setAllDatas] = useState([])
  const [specificDatas, setSpecificDatas] = useState([])
  const [showDatas, setShowDatas] = useState([])
  const [theme, setTheme] = useState([])
  const [order, setOrder] = useState(0)
  const a = theme.join()
  console.log(a)

  // console.log(`http://localhost:3001/class&orderby=${order}`)

  useEffect(() => {
    Axios.get(`http://localhost:3001/class`)
      .then((response) => {
        // allDatas是所有檔案
        console.log(response.data)
        setAllDatas(response.data)
        setShowDatas(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  async function display() {
    const response = await axios.get(
      "http://localhost:3001/class/category?theme='" +
        a +
        "'" +
        '&orderby=' +
        order
    )
    if (response.data) {
      setShowDatas(response.data)
    } else {
    }
  }

  useEffect(() => {
    if (theme.length === 0 || theme.includes('全部課程')) {
      setShowDatas(allDatas)
      return
    }
    display()
  }, [theme, order])

  // useEffect(() => {
  //   if (theme.length === 0 || theme.includes('全部課程')) {
  //     setShowDatas(allDatas)
  //     // console.log(searchDatas)
  //   } else {
  //     // const newShowDatas = searchDatas.filter((val) => {
  //     //   return theme.includes(val.class_theme_name)
  //     // })
  //     // console.log(newShowDatas)
  //     setShowDatas(specificDatas)
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
          <div className="bread-crumb font20">
            <Bread />
          </div>
          <div className="d-flex">
            <Selection order={order} setOrder={setOrder} />
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
