import React from 'react'
import '../../style/default.scss'
import { Card, Form, Button } from 'react-bootstrap'
import '../../style/member/member_content.scss'
import { MdVisibility, MdDone } from 'react-icons/md'
function MemberContent() {
  return (
    <>
      <div className="container ">
        <Card className="mem_box">
          <Card.Header className="mem_title d-flex justify-content-between">
            <h5>會員資料</h5>
            <Button onclick="" className="btn-style botton-font btn_icon">
              <MdVisibility />
              檢視
            </Button>
          </Card.Header>
          <Card.Body style={{ padding: '0  38px  43px 42px' }}>
            <Form className="row  d-flex justify-content-start mem_inf">
              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label className="d-flex ">
                  <p className="subtitle1">*</p>
                  <p className="subtitle1">帳號</p>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="帳號"
                  className="  text_w"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label className="d-flex">
                  <p className="subtitle1">*</p>
                  <p className="subtitle1">名稱</p>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder=" 名稱"
                  className="  text_w"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label className="d-flex">
                  <p className="subtitle1">*</p>
                  <p className="subtitle1">信箱</p>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="  text_w"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label className="d-flex mem_form">
                  <p className="subtitle1">*</p>
                  <p className="subtitle1">性別</p>
                </Form.Label>
                <Form.Label className="mem_form ">
                  <div className="d-flex text_w">
                    <Form.Check
                      type="radio"
                      label="男"
                      name="
                    formHorizontalRadio"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="女"
                      name="
                    formHorizontalRadio"
                      id="formHorizontalRadios2"
                    />
                  </div>
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label>生日</Form.Label>
                <Form.Control type="date" placeholder="" className="  text_w" />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlSelect1"
                className="mem_form"
              >
                <Form.Label>攝影經驗</Form.Label>
                <Form.Control as="select" className="  text_w">
                  <option className="subtitle1">一年以下</option>
                  <option className="subtitle1">一年以下</option>
                  <option className="subtitle1">一年以下</option>
                  <option className="subtitle1">一年以下</option>
                  <option className="subtitle1">一年以下</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label>電話</Form.Label>
                <Form.Control
                  type="photo"
                  placeholder="請輸入電話"
                  className="  text_w"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mem_form">
                <Form.Label>關於我</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="關於我"
                  className="  text_w"
                />
              </Form.Group>
            </Form>
            <div className="d-flex justify-content-end">
              <Button
                type="submit"
                className="btn-style botton-font btn_icon  "
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

export default MemberContent
