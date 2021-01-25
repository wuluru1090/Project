import logo from '../../logo.svg'
import '../../index.scss'
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

import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/login2.scss'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import GoogleLogin from '../../components/Soya/GoogleLogin'

function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isAuth, setIsAuth } = props

  const [loginStatus, setloginStatus] = useState('')
  const [memberidd, setMemberidd] = useState('')
  const [redire, setRedire] = useState(false)
  console.log(memberidd)

  Axios.defaults.withCredentials = true

  // 登入後開啟isAuth reload是為了要讓session更新
  // session 部分寫在mynavbar
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      // console.log(response)
      if (response.data.message) {
        setloginStatus(response.data.message)
      } else {
        setIsAuth(true)

        alert('登入成功')
        // props.history.goBack(-2)
        props.history.push('/')
        window.location.reload()
      }
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      console.log(response)
      if (response.data.loggedIn == true) {
        setloginStatus(response.data.user[0].username)
        setMemberidd(response.data.user[0].member_id)
        setIsAuth(true)
      }
    })
  }, [])

  return (
    <>
      <div className="login">
        <div className="loginbox">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 cardboxmargin">
                <div className="card p-5">
                  <div className="logintitle">Login</div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form-control-lg card-input"
                      placeholder="請輸入帳號"
                      onChange={(e) => {
                        setUsername(e.target.value)
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control form-control-lg card-input loginpass"
                      placeholder="請輸入密碼"
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                  </div>

                  <div className="forgetpass d-flex">
                    <Link to="#">忘記密碼</Link>
                  </div>
                  <div className="loginbtnthemebox col-12 d-flex">
                    <button className="btn loginbtntheme loginbtntheme1 d-flex">
                      <FaFacebookF className="loginbtnthemeicon1" />
                      Facebook
                    </button>
                    <GoogleLogin />
                    <button className="btn loginbtntheme loginbtntheme3 d-flex">
                      <FaTwitter className="loginbtnthemeicon3" />
                      Twitter
                    </button>
                  </div>

                  <button onClick={login} className="btn loginbtnlogin">
                    登入
                  </button>
                  <div
                    style={{ color: 'red', textAlign: 'center', height: '0px' }}
                  >
                    {loginStatus}
                  </div>
                  <div className="noaccount d-flex">
                    還沒有帳戶嗎?
                    <NavLink
                      to="/signup"
                      alt="123"
                      className="signupbtn d-flex"
                    >
                      註冊
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Login)
