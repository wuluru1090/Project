import React from 'react'
import '../../style/default.scss'
import '../../style/event/event_fixed_bottom.scss'

function FixedBottom() {
  return (
    <>
      <div className="event_fixed_bottom">
        <div className="d-flex justify-content-between fixed_bottom_wrapper ">
          <div className="fixed_bottom_first">
            <div>2020/12/20-2021/01/30</div>
            <div className="fixed_class_title">商品攝影課程初階班</div>
          </div>
          <div className="d-flex align-items-center fixed_bottom_second">
            <div className="fixed_info">
              <div>NT$100</div>
              <div>剩下1個名額</div>
            </div>
            <button className="btn d-flex align-items-center justify-content-center fixed_cart_button ">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default FixedBottom
