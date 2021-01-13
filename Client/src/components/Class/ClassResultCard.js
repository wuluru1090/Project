import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/ClassResultCard.scss'
import { devUrl } from '../../config'
import { DateConvert } from '../Main/DateTimeConverter'

function ClassResultCard(props) {
  // console.log(props)
  const [isActive, setIsActive] = useState(false)
  const class_info = props.cardData

  return (
    <>
      <div className="class_result_card d-flex">
        {/* <div className="d-flex dcard"> */}
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag un-pushed"
          alt="..."
          onClick={() => setIsActive(true)}
          style={isActive ? { display: 'none' } : { display: 'inline' }}
          id="inactive"
        />
        <img
          src={devUrl + '/pic/SVG//bookmark-24px.svg'}
          className="tag pushed"
          alt="..."
          onClick={() => setIsActive(false)}
          style={isActive ? { display: 'inline' } : { display: 'none' }}
          id="active"
        />
        <img
          src={devUrl + '/pic/class/' + class_info.class_main_pic}
          className="card-img-top photo"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{class_info.class_name}</h5>

          <div className="d-flex bbb">
            {/* <p
              className="card-text font16"
              dangerouslySetInnerHTML={{ __html: class_info.class_content }}
            /> */}
            <p className="card-text font16">{class_info.class_content}</p>
          </div>
          <div className="d-flex bbb">
            <img className="icon2" src="/pic/SVG/date_range-24px.svg" alt="" />
            <p className="card-text d-flex">
              <DateConvert jsonDate={class_info.class_start_date} />
              &nbsp;~&nbsp;
              <DateConvert jsonDate={class_info.class_end_date} />
            </p>
          </div>
          <div className="d-flex bbb">
            <img className="icon3" src="/pic/SVG/location_on-24px.svg" alt="" />
            <p className="card-text">{class_info.class_address} </p>
          </div>
          <div className="d-flex justify-content-end btn_group">
            <div className="d-flex">
              <button className="btn d-flex join">
                <a href={devUrl + '/class/' + class_info.class_id}>參加活動</a>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
export default ClassResultCard
