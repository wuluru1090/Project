import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../style/default.scss'
import { Card, Form, Button } from 'react-bootstrap'
import '../../style/member/member_content.scss'
import { MdVisibility, MdDone } from 'react-icons/md'
import { withRouter, Link } from 'react-router-dom'
import { devUrl } from '../../config'
function MemberContent(props) {
  const [member, setMember] = useState([])
  const [member_id, setMember_id] = useState('')
  const [member_name, setMember_name] = useState('')
  const [member_email, setMember_email] = useState('')
  const [member_account, setMember_account] = useState('')
  const [member_gender, setMember_gender] = useState('')
  const [member_phone, setMember_phone] = useState('')
  const [member_birthday, setMember_birthday] = useState('')
  const [member_ex, setMember_ex] = useState('')
  const [member_about, setMember_about] = useState('')

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then((res) => {
        setMember(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const UpdateMember = (member_id) => {
    Axios.put('http://localhost:3001/member/update', {
      member_id: member_id,
      member_name: member_name,
      // member_gender: member_gender,
      member_phone: member_phone,
      // member_birthday: member_birthday,
      member_ex: member_ex,
      member_about: member_about,
    }).then((res) => {
      // setMember_name(res.data.member_name)
      // setMember(
      //   member.map((val) => {
      //     return val.member_id === member_id
      //       ? {
      //           member_id: m.member_id,
      //           member_name: m.member_name,
      //           // member_gender: m.member_gender,
      //           member_phone: m.member_phone,
      //           member_birthday: m.member_birthday,
      //           member_ex: m.member_ex,
      //           member_about: m.member_about,
      //         }
      //       : val
      //   })
      // )
    })
  }

  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')

    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1

    var yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }

  return (
    <>
      {member.map((m) => {
        return (
          <div className="container ">
            <Card className="mem_box">
              <Card.Header className="mem_title d-flex justify-content-between">
                <h5>會員資料</h5>

                <Button
                  onClick=""
                  className="btn-style botton-font btn_icon"
                  href={devUrl + `/see/${props.match.params.id}`}
                >
                  <MdVisibility />
                  檢視
                </Button>
              </Card.Header>
              <Card.Body style={{ padding: '0  38px  43px 42px' }}>
                <Form className="row  d-flex justify-content-start mem_inf">
                  <Form.Group controlId="formBasicEmail" className="mem_form">
                    <Form.Label className="d-flex ">
                      <p className="subtitle1" style={{ color: '#df3d00' }}>
                        *
                      </p>
                      <p className="subtitle1">帳號</p>
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="帳號"
                      className="  text_w"
                      name="member_account"
                      value={m.member_account}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mem_form">
                    <Form.Label className="d-flex">
                      <p className="subtitle1" style={{ color: '#df3d00' }}>
                        *
                      </p>
                      <p className="subtitle1">名稱</p>
                    </Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="名稱"
                      className="text_w"
                      name="member_name"
                      Value={m.member_name}
                      onChange={(e) => {
                        setMember_name(e.target.value)
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mem_form">
                    <Form.Label className="d-flex">
                      <p className="subtitle1" style={{ color: '#df3d00' }}>
                        *
                      </p>
                      <p className="subtitle1">信箱</p>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="信箱"
                      className=" text_w"
                      name="member_email"
                      Value={m.member_email}
                      // onChange={(e) => {
                      //   setMember_email(e.target.value)
                      // }}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="d-flex mem_form">
                      <p className="subtitle1" style={{ color: '#df3d00' }}>
                        *
                      </p>
                      <p className="subtitle1">性別</p>
                    </Form.Label>

                    <Form.Label className="mem_form ">
                      <div className="d-flex text_w">
                        <Form.Check
                          type="radio"
                          label="男"
                          value="男"
                          // checked={`${m.member_gender}` === '男'}
                          defaultChecked={`${m.member_gender}` === '男'}
                          name="
                    formHorizontalRadio"
                          id="formHorizontalRadios1"
                          // onChange={(e) => {
                          //   setMember_gender(e.target.value)
                          // }}
                        />
                        <Form.Check
                          type="radio"
                          label="女"
                          value="女"
                          // checked={`${m.member_gender}` === '女'}
                          defaultChecked={`${m.member_gender}` === '女'}
                          name="
                    formHorizontalRadio"
                          id="formHorizontalRadios2"
                          // onChange={(e) => {
                          //   setMember_gender(e.target.value)
                          // }}
                        />
                      </div>
                    </Form.Label>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" className="mem_form ">
                    <div className=" d-flex">
                      <p className="subtitle1" style={{ color: '#df3d00' }}>
                        *
                      </p>
                      <Form.Label>生日</Form.Label>
                    </div>

                    <Form.Control
                      type="date"
                      placeholder=""
                      className="text_w"
                      value={dateConvert(m.member_birthday)}
                    />
                  </Form.Group>

                  {/* <DateConvert jsonDate={val.member_birthday} /> */}
                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    className="mem_form"
                  >
                    <Form.Label>攝影經驗</Form.Label>

                    <Form.Control
                      as="select"
                      className="  text_w"
                      name="member_ex"
                      Value={m.member_ex}
                      onChange={(e) => {
                        setMember_ex(e.target.value)
                      }}
                    >
                      <option className="subtitle1" value="0">
                        一年以下
                      </option>
                      <option className="subtitle1" value="1">
                        一年
                      </option>
                      <option className="subtitle1" value="3">
                        兩年
                      </option>
                      <option className="subtitle1" value="4">
                        四年
                      </option>
                      <option className="subtitle1" value="5">
                        五年
                      </option>
                      <option className="subtitle1" value="6">
                        六年
                      </option>
                      <option className="subtitle1" value="7">
                        七年
                      </option>
                      <option className="subtitle1" value="8">
                        七年以上
                      </option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mem_form">
                    <Form.Label>電話</Form.Label>

                    <Form.Control
                      type="photo"
                      placeholder="請輸入電話"
                      className="text_w"
                      Value={m.member_phone}
                      name="member_phone"
                      onChange={(e) => {
                        setMember_phone(e.target.value)
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mem_form">
                    <Form.Label>關於我</Form.Label>
                    <Form.Control
                      type="text"
                      // as="textarea"
                      rows={2}
                      placeholder="關於我"
                      className="text_w"
                      Value={m.member_about}
                      name="member_about"
                      onChange={(e) => {
                        setMember_about(e.target.value)
                      }}
                    />
                  </Form.Group>
                </Form>
                <div className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    className="btn-style botton-font btn_icon "
                    onClick={() => {
                      UpdateMember(m.member_id)
                    }}
                  >
                    <MdDone />
                    儲存
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(MemberContent)
