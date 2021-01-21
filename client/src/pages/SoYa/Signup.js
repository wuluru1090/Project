import logo from '../../logo.svg'
import '../../index.scss'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MyNavbar from '../../components/Main/MyNavbar'
import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/signup.scss'
import { FaTwitter } from 'react-icons/fa'

function Signup() {
  return (
    <>
      {/* <Router> */}
      <MyNavbar />
      {/* </Router> */}

      <div className="signup">
        <div className="signupbox">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-9 cardboxmargin">
                <form className="card p-5">
                  <div className="signuptitle">SignUp</div>
                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div className="starafter">帳號</div>
                    </div>

                    <div className="inputbox">
                      <input
                        type="text"
                        className="form-control form-control-lg card-input"
                      />
                    </div>
                  </div>

                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div className="starafter">密碼</div>
                    </div>

                    <div className="inputbox">
                      <input
                        type="password"
                        className="form-control form-control-lg card-input"
                      />
                    </div>
                  </div>

                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div className="starafter">確認密碼</div>
                    </div>

                    <div className="inputbox">
                      <input
                        type="password"
                        className="form-control form-control-lg card-input"
                      />
                    </div>
                  </div>

                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div className="starafter">信箱</div>
                    </div>

                    <div className="inputbox">
                      <input
                        type="email"
                        className="form-control form-control-lg card-input"
                      />
                    </div>
                  </div>
                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div className="starafter">生日</div>
                    </div>

                    <div className="inputbox">
                      <input
                        type="date"
                        className="form-control form-control-lg card-input"
                      />
                    </div>
                  </div>

                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle">*</div>
                      <div style={{ height: '85px' }} className="starafter">
                        性別
                      </div>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline d-flex">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        className="custom-control-input "
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline1"
                      >
                        男
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline2"
                      >
                        女
                      </label>
                    </div>
                  </div>

                  <div className="d-flex contentboxinput">
                    <div className="starbox d-flex">
                      <div className="startitle"></div>
                      <div style={{ height: '85px' }} className="starafter">
                        攝影經驗
                      </div>
                    </div>

                    <select className="custom-select custom-select-lg mb-3">
                      <option defaultValue>下拉式選單</option>
                      <option value="1">1年</option>
                      <option value="2">2年</option>
                      <option value="3">3年</option>
                    </select>
                  </div>

                  <button className="btn signupbtnsignup">註冊</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
