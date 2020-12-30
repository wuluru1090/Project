import React from 'react'
import '../style/default.scss'
import '../style/main_class.scss'

function ClassMain() {
  return (
    <div className="page-head">
      <div>
        <h6>日期</h6>
        <h4>活動標題</h4>
      </div>
      <div className="memberPhoto">
        <figure>
          <img src="./Pic/pic/member.jpg" alt="" />
        </figure>
      </div>
    </div>
  )
}

export default ClassMain
