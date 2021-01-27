import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  withRouter,
} from 'react-router-dom'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

function Logout(props) {
  // 保護頁面
  const { isAuth, setIsAuth } = props

  // modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  Axios.defaults.withCredentials = true

  const signout = () => {
    Axios.get('http://localhost:3001/logout', {})
      .then((response) => {
        console.log(response)
        sessionStorage.removeItem('useriddd')
        if (response.data.loggedIn == false) {
          setIsAuth(false)
        }
        console.log(isAuth)
      })
      .then(() => {
        Swal.fire('登出', '您已成功登出', 'success').then(function () {
          props.history.push('/')
          window.location.reload()
        })

        // setTimeout(alert('登出成功'), 1000)
      })
  }

  return (
    <>
      <p>
        <button className="btn logoutbtn" onClick={handleShow}>
          登出
        </button>
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>會員登出</Modal.Title>
        </Modal.Header>
        <Modal.Body>確認要登出嗎?</Modal.Body>
        <Modal.Footer>
          <Button
            style={{ color: 'white' }}
            variant="secondary"
            onClick={handleClose}
          >
            關閉
          </Button>

          <Button variant="primary" onClick={signout}>
            登出
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
// withRouter是一個高階元件樣式，
// 可以讓你的元件存取到更新的match, location, history等等屬性(props)
// 這裡使用它是為了history方法
export default withRouter(Logout)
