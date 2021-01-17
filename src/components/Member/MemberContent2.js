import React, { useState, useEffect } from 'react'
// import Axios from 'axios'
import '../../style/default.scss'
import { Card, Form, Button } from 'react-bootstrap'
import '../../style/member/member_content.scss'
import { MdVisibility, MdDone } from 'react-icons/md'
import { withRouter, Link } from 'react-router-dom'
import { devUrl } from '../../config'
function MemberContent2(props) {
  const id = props.match.params.member_id
  const [member, setMember] = useState([])
  const [member_name, setMembername] = useState('')
  const [member_gender, setMembergender] = useState('')
  const [member_account, setMemberaccount] = useState('')
  const [member_email, setMemberemail] = useState('')
  const [member_phone, setMemberphone] = useState('')
  const [member_birthday, setMemberbirthday] = useState('')
  const [member_ex, setMemberex] = useState('')
  const [member_about, setMemberabout] = useState('')

  async function getUserFromServer(id) {
    // 連接的伺服器資料網址
    const url = `http://localhost:3001/member/get/1`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const req = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    // 設定資料

    setMembername(data.member_name)
    setMemberaccount(data.member_account)
    setMemberemail(data.member_email)
    setMembergender(data.member_gender)
    setMemberphone(data.member_phone)
    setMemberbirthday(data.member_birthday)
    setMemberex(data.member_ex)
    setMemberabout(data.member_about)
  }

  async function UpdateMember(id) {
    // 開啟載入指示

    const newData = {
      member_name,
      member_gender,
      member_phone,
      member_birthday,
      member_ex,
      member_about,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3001/member/update'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      alert('儲存完成')
      props.history.push('/')
    }, 1000)
  }

  useEffect(() => {
    getUserFromServer(id)
  }, [])

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
                  value={member_account}
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
                  Value={member_name}
                  onChange={(e) => {
                    setMembername(e.target.value)
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
                  value={member_email}
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
                      Value="男"
                      defaultChecked={`${member_gender}` === '男'}
                      name="
                    formHorizontalRadio"
                      id="formHorizontalRadios1"
                      onChange={(e) => {
                        setMembergender(e.target.value)
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="女"
                      Value="女"
                      defaultChecked={`${member_gender}` === '女'}
                      name="
                    formHorizontalRadio"
                      id="formHorizontalRadios2"
                      onChange={(e) => {
                        setMembergender(e.target.value)
                      }}
                    />
                  </div>
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label>生日</Form.Label>
                <Form.Control
                  type="date"
                  placeholder=""
                  className="text_w"
                  Value={dateConvert(member_birthday)}
                  onChange={(e) => {
                    setMemberbirthday(e.target.value)
                  }}
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
                  Value={member_ex}
                  onChange={(e) => {
                    setMemberex(e.target.value)
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
                  Value={member_phone}
                  name="member_phone"
                  onChange={(e) => {
                    setMemberphone(e.target.value)
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label>關於我</Form.Label>
                <Form.Control
                  // type="text"
                  as="textarea"
                  rows={2}
                  placeholder="關於我"
                  className="text_w"
                  Value={member_about}
                  name="member_about"
                  onChange={(e) => {
                    setMemberabout(e.target.value)
                  }}
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end">
              <Button
                type="submit"
                className="btn-style botton-font btn_icon "
                onClick={() => {
                  UpdateMember(id)
                }}
              >
                <MdDone />
                儲存
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default withRouter(MemberContent2)
