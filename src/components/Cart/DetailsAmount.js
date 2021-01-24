import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/detailsamount.scss'
import Axios from 'axios'

function DetailsAmount(props) {
  const [member_name, setmember_name] = useState('')
  const [member_account, setmember_account] = useState('')
  const [membername, setmembername] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setmembername(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      member_name: member_name,
      member_account: member_account,
    }).then(() => {
      alert('successful insert')
    })
  }

  return (
    <>
      <div>
        <div className="detailsamountbox d-flex">
          <div className="boxx2 d-flex">
            <div className="d-flex voucher">
              <div className="lineh">
                <input type="checkbox" />
              </div>
              <div className="lineh">是否使用優惠卷</div>
              <div className="inputbox d-flex">
                <input
                  type="text"
                  name="member_name"
                  className="form-control form-control-md"
                  onChange={(e) => {
                    setmember_name(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="boxx3 d-flex">
            <div>
              <div className="money d-flex">5件商品合計</div>
              <div className="money d-flex">優惠卷折抵</div>
              <div className="money d-flex">小記</div>
            </div>
            <div>
              <div className="money d-flex moneyex"> NT$10000元</div>
              <div className="money d-flex moneyred"> -$200元</div>
              <div className="money d-flex">NT$9800元</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsAmount
