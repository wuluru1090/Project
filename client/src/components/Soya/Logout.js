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

function Logout(props) {
  const { isAuth, setIsAuth } = props
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
        props.history.push('/')
        setTimeout(window.location.reload(), 1)
        setTimeout(alert('登出成功'), 3000)
      })
  }

  return (
    <>
      <p>
        <button className="btn logoutbtn" onClick={signout}>
          登出
        </button>
      </p>
    </>
  )
}
// withRouter是一個高階元件樣式，
// 可以讓你的元件存取到更新的match, location, history等等屬性(props)
// 這裡使用它是為了history方法
export default withRouter(Logout)
