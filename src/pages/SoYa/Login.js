import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/Login.scss'
import { FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'

function Login() {
  return (
    <>
      <Router>
        <MyNavbar />
      </Router>

      <div className="login">
        <div className="loginbox">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6 cardboxmargin">
                <form className="card p-5">
                  <div className="logintitle p-3">Login</div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form-control-lg card-input"
                      placeholder="請輸入帳號"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form-control-lg card-input loginpass"
                      placeholder="請輸入密碼"
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
                    <button className="btn loginbtntheme loginbtntheme2 d-flex">
                      <FcGoogle className="loginbtnthemeicon2" />
                      Google
                    </button>
                    <button className="btn loginbtntheme loginbtntheme3 d-flex">
                      <FaTwitter className="loginbtnthemeicon3" />
                      Twitter
                    </button>
                  </div>
                  <button className="btn loginbtnlogin">登入</button>
                  <div className="noaccount d-flex">
                    還沒有帳戶嗎?
                    <Link to="#" alt="123" className="signupbtn d-flex">
                      註冊
                    </Link>
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

export default Login
