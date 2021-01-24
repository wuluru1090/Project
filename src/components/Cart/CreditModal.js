import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Credit from '../Cart/Credit'
import { devUrl } from '../../config'
import '../../style/cart/creditmodal.scss'

function CreditModal() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="creditmodal">
        <form>
          <div className="paym">
            <input type="radio" name="name" className="pmb" />
            LINE PAY
            <img
              src={devUrl + '/pic/pic/Line pay.png'}
              className="ppml"
              alt="..."
            />
            <br />
            <input type="radio" name="name" className="pmb" />
            ATM 付款
            <br />
            <input
              type="radio"
              name="name"
              className="pmb"
              onClick={handleShow}
            />
            信用卡線上付款
            <img
              src={devUrl + '/pic/pic/credit card.png'}
              className="ppm"
              alt="..."
            />
            <br />
            <input type="radio" name="name" className="pmb" />
            超商繳費
          </div>
        </form>
        <Modal
          className="mo"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>信用卡線上付款</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Credit />
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              className="btn mobu"
              style={{ backgroundColor: '#104B6D' }}
            >
              取消
            </Button>
            <Button
              onClick={handleClose}
              className="btn mobu"
              style={{
                backgroundColor: '#12D0C9',
                border: 'none',
              }}
            >
              確認
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default CreditModal
