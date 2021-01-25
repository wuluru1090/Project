import '../../index.scss'
import React, { useState, useEffect } from 'react'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import CreditcardConfirmFrame from '../../components/Cart/CreditcardConfirmFrame'
import ConfirmButtonClass from '../../components/Cart/ConfirmButtonClass'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function LastConfirmationPage1() {
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
      <CreditcardConfirmFrame />
      <ConfirmButtonClass />
      <ConfirmWave />
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default LastConfirmationPage1
