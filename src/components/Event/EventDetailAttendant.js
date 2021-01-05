import React from 'react'
import '../../style/event/event_detail_attendant.scss'
import { devUrl } from '../../config'

function EventDetailAttendant() {
  return (
    <>
      <div className="detail-attendant-wrapper d-flex flex-wrap">
        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar"></figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>陳宇軒</h6>
            <div className="subtitle2 identity host">主揪</div>
          </div>
        </div>

        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar"></figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>陳宇軒</h6>
            <div className="subtitle2 identity attendants">參與者</div>
          </div>
        </div>

        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar"></figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>陳宇軒</h6>
            <div className="subtitle2 identity attendants">參與者</div>
          </div>
        </div>

        <div className="attendant-card  d-flex justify-content-center">
          <figure className="detail-attendant-avatar"></figure>
          <div className="name d-flex flex-column align-items-center">
            <h6>陳宇軒</h6>
            <div className="subtitle2 identity attendants">參與者</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetailAttendant
