import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Searchbar from '../../components/Soya/Searchbar'
import SoYa1 from '../../components/Soya/SoYa1'
import SoYa2 from '../../components/Soya/SoYa2'
import SoYa3 from '../../components/Soya/SoYa3'
import SoYa4 from '../../components/Soya/SoYa4'
import SoYa5 from '../../components/Soya/SoYa5'

function SoYa(props) {
  const { isAuth, setIsAuth, setConditionsobad } = props
  const [dataLoading, setDataLoading] = useState(false)

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => setDataLoading(false), 200)
  }, [])

  const loading = (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '450px' }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <SoYa1 setConditionsobad={setConditionsobad} />

      <SoYa2 setConditionsobad={setConditionsobad} />
      <SoYa3 />
      <SoYa4 isAuth={isAuth} />
      <SoYa5 />
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default SoYa
