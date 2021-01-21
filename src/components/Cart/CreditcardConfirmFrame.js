import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/creditcardconfirmframe.scss'

function CreditcardConfirmFrame(props) {
  return (
    <>
      <div className="creditcardconfirmframetop">
        <div className="creditcardconfirmframe1">購買完成</div>
        <div className="creditcardconfirmframe2">
          <div className="tcen">恭喜您完成訂單 請至會員中心確認訂單</div>
        </div>
      </div>
    </>
  )
}

export default CreditcardConfirmFrame
