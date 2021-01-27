import '../../index.scss'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import LineConfirmFrame from '../../components/Cart/LineConfirmFrame'
import ConfirmButton from '../../components/Cart/ConfirmButton'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function PaymentMethodPage() {
  const [dataLoading, setDataLoading] = useState(false)

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000)
  }, [])

  const loading = (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <ConfirmTopPhoto />
      <ConfirmPuzzle />
      <LineConfirmFrame />
      <ConfirmButton />
      <ConfirmWave />
    </>
  )
  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default PaymentMethodPage
