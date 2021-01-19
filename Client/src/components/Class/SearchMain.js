import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/search_main.scss'
import Axios from 'axios'

// 元件
import Selection from '../Class/Selection'
import ClassResultCard from '../Class/ClassResultCard'
import Sidebar from '../Class/Sidebar'
import Pagination from '../Main/Pagination'
import Bread from '../Class/MyBreadCrumb'
import SearchTop from '../Main/ScrollTop'
import ScrollTop from '../Main/ScrollTop'

function SearchMain() {
  const [allDatas, setAllDatas] = useState([])
  const [showDatas, setShowDatas] = useState([])
  const [theme, setTheme] = useState([])
  const [order, setOrder] = useState(0)

  // 分頁
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const a = theme.join()

  useEffect(() => {
    Axios.get(`http://localhost:3001/class`)
      .then((response) => {
        // allDatas是所有檔案
        setAllDatas(response.data)
        setShowDatas(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  async function display() {
    const response = await Axios.get(
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

  //Get Current Page
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = showDatas.slice(indexOfFirstPost, indexOfLastPost)

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const ClassCard = (
    <>
      <div className="font20">搜尋結果：{showDatas.length}筆</div>
      <div className="search-result">
        {currentPosts.map((val) => {
          return (
            <ClassResultCard className="class_result_card" cardData={val} />
          )
        })}
      </div>
    </>
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
            {ClassCard}
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={showDatas.length}
              paginate={paginate}
              className="pagination"
            />
          </div>
        </div>
        <ScrollTop />
      </div>
    </>
  )
}

export default SearchMain
