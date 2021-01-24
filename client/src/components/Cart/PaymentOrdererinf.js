import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/paymentordererinf.scss'

function PaymentOrdererinf(props) {
  return (
    <>
      <div className="paymentordererinftop">
        <div className="paymentordererinfbox1">訂購人資訊</div>
        <div className="paymentordererinfbox2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="paymentinput">
                <form>
                  <div className="d-flex">
                    <div className="d-flex marginb">
                      <div className="redt">*</div>
                      <div className="ordereraccount">姓名:</div>
                    </div>

                    <div className="paymentinputbox">
                      <input
                        type="text"
                        className="form-control form-control-md"
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div className="d-flex">
                    <div className="d-flex marginb">
                      <div className="redt">*</div>
                      <div className="ordereraccount">手機:</div>
                    </div>

                    <div className="paymentinputbox">
                      <input
                        type="tel"
                        className="form-control form-control-md"
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div className="d-flex">
                    <div className="d-flex marginb">
                      <div className="redt">*</div>
                      <div className="ordereraccount">信箱:</div>
                    </div>

                    <div className="paymentinputbox">
                      <input
                        type="email"
                        className="form-control form-control-md"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentOrdererinf
