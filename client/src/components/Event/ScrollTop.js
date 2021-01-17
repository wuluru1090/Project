import React, { useState, useEffect } from 'react'

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  // 超過螢幕範圍顯示隱藏
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 600) {
      setShowScroll(false)
    }
  }

  // 返回最上面
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 監聽
  window.addEventListener('scroll', checkScrollTop)
  console.log(showScroll)
  return (
    <>
      <button
        onClick={ScrollToTop}
        className="btn fixbutton position-fixed rounded-circle"
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        TOP
      </button>
    </>
  )
}

export default ScrollTop
