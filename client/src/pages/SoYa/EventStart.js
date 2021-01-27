import logo from '../../logo.svg'
import '../../index.scss'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { devUrl } from '../../config'
import { GiWoodenSign } from 'react-icons/gi'
import { FaFontAwesomeFlag } from 'react-icons/fa'
import SelectTime from '../../components/Soya/SelectTime'
import SelectTime2 from '../../components/Soya/SelectTime2'
import SelectTime3 from '../../components/Soya/SelectTime3'
import Axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

// 順序不可調換 css會亂掉
import '../../style/soya/eventstart.scss'
import '../../style/soya/eventstart2.scss'
import '../../style/soya/eventstart3.scss'
import '../../style/soya/eventstart4.scss'
import Swal from 'sweetalert2'

function EventStart(props) {
  const { isAuth, setIsAuth } = props

  // modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [cityname, setCityname] = useState([])
  const [tags, setTags] = useState([])
  const [uploadimg, setUploadimg] = useState(devUrl + '/pic/soya/white.jpg')

  const [contactname, setContactname] = useState('李詩婷')
  const [contactPhone, setContactPhone] = useState('0919385383')
  const [contactemail, setContactemail] = useState('ed1040129@gmail.com')
  const [contactlineid, setContactlineid] = useState('ed104')
  const [startDate, setStartDate] = useState('2021-01-30 11:00:00')
  const [endDate, setEndDate] = useState('2021-01-30 17:00:00')
  const [actlocaction, setActlocaction] = useState('Promaker普羅麥克攝影團隊')
  const [actcity, setActcity] = useState('3')
  const [actexactlocaction, setActexactlocaction] = useState(
    '新北市蘆洲區中正路108號2樓'
  )
  const [actclump, setActclump] = useState('Promaker普羅麥克攝影團隊')
  const [actexactclump, setActexactclump] = useState(
    '新北市蘆洲區中正路108號2樓'
  )
  const [actsignupdead, setActsignupdead] = useState('2021-01-29 11:00:00')
  const [actprice, setActprice] = useState('1600')
  // const [actpricemethod, setActpricemethod] = useState('')
  const [actpeople, setActpeople] = useState('10')
  const [actpeopleline, setActpeopleline] = useState('15')
  const [actupload, setActupload] = useState('拍廊4.jpg')
  const [acttitle, setActtitle] = useState('閃燈教學團拍平日場')
  const [acttheme, setActtheme] = useState('2')
  const [actdetail, setActdetail] = useState(
    '這次主要是著重在前期的燈光棚內打燈實戰，藉由前期良好的控光來達到後期速修,課堂中會親自示範使用不同光線拍攝產生的效果，將用光觀念分析給大家後，讓學員們經過思考，這樣才能在不同環境下使用自己的佈光方式來拍，讓創作有更多的自由跟變化'
  )
  const [acttags, setActtags] = useState('棚拍')

  console.log(acttags)

  // 抓會員id
  const [memberidd, setMemberidd] = useState('')

  const [demo, setDemo] = useState(false)

  useEffect(() => {
    if (demo === true) {
      document.getElementById('contactname').value = '李詩婷'
      document.getElementById('contactphone').value = '0919385383'
      document.getElementById('contactemail').value = 'ed1040129@gmail.com'
      document.getElementById('contactlineid').value = 'ed104'
      // document.getElementById('startdate').value = '2021-01-30 12:50'
      // document.getElementById('enddate').value = '2021-01-30 20:50'
      document.getElementById('actlocaction').value = 'Promaker普羅麥克攝影團隊'
      document.getElementById('actcity').value = '3'
      document.getElementById('acttexactlocaction').value =
        '新北市蘆洲區中正路108號2樓'
      document.getElementById('actclump').value = 'Promaker普羅麥克攝影團隊'
      document.getElementById('actexactclump').value =
        '新北市蘆洲區中正路108號2樓'
      document.getElementById('actprice').value = '1600'
      document.getElementById('actpeople').value = '10'
      document.getElementById('actpeopleline').value = '15'
      document.getElementById('acttitle').value = '閃燈教學團拍平日場'
      document.getElementById('acttheme').value = '2'
      document.getElementById('actdetail').value =
        '這次主要是著重在前期的燈光棚內打燈實戰，藉由前期良好的控光來達到後期速修,課堂中會親自示範使用不同光線拍攝產生的效果，將用光觀念分析給大家後，讓學員們經過思考，這樣才能在不同環境下使用自己的佈光方式來拍，讓創作有更多的自由跟變化'
      document.getElementById('acttags').value = '棚拍'
      // document.getElementById('contactname').value = '李詩婷'
    }
  }, [demo])

  // console.log(uploadimg)

  // smoothscroll
  const ScrollTo1 = () => {
    window.scrollTo({ top: 2200, behavior: 'smooth' })
  }
  const ScrollTo2 = () => {
    window.scrollTo({ top: 3000, behavior: 'smooth' })
  }
  const ScrollTo3 = () => {
    window.scrollTo({ top: 5120, behavior: 'smooth' })
  }

  Axios.defaults.withCredentials = true

  // 登入狀態
  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        setMemberidd(response.data.user[0].member_id)
        // console.log(memberidd)
        setIsAuth(true)
      }
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

  // 標籤map
  useEffect(() => {
    Axios.get('http://localhost:3001/tagss').then((response) => {
      // console.log(response.data)
      setTags(response.data)
      // console.log(cityname)
    })
  }, [])

  // 活動表單post資料庫
  const eventform = () => {
    Axios.post('http://localhost:3001/eventform', {
      event_host_contact: {
        聯絡人姓名: contactname,
        聯絡人電話: contactPhone,
        聯絡人信箱: contactemail,
        聯絡人LineID: contactlineid,
      },
      startDate: startDate,
      endDate: endDate,
      actlocaction: actlocaction,
      actcity: actcity,
      actexactlocaction: actexactlocaction,
      actclump: actclump,
      actexactclump: actexactclump,
      actsignupdead: actsignupdead,
      actprice: actprice,
      // actpricemethod: actpricemethod,
      actpeople: actpeople,
      actpeopleline: actpeopleline,
      actupload: actupload,
      acttitle: acttitle,
      acttheme: acttheme,
      actdetail: '<p>' + actdetail + '</p>',
      acttags: acttags,
      memberid: memberidd,
    }).then((response) => {
      // console.log(response)
      // props.history.push('/')
      Swal.fire('建立活動', '您已成功建立活動', 'success').then(function () {
        props.history.push('/')
      })
    })
  }

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

  // if (isAuth === false) {
  //   return (
  //     <>
  //       {/* <Redirect to="/login" /> */}
  //       <h1>此頁面此限會員登入後觀看</h1>
  //       <Link to="/login">到會員登入頁</Link>
  //     </>
  //   )
  // }

  return (
    <>
      <div className="eventstart">
        <button
          style={{ position: 'fixed', top: '100px', left: '100px' }}
          className="btn rounded-pill btn-primary"
          onClick={() => {
            setDemo(true)
          }}
        >
          Demo小幫手
        </button>
        <main className="main0">
          <div className="eventstart1content wrapper d-flex justify-content-lg-between">
            <div className="eventstart1contenttext">
              <div className="conttexttitlebox d-flex">
                <div>
                  <GiWoodenSign className="conttexttitleicon" />
                </div>
                <div className="conttexttitle">
                  簡單幾步驟
                  <br />
                  快速發起活動
                </div>
              </div>
              <div className="conttexttext">
                只要簡單四個步驟，填寫完一個完整的發起活動資訊，就可以快速的發起一個活動，而在接下來您就可以自行安排活動的細項，讓這個攝影活動更加的吸引人!
              </div>
            </div>
            <div className="eventstart1contentimg">
              <img
                className="eventstart1contentimgimg cover-fit"
                src={devUrl + '/pic/soya/classcontentimg1.png'}
                alt="eventstart1contentimg"
              />
            </div>
          </div>
          <div className="eventwave">
            <img src={devUrl + '/pic/soya/eventwave1.svg'} alt="eventwave1" />
          </div>

          <div className="main0puzzle">
            <img src={devUrl + '/pic/soya/puzzle1.svg'} alt="main0puzzle" />
          </div>
          <div className="main0circle">
            <img src={devUrl + '/pic/soya/circle.svg'} alt="main0circle" />
          </div>
        </main>

        <main className="main1">
          <div className="wrapper">
            <div className="evstart2cont d-flex justify-content-lg-between">
              <div className="evstart2titlebox">
                <div className="evstart2titleboxbox d-flex">
                  <div className="evstart2titleiconbox">
                    <FaFontAwesomeFlag className="evstart2titleicon" />
                  </div>
                  <div className="evstart2title">
                    <div className="evstart2title1">STEP1</div>
                    <div className="evstart2title2">活動資訊</div>
                  </div>
                </div>
                <div className="step1imggbox d-flex">
                  <img
                    className="step1imgg d-flex"
                    src={devUrl + '/pic/soya/step1.svg'}
                    alt="step1"
                  />
                </div>
                <div className="step1content">
                  首先步驟一，您必須填寫一些基本的個人資訊和基本的活動資訊，像是姓名、電話、信箱等等，這些都是發起一個活動必備的條件，而活動的開始和結束時間、地點和集合點，也可以讓其他參與者來評估有沒有空來參與這個攝影揪團活動。
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    marginTop: '120px',
                    width: '376px',
                    height: '350px',
                  }}
                >
                  <img
                    className="d-flex cover-fit"
                    src={devUrl + '/pic/soya/eventstartphoyo1.jpg'}
                    alt="step1"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
              <div className="evstart2formbox">
                <div className="evstart2formboxbox">
                  <div className="row justify-content-center">
                    <div className="cardboxmargin">
                      <div className="afterfinish">
                        <div className="card p-5">
                          {/* <div className="checkboxname d-flex">
                            <input type="checkbox" />
                            <div className="checkboxnamename">同會員資料</div>
                          </div> */}
                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter staraftername">
                                聯絡人姓名
                              </div>
                            </div>

                            <div className="inputbox">
                              <input
                                required
                                name="contactname"
                                type="text"
                                placeholder="請輸入名字"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setContactname(e.target.value)
                                }}
                                id="contactname"
                              />
                              {/* <ErrorMessage
                                name="contactname"
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
                              </ErrorMessage> */}
                            </div>
                          </div>
                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">聯絡人電話</div>
                            </div>

                            <div className="inputbox">
                              <input
                                name="phone"
                                type="tel"
                                placeholder="請輸入電話號碼"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setContactPhone(e.target.value)
                                }}
                                id="contactphone"
                              />
                              {/* <ErrorMessage
                                name="phone"
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
                              </ErrorMessage> */}
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">連絡人信箱</div>
                            </div>

                            <div className="inputbox">
                              <input
                                name="email"
                                type="email"
                                placeholder="請輸入信箱"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setContactemail(e.target.value)
                                }}
                                id="contactemail"
                              />
                              {/* <ErrorMessage
                                name="email"
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
                              </ErrorMessage> */}
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle"></div>
                              <div className="starafter">
                                聯絡人<span>LINE</span>
                              </div>
                            </div>
                            <div
                              className="inputbox"
                              style={{ marginBottom: 0 }}
                            >
                              <input
                                name="lineid"
                                type="text"
                                placeholder="請輸入LINE ID"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setContactlineid(e.target.value)
                                }}
                                id="contactlineid"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="card p-5 cardposition"
                          style={{ marginBottom: '10px' }}
                        >
                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">活動開始時間</div>
                            </div>

                            <div className="inputbox">
                              <SelectTime
                                // setStartDate={setStartDate}
                                id="startdate"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox2 starbox d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">活動結束時間</div>
                            </div>

                            <div className="inputbox">
                              <SelectTime2
                                // setEndDate={setEndDate}
                                id="enddate"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox starbox2 d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">活動地點</div>
                            </div>

                            <div className="inputbox">
                              <input
                                required
                                type="text"
                                placeholder="請輸入活動地點"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActlocaction(e.target.value)
                                }}
                                id="actlocaction"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox starbox2 d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">活動城市</div>
                            </div>

                            <div className="inputbox">
                              <select
                                className="form-control form-control-md card-input"
                                style={{ width: '240px' }}
                                onChange={(e) => {
                                  setActcity(e.target.value)
                                }}
                                id="actcity"
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

                          <div className="d-flex contentboxinput">
                            <div className="starbox starbox2 d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">活動地址</div>
                            </div>

                            <div className="inputbox">
                              <input
                                placeholder="請輸入活動詳細地址"
                                type="text"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActexactlocaction(e.target.value)
                                }}
                                id="acttexactlocaction"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox starbox2 d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">集合地點</div>
                            </div>
                            <div className="inputbox">
                              <input
                                placeholder="請輸入集合地點"
                                type="text"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActclump(e.target.value)
                                }}
                                id="actclump"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox starbox2 d-flex">
                              <div className="startitle">*</div>
                              <div className="starafter">集合地址</div>
                            </div>

                            <div className="inputbox">
                              <input
                                placeholder="請輸入集合詳細地址"
                                type="text"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActexactclump(e.target.value)
                                }}
                                id="actexactclump"
                              />
                            </div>
                          </div>
                          <button
                            onClick={ScrollTo1}
                            className="btn eventstartbtn rounded-pill"
                            type="submit"
                          >
                            確認
                          </button>
                          <div>
                            <img
                              src={devUrl + '/pic/soya/puzzle2.svg'}
                              alt="puzzle2"
                              className="puzzle2step1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <main className="main2">
          <div className="eventwave2">
            <img src={devUrl + '/pic/soya/eventwave2.svg'} alt="eventwave2" />
          </div>
          <div className="wrapper">
            <div
              className="evstart2cont d-flex justify-content-lg-between"
              style={{ marginTop: '70px' }}
            >
              <div className="evstart2titlebox evstart2titlebox2">
                <div className="evstart2titleboxbox d-flex">
                  <div className="evstart2titleiconbox">
                    <FaFontAwesomeFlag className="evstart2titleicon" />
                  </div>
                  <div className="evstart2title">
                    <div className="evstart2title1">STEP2</div>
                    <div className="evstart2title2">報名事項</div>
                  </div>
                </div>
                <div className="step1imggbox d-flex">
                  <img
                    className="step1imgg d-flex"
                    src={devUrl + '/pic/soya/step2.svg'}
                    alt="step1"
                  />
                </div>
                <div className="step1content">
                  接下來是步驟二，就是填寫報名的各種事項，包含報名的截止時間、收費的價格、付款方式，還有最後的成團所需要的人數跟人數上限，完成了這個步驟後，您的攝影揪團活動幾乎已經快要完成了，就剩最後的詳細資訊。
                </div>
              </div>
              <div className="evstart2formbox">
                <div className="evstart2formboxbox">
                  <div className="row justify-content-center">
                    <div className="cardboxmargin cardboxmargin2">
                      <div className="afterfinish">
                        <div
                          className="card p-5 cardposition2"
                          style={{
                            marginBottom: '0px',
                            background: 'white',
                          }}
                        >
                          <div className="d-flex contentboxinput">
                            <div className="starbox d-flex starbox2">
                              <div className="startitle">*</div>
                              <div className="starafter">報名截止時間</div>
                            </div>
                            <div className="inputbox">
                              <SelectTime3
                                setActsignupdead={setActsignupdead}
                              />
                            </div>
                          </div>
                          <div className="d-flex contentboxinput">
                            <div className="starbox d-flex starbox2">
                              <div className="startitle">*</div>
                              <div className="starafter">費用</div>
                            </div>

                            <div className="inputbox">
                              <input
                                placeholder="請輸入費用"
                                type="number"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActprice(e.target.value)
                                }}
                                id="actprice"
                              />
                            </div>
                          </div>

                          {/* <div className="d-flex contentboxinput">
                            <div className="starbox d-flex starbox2">
                              <div className="startitle">*</div>
                              <div className="starafter">付款方式</div>
                            </div>

                            <div className="inputbox">
                              <input
                                placeholder="請輸入付款方式"
                                type="text"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActpricemethod(e.target.value)
                                }}
                              />
                            </div>
                          </div> */}

                          <div className="d-flex contentboxinput">
                            <div className="starbox d-flex starbox2">
                              <div className="startitle">*</div>
                              <div className="starafter">成團人數</div>
                            </div>
                            <div className="inputbox">
                              <input
                                placeholder="請輸入成團人數"
                                type="number"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActpeople(e.target.value)
                                }}
                                id="actpeople"
                              />
                            </div>
                          </div>

                          <div className="d-flex contentboxinput">
                            <div className="starbox d-flex starbox2">
                              <div className="startitle">*</div>
                              <div className="starafter">人數上限</div>
                            </div>
                            <div className="inputbox">
                              <input
                                placeholder="請輸入人數上限"
                                type="number"
                                className="form-control form-control-md card-input"
                                onChange={(e) => {
                                  setActpeopleline(e.target.value)
                                }}
                                id="actpeopleline"
                              />
                            </div>
                          </div>
                          <button
                            onClick={ScrollTo2}
                            className="btn eventstartbtn rounded-pill"
                          >
                            確認
                          </button>
                          <div>
                            <img
                              src={devUrl + '/pic/soya/puzzle3.svg'}
                              alt="puzzle3"
                              className="puzzle3step2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={devUrl + '/pic/soya/circle2.svg'}
                alt="circle2"
                className="circle2step2"
                style={{ width: '140px' }}
              />
            </div>
          </div>
          <div className="eventwave3">
            <img src={devUrl + '/pic/soya/eventwave3.svg'} alt="eventwave3" />
          </div>
        </main>

        <main className="main3">
          <div className="wrapper">
            <div className="evstart2cont d-flex flex-column align-items-center justify-content-center">
              <div className="evstart2titlebox">
                <div className="evstart2titleboxbox d-flex">
                  <div className="evstart2titleiconbox">
                    <FaFontAwesomeFlag className="evstart2titleicon" />
                  </div>
                  <div className="evstart2title">
                    <div className="evstart2title1">STEP3</div>
                    <div className="evstart2title2">詳細資訊</div>
                  </div>
                </div>
                <div className="step1imggbox d-flex">
                  <img
                    className="step1imgg d-flex"
                    src={devUrl + '/pic/soya/step3.svg'}
                    alt="step1"
                  />
                </div>
                <div className="step1content">
                  接下來是步驟三，這邊需要發起活動者填寫更詳細的資訊，以便這個揪團活動可以吸引更多人來參加，如果覺得很麻煩也沒關係，這些詳細資訊可以之後再做更多的填寫，這邊只需要填寫完活動標題和選擇您的主題，就可以快速的完成此步驟。
                </div>
              </div>

              <div className="evstartformbox3">
                <div className="evstartformboxbox3">
                  <div className="row justify-content-center">
                    <div className="cardboxmargin3">
                      <div className="afterfinish3">
                        <div className="card3 p-5">
                          <div className="titlepagebox">
                            <div className="titlepagetitle d-flex">封面圖</div>
                            <div className="titlepagebtnbox d-flex">
                              <button
                                className="btn titlepagebtn rounded-pill d-flex"
                                style={{
                                  position: 'relative',
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

                            <div className="titlepageimgbox d-flex">
                              <img
                                src={uploadimg}
                                alt="aaa"
                                className="cover-fit titlepageimg"
                              />
                            </div>
                            <div className="titlepagebrow d-flex justify-content-center">
                              圖片預覽
                            </div>
                          </div>
                          <div className="step3titlebox d-flex">
                            <div className="startitle3">*</div>
                            <div className="starafter3">活動標題</div>
                          </div>

                          <div className="inputbox3">
                            <input
                              placeholder="請輸入活動標題"
                              type="text"
                              className="form-control form-control-lg card-input"
                              onChange={(e) => {
                                setActtitle(e.target.value)
                              }}
                              id="acttitle"
                            />
                          </div>

                          <div className="step3titlebox d-flex">
                            <div className="startitle3">*</div>
                            <div className="starafter3">活動主題</div>
                          </div>

                          <select
                            className="custom-select custom-select-lg inputbox3"
                            onChange={(e) => {
                              setActtheme(e.target.value)
                            }}
                            id="acttheme"
                          >
                            {tags.map((val) => {
                              return (
                                <option
                                  key={val.event_theme_id}
                                  value={val.event_theme_id}
                                >
                                  {val.event_theme_name}
                                </option>
                              )
                            })}
                          </select>

                          <div className="step3titlebox d-flex">
                            <div className="startitle3"></div>
                            <div className="starafter3">詳細資訊</div>
                          </div>
                          <div className="card3sm p-4">
                            <textarea
                              className="textareadet"
                              placeholder="請輸入詳細資訊..."
                              onChange={(e) => {
                                setActdetail(e.target.value)
                              }}
                              style={{ textIndent: '5px' }}
                              id="actdetail"
                            ></textarea>
                          </div>

                          <div className="step3titlebox d-flex">
                            <div className="startitle3"></div>
                            <div className="starafter3">活動標籤</div>
                          </div>

                          <div className="card3sm p-4">
                            <div className="inputbox row">
                              <input
                                type="text"
                                placeholder="新增標籤"
                                className="form-control form-control-md card-input col"
                                onChange={(e) => {
                                  setActtags(e.target.value)
                                }}
                                id="acttags"
                              />
                              <input
                                style={{ margin: '0 10px' }}
                                type="text"
                                placeholder="新增標籤"
                                className="form-control form-control-md card-input col"
                                // onChange={(e) => {
                                //   setActtags(e.target.value)
                                // }}
                              />
                              <input
                                type="text"
                                placeholder="新增標籤"
                                className="form-control form-control-md card-input col"
                                // onChange={(e) => {
                                //   setActtags(e.target.value)
                                // }}
                              />
                            </div>
                            {/* <textarea
                              className="textareatag"
                              placeholder="新增標籤..."
                              onChange={(e) => {
                                setActtags(e.target.value)
                              }}
                              style={{ textIndent: '5px' }}
                            ></textarea> */}
                          </div>
                          <div className="finalcomfbrow d-flex">
                            {/* <button
                              className="btn finalcomfbrowbtn finalcomfbrowbtn1 rounded-pill"
                              style={{ background: '#10B9B2' }}
                            >
                              預覽
                            </button> */}
                            <button
                              onClick={ScrollTo3}
                              className="btn finalcomfbrowbtn rounded-pill"
                            >
                              確認
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="puzzle4box d-flex">
                        <img
                          src={devUrl + '/pic/soya/puzzle4.svg'}
                          alt="puzzle4"
                          className="puzzle4la"
                        />
                      </div>
                      <div className="puzzle4box1 d-flex">
                        <img
                          src={devUrl + '/pic/soya/puzzle4.svg'}
                          alt="puzzle4"
                          className="puzzle4la1"
                        />
                      </div>
                      <div className="puzzle4box2 d-flex">
                        <img
                          src={devUrl + '/pic/soya/puzzle4.svg'}
                          alt="puzzle4"
                          className="puzzle4la2"
                        />
                      </div>
                      <div className="circlelabox3 d-flex">
                        <img
                          src={devUrl + '/pic/soya/circle.svg'}
                          alt="circle"
                          className="circlela"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <main className="main4">
          <div className="eventwave4">
            <img
              className="cover-fit"
              src={devUrl + '/pic/soya/wavestep4.svg'}
              alt="eventwave4"
            />
          </div>

          <div className="wrapper">
            <div className="evstart2cont d-flex flex-column align-items-center justify-content-center">
              <div className="evstart2titlebox">
                <div className="evstart2titleboxbox d-flex">
                  <div className="evstart2titleiconbox">
                    <FaFontAwesomeFlag className="evstart2titleicon" />
                  </div>
                  <div className="evstart2title">
                    <div className="evstart2title1">STEP4</div>
                    <div className="evstart2title2">發布活動</div>
                  </div>
                </div>
                <div className="step1imggbox d-flex">
                  <img
                    className="step1imgg d-flex"
                    src={devUrl + '/pic/soya/step4.svg'}
                    alt="step1"
                  />
                </div>
                <div className="step1content">
                  您已經完成了所有的填寫步驟，在最後的步驟四，您只需要閱讀完所有的資訊和確認你的活動內容無誤，點選建立活動即可發起一個全新的活動，最後我們期待您有一個非常棒的攝影揪團活動。
                </div>
                <div className="checkboxread d-flex">
                  <input type="checkbox" />
                  <div className="alreadyread">我已詳讀所有資訊</div>
                </div>

                <div className="d-flex gotoactbox">
                  {/* <Link to="/"> */}
                  <button
                    onClick={handleShow}
                    className="btn gotoact rounded-pill"
                  >
                    建立活動
                  </button>
                  {/* </Link> */}
                </div>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>建立活動</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>確認要送出表單並建立活動嗎?</Modal.Body>
                  <Modal.Footer>
                    <Button
                      style={{ color: 'white' }}
                      variant="secondary"
                      onClick={handleClose}
                    >
                      關閉
                    </Button>

                    <Button variant="primary" onClick={eventform}>
                      確認
                    </Button>
                  </Modal.Footer>
                </Modal>

                <div className="step4smguy1box">
                  <img
                    className="step4smguy1 cover-fit"
                    src={devUrl + '/pic/soya/step4smguy1.svg'}
                    alt="step4smguy1"
                  />
                </div>
                <div className="step4smguy2box">
                  <img
                    className="step4smguy2 cover-fit"
                    src={devUrl + '/pic/soya/step4smguy2.svg'}
                    alt="step4smguy2"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default withRouter(EventStart)
