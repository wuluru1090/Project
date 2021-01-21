import '../../index.scss'
import React, { useState, useEffect } from 'react'
import MemberCard from '../../components/Member/MemberCard'
import MemberNavlist from '../../components/Member/MemberNavlist'
import MemberPdCard from '../../components/Member/MemberPdCard'

import { Card, Button, Form } from 'react-bootstrap'
import { MdVisibility, MdDone } from 'react-icons/md'
import { devUrl } from '../../config'
import '../../style/soya/membereventmanage.scss'
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios'
import SelectTime from '../../components/Soya/SelectTime'
import SelectTime2 from '../../components/Soya/SelectTime2'
import SelectTime3 from '../../components/Soya/SelectTime3'
import {
  DateConvert,
  TimeConvert,
} from '../../components/Main/DateTimeConverter'

function MemberEventManage(props) {
  // 活動的某一筆資料放置處
  const [eventstartmember, setEventstartmember] = useState([])
  const [jsonparsecontact, setJsonparsecontact] = useState([])
  const [transtartDate, setTranstartDate] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // 城市map放置處
  const [cityname, setCityname] = useState([])

  // 主題map放置處
  const [tags, setTags] = useState([])

  // 圖片
  const [uploadimg, setUploadimg] = useState(devUrl + '/pic/soya/white.jpg')

  Axios.defaults.withCredentials = true
  // // 活動的某一筆資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/eventstartdata/get/${props.match.params.id}`
    )
      .then(async (res) => {
        const wait = await setEventstartmember(res.data)
        const jsonpar = JSON.parse(res.data[0].event_host_contact)
        setJsonparsecontact(jsonpar)
        setUploadimg(res.data[0].event_photo)
        setStartDate(res.data[0].event_start_time)

        // console.log(res.data[0].event_photo)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  // 城市map
  useEffect(() => {
    Axios.get('http://localhost:3001/cityya').then((response) => {
      // console.log(response.data)
      setCityname(response.data)
      // console.log(cityname)
    })
  }, [])

  // 主題map
  useEffect(() => {
    Axios.get('http://localhost:3001/tagss').then((response) => {
      // console.log(response.data)
      setTags(response.data)
      // console.log(cityname)
    })
  }, [])

  // 圖片預覽
  const changefile = (e) => {
    const file = e.target.files.item(0)
    const fileReader = new FileReader()
    fileReader.addEventListener('load', fileLoad)
    if (file) {
      fileReader.readAsDataURL(file)
    }
  }
  const fileLoad = (e) => {
    setUploadimg(e.target.result)
    // console.log(e.target.result)
    // setActupload(e.target.result)
  }

  return (
    <>
      <body>
        <div className="background_wave ">
          <div className="wrapper">
            <main className="container">
              <aside className="d-flex justify-content-end">
                <br />
                <div>
                  <MemberCard />
                  <br />
                  <MemberNavlist />
                </div>

                <article>
                  <div className="container ">
                    <Card className="mem_box">
                      {eventstartmember.map((val) => {
                        return (
                          <Card.Header className="mem_title d-flex justify-content-between">
                            <h5>我的揪團/{val.event_name}/編輯活動</h5>
                          </Card.Header>
                        )
                      })}
                      <Card.Body
                        style={{
                          padding: '0px  42px  42px 42px',
                        }}
                        className="boxboxboxbox"
                      >
                        <ul className="row navbar  d-flex align-items-center">
                          <li className=" subtitle1  main_li">
                            <a href="#">發起中</a>
                          </li>
                          <li className=" subtitle1 main_li">
                            <a href="#">已完成</a>
                          </li>
                        </ul>
                        <br />
                        {eventstartmember.map((val) => {
                          return (
                            <div className="eventmanagebox">
                              <div className="peoinfobox">
                                <div className="peoinfo">聯絡人資訊</div>
                                <div className="peoinfoformbox">
                                  <div className="card">
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">聯絡人</div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={jsonparsecontact.contact_name}
                                        />
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          聯絡人電話
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="tel"
                                          className="form-control form-control-md card-input"
                                          Value={jsonparsecontact.contact_phone}
                                        />
                                      </div>
                                    </div>

                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          聯絡人信箱
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="email"
                                          className="form-control form-control-md card-input"
                                          Value={jsonparsecontact.contact_email}
                                        />
                                      </div>
                                    </div>

                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          聯絡人<span>LINE</span>
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={
                                            jsonparsecontact.contact_lineId
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="actinfobox">
                                <div className="peoinfo">活動資訊</div>
                                <div className="peoinfoformbox">
                                  <div className="card">
                                    {/* <div
                                      className="d-flex justify-content-center"
                                      style={{ paddingLeft: '15px' }}
                                    >
                                      <DateConvert
                                        jsonDate={val.event_start_time}
                                      />
                                      <div>_</div>
                                      <TimeConvert
                                        jsonTime={val.event_start_time}
                                      />
                                    </div> */}
                                    <div
                                      className="contentboxinput d-flex align-items-start"
                                      style={{ marginBottom: '0px' }}
                                    >
                                      <div
                                        className="starbox d-flex"
                                        style={{
                                          marginTop: '7px',
                                        }}
                                      >
                                        <div className="starafter">
                                          開始時間
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <SelectTime
                                          setStartDate={setStartDate}
                                          inittime={startDate}
                                          className="card-input"
                                          style={{ marginTop: '36px' }}
                                        />

                                        {/* <input
                                          type="date"
                                          className="form-control form-control-md card-input"
                                        /> */}
                                      </div>
                                    </div>
                                    <div
                                      className="contentboxinput d-flex align-items-start"
                                      style={{ marginBottom: '0px' }}
                                    >
                                      <div
                                        className="starbox d-flex"
                                        style={{
                                          marginTop: '7px',
                                        }}
                                      >
                                        <div className="starafter">
                                          結束時間
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <SelectTime2
                                          setStartDate={setStartDate}
                                          className="card-input"
                                          style={{ marginTop: '36px' }}
                                        />
                                        {/* <input
                                          type="date"
                                          className="form-control form-control-md card-input"
                                        /> */}
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          活動地點
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={
                                            eventstartmember[0].event_location
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          活動城市
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <select
                                          value={eventstartmember[0].event_city}
                                          className="form-control form-control-md card-input"
                                        >
                                          {cityname.map((val) => {
                                            return (
                                              <option
                                                key={val.event_city_id}
                                                value={val.event_city_id}
                                              >
                                                {val.event_city_name}
                                              </option>
                                            )
                                          })}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          活動地址
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={
                                            eventstartmember[0].event_address
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          集合地點
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={
                                            eventstartmember[0]
                                              .event_meeting_point
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="contentboxinput d-flex">
                                      <div className="starbox d-flex">
                                        <div className="starafter">
                                          集合地址
                                        </div>
                                      </div>

                                      <div className="inputbox d-flex">
                                        <input
                                          type="text"
                                          className="form-control form-control-md card-input"
                                          Value={
                                            eventstartmember[0]
                                              .event_meeting_address
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="siupinfobox">
                                <div className="actinfobox">
                                  <div className="peoinfo">報名事項</div>
                                  <div className="peoinfoformbox">
                                    <div className="card">
                                      <div
                                        className="contentboxinput d-flex align-items-start"
                                        style={{ marginBottom: '0px' }}
                                      >
                                        <div
                                          className="starbox d-flex"
                                          style={{
                                            marginTop: '7px',
                                          }}
                                        >
                                          <div className="starafter">
                                            截止時間
                                          </div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <SelectTime3
                                            setStartDate={setStartDate}
                                            className="card-input"
                                            style={{ marginTop: '36px' }}
                                          />
                                          {/* <input
                                          type="date"
                                          className="form-control form-control-md card-input"
                                        /> */}
                                        </div>
                                      </div>
                                      <div className="contentboxinput d-flex">
                                        <div className="starbox d-flex">
                                          <div className="starafter">價格</div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <input
                                            type="number"
                                            className="form-control form-control-md card-input"
                                            Value={
                                              eventstartmember[0].event_fees
                                            }
                                          />
                                        </div>
                                      </div>

                                      {/* <div className="contentboxinput d-flex">
                                    <div className="starbox d-flex">
                                      <div className="starafter">付款方式</div>
                                    </div>

                                    <div className="inputbox d-flex">
                                      <input
                                        type="text"
                                        className="form-control form-control-md card-input"
                                      />
                                    </div>
                                  </div> */}

                                      <div className="contentboxinput d-flex">
                                        <div className="starbox d-flex">
                                          <div className="starafter">
                                            成團人數
                                          </div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <input
                                            type="text"
                                            className="form-control form-control-md card-input"
                                            Value={
                                              eventstartmember[0]
                                                .event_valid_attendents
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="contentboxinput d-flex">
                                        <div className="starbox d-flex">
                                          <div className="starafter">
                                            人數上限
                                          </div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <input
                                            type="text"
                                            className="form-control form-control-md card-input"
                                            Value={
                                              eventstartmember[0]
                                                .event_limit_number
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="detinfobox">
                                <div className="actinfobox">
                                  <div className="peoinfo">活動詳細資訊</div>
                                  <div className="peoinfoformbox">
                                    <div className="card">
                                      <div className="contentboxinput d-flex">
                                        <div className="starbox d-flex">
                                          <div className="starafter">
                                            活動標題
                                          </div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <input
                                            type="text"
                                            className="form-control form-control-md card-input"
                                            Value={
                                              eventstartmember[0].event_name
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="contentboxinput d-flex">
                                        <div className="starbox d-flex">
                                          <div className="starafter">
                                            活動主題
                                          </div>
                                        </div>

                                        <div className="inputbox d-flex">
                                          <Form.Control
                                            as="select"
                                            custom
                                            value={
                                              eventstartmember[0].event_theme
                                            }
                                          >
                                            {tags.map((val) => {
                                              return (
                                                <option
                                                  key={val.tags_id}
                                                  value={val.tags_id}
                                                >
                                                  {val.tags_name}
                                                </option>
                                              )
                                            })}
                                          </Form.Control>
                                        </div>
                                      </div>

                                      <div className="actinfobox1">
                                        <div className="peoinfo1 d-flex mx-4">
                                          封面圖
                                        </div>
                                        <div
                                          className="contentboxinput d-flex"
                                          style={{ marginBottom: '5px' }}
                                        >
                                          <button
                                            className="btn btn-sm titlepagebtn rounded-pill d-flex"
                                            style={{
                                              position: 'relative',
                                              boxShadow: '0 0 1px black',
                                            }}
                                          >
                                            <input
                                              type="file"
                                              onChange={changefile}
                                              style={{
                                                position: 'absolute',
                                                left: '0',
                                                opacity: '0',
                                              }}
                                            />
                                            選擇圖片上傳
                                          </button>
                                        </div>

                                        <div className="evmaimgbox mx-4">
                                          <img
                                            src={uploadimg}
                                            alt="titlepageimg"
                                            className="cover-fit evmaimg "
                                          />
                                        </div>
                                      </div>

                                      <div className="actinfobox1">
                                        <div className="peoinfo1 d-flex mx-4">
                                          詳細資訊
                                        </div>

                                        <div className="px-4 py-2">
                                          <textarea
                                            className="textareadet1"
                                            placeholder="請輸入詳細資訊..."
                                            Value={
                                              eventstartmember[0].event_details
                                            }
                                          ></textarea>
                                        </div>
                                      </div>

                                      <div className="actinfobox1">
                                        <div className="peoinfo1 d-flex mx-4">
                                          活動標籤
                                        </div>

                                        <div className="px-4 py-2">
                                          <textarea
                                            className="textareadet2"
                                            placeholder="新增活動標籤..."
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div className="finalcomfbrow d-flex px-4">
                                        <button className="btn finalcomfbrowbtn rounded-pill d-flex">
                                          <MdDone />
                                          確認
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </Card.Body>
                    </Card>
                  </div>
                </article>
              </aside>
            </main>
          </div>
          {/* 背景icon 需要再研究 */}
          <div className="bg-couple row d-flex align-items-end ">
            <figure>
              <img src={devUrl + '/pic/SVG/couple man.svg'} alt="背景iocn男" />
            </figure>
            <figure>
              <img
                src={devUrl + '/pic/SVG/couple woman.svg'}
                alt="背景iocn女"
              />
            </figure>
          </div>
          <br />
        </div>
      </body>
    </>
  )
}

export default withRouter(MemberEventManage)
