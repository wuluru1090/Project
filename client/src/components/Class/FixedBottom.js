import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/fixed_bottom.scss'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'

function FixedBottom(props) {
  const [fixedBottomData, setFixedBottomData] = useState([])
  const [isActive, setIsActive] = useState(false)

  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')
    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    var yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/${props.match.params.id}`)
      .then((response) => {
        setFixedBottomData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      {fixedBottomData.map((val) => {
        const val1 = parseInt(val.class_limit)
        const val2 = parseInt(val.class_attendees)
        return (
          <div className="fixed_bottom">
            <div className="d-flex justify-content-between fixed_bottom_wrapper ">
              <div className="fixed_bottom_first">
                <div>
                  {dateConvert(val.class_start_date)}&nbsp;~&nbsp;
                  {dateConvert(val.class_end_date)}
                </div>
                <div className="fixed_class_title">{val.class_name}</div>
              </div>
              <div className="d-flex align-items-center fixed_bottom_second">
                <div className="fixed_info">
                  <div>NT${val.class_price}</div>
                  <div>剩下{val1 - val2}個名額</div>
                </div>
                <button
                  onClick={() => {
                    setIsActive(true)
                    // alert('yee')
                    Swal.fire('已加入購物車', '詳情請至購物車查看', 'success')
                  }}
                  className={
                    isActive
                      ? 'd-none'
                      : 'btn d-flex align-items-center justify-content-center fixed_cart_button'
                  }
                >
                  加入購物車
                </button>
                <button
                  // className="btn d-flex align-items-center justify-content-center fixed_cart_button"
                  onClick={(e) => {
                    setIsActive(false)
                  }}
                  className={
                    isActive
                      ? 'btn d-flex align-items-center justify-content-center fixed_cart_button'
                      : 'd-none'
                  }
                >
                  已加入購物車
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default withRouter(FixedBottom)
