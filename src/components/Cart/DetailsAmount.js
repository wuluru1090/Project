import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/detailsamount.scss'

function DetailsAmount(propsz) {
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
                <input type="text" className="form-control form-control-md" />
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
