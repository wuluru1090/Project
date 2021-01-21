import logo from '../../logo.svg'
import '../../index.scss'
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MyNavbar from '../../components/Main/MyNavbar'
=======
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  withRouter,
} from 'react-router-dom'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import '../../style/soya/signup.scss'
import { FaTwitter } from 'react-icons/fa'
<<<<<<< HEAD

function Signup() {
  return (
    <>
      {/* <Router> */}
      <MyNavbar />
      {/* </Router> */}

=======
import Axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Validationaaa from '../../components/Soya/Validationaaa'

function Signup(props) {
  Axios.defaults.withCredentials = true

  const createUser = async (fields) => {
    console.log(fields)
    const isValid = await Validationaaa.isValid(fields)
    console.log(isValid)
    if (isValid) {
      register(fields)
    }
  }

  const register = (fields) => {
    Axios.post('http://localhost:3001/register', {
      name: fields.name,
      username: fields.username,
      password: fields.password,
      email: fields.email,
      birthDate: fields.birthDate,
      sex: fields.sex,
      exp: fields.exp,
    }).then(() => {
      props.history.goBack()
    })
  }

  return (
    <>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
      <div className="signup">
        <div className="signupbox">
          <div className="container">
            <div className="row justify-content-center">
<<<<<<< HEAD
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
=======
              <div className="col-7 cardboxmargin">
                <Formik
                  initialValues={{
                    name: '',
                    username: '',
                    password: '',
                    passwordConfirmation: '',
                    // email: '',
                    // birthDate: '',
                    // sex: '',
                    // exp: '',
                  }}
                  validationSchema={Validationaaa}
                  onSubmit={(fields) => {
                    createUser(fields)
                    // console.log(fields)
                  }}
                >
                  <Form className="card p-5">
                    <div className="signuptitle">SignUp</div>
                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">名稱</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="name"
                          type="text"
                          placeholder="請輸入名字"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage name="name" className="invalid-feedback">
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">帳號</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="username"
                          type="text"
                          placeholder="請輸入帳號"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage
                          name="username"
                          className="invalid-feedback"
                        >
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">密碼</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="password"
                          type="password"
                          placeholder="請輸入密碼"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage
                          name="password"
                          className="invalid-feedback"
                        >
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">確認密碼</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="passwordConfirmation"
                          type="password"
                          placeholder="再次輸入密碼"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage
                          name="passwordConfirmation"
                          className="invalid-feedback"
                        >
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">信箱</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="email"
                          type="email"
                          placeholder="請輸入信箱"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage name="email" className="invalid-feedback">
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">生日</div>
                      </div>

                      <div className="inputbox">
                        <Field
                          name="birthDate"
                          type="date"
                          className="form-control form-control-lg card-input"
                        />
                        <ErrorMessage
                          name="birthDate"
                          className="invalid-feedback"
                        >
                          {(msg) => (
                            <div
                              style={{
                                color: 'red',
                                height: '0',
                              }}
                            >
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className="d-flex contentboxinput">
                      <div className="starbox d-flex">
                        <div className="startitle">*</div>
                        <div className="starafter">性別</div>
                      </div>

                      <div className="custom-control custom-radio custom-control-inline d-flex">
                        <Field
                          type="radio"
                          name="sex"
                          value="男"
                          id="customRadioInline1"
                          className="custom-control-input"
                          style={{ paddingLeft: '10px' }}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline1"
                        >
                          男
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <Field
                          type="radio"
                          name="sex"
                          value="女"
                          id="customRadioInline2"
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
                        <div style={{ height: '0px' }} className="starafter">
                          攝影經驗
                        </div>
                      </div>

                      <Field
                        component="select"
                        id="exp"
                        name="exp"
                        className="custom-select custom-select-lg mb-3"
                        multiple={false}
                      >
                        <option value="0" defaultValue>
                          一年以下
                        </option>
                        <option defaultValue="1">1年</option>
                        <option defaultValue="2">2年</option>
                        <option defaultValue="3">3年</option>
                        <option defaultValue="4">4年</option>
                        <option defaultValue="5">5年</option>
                        <option defaultValue="6">6年</option>
                        <option defaultValue="7">7年</option>
                        <option defaultValue="8">7年以上</option>
                      </Field>
                    </div>

                    <button type="submit" className="btn signupbtnsignup">
                      註冊
                    </button>
                  </Form>
                </Formik>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

<<<<<<< HEAD
export default Signup
=======
export default withRouter(Signup)
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
