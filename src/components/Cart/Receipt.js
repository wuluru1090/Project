import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config/'
import '../../style/cart/receipt.scss'

function Receipt(props) {
  return (
    <>
      <div className="receipttop">
        <div className="receiptbox1">訂購人資訊</div>
        <div className="receiptbox2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="receiptinput">
                <div className="d-flex receiptmarginelect">
                  <div className="receiptcolumn">電子收據</div>
                </div>
                <form>
                  <div className="d-flex">
                    <div className="d-flex receiptmargin">
                      <div className="receiptcolumn">寄至訂購人信箱:</div>
                    </div>

                    <div className="receiptbox">
                      <input
                        type="text"
                        className="form-control form-control-md"
                      />
                    </div>
                  </div>
                </form>
                <form>
                  <div className="d-flex">
                    <div className="d-flex receiptmargin">
                      <div className="receiptcolumn">會員載具:</div>
                    </div>

                    <div className="receiptbox">
                      <input
                        type="tel"
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

export default Receipt
