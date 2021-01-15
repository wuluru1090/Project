import React, { useState, useEffect } from 'react'
import '../../style/class/main_class.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'

// 元素
import ClassCard from './ClassCard'
import GMap from './GMap'
import Carousel1 from './Carousel1'
import MyNavbar from '../../components/Main/MyNavbar'
import Carousel2 from '../../components/Class/Carousel2'
import Card from '../Class/ClassCard2'
import FixedBottom from '../Class/FixedBottom'

//GMap地圖Pin標記位置
const location = {
  address: '320桃園市中壢區中大路300號',
  lat: 24.96803,
  lng: 121.19498,
}

// let dataDB = require('../../data.json')
// let datadbma = dataDB[2].data
// { id = 4, data = datadbma, type = 'project_class' }
function ClassMain(props) {
  console.log(props)
  const [classData, setClassData] = useState([])

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

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/${props.match.params.id}`)
      .then((response) => {
        console.log(response.data)
        setClassData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      {classData.map((val) => {
        console.log(val)
        return (
          <div className="class_wave_background test">
            <div className="mainclass_wrapper">
              <div className="page-head">
                <div>
                  <h6 className="subtitle1">
                    {dateConvert(val.class_start_date)}&nbsp;~&nbsp;
                    {dateConvert(val.class_end_date)}
                  </h6>
                  <h5>{val.class_name}</h5>
                </div>
                <div className="page-head-part2">
                  <div className="organizer_info">
                    <figure className="organizer">
                      <img
                        src={devUrl + '/pic/class/' + val.class_teacher_photo}
                        alt=""
                      />
                    </figure>
                    <span>
                      {val.class_teacher_name}
                      <br />
                      <span style={{ fontSize: '12px' }}>發起的活動</span>
                    </span>
                  </div>
                  <div className="btn_part">
                    <button className="btn bttn save rounded-pill">
                      <MdBookmark
                        size={30}
                        style={{ color: 'white', paddingRight: '6px' }}
                      />
                      <span className="align-middle">收藏</span>
                    </button>
                    <button className="btn bttn share rounded-pill">
                      <MdShare
                        size={30}
                        style={{ color: 'white', paddingRight: '6px' }}
                      />
                      <span className="align-middle">分享</span>
                    </button>
                  </div>
                </div>
                <div className="bread_crumb">麵包屑放置處</div>
              </div>
              <div className="page-head-part3">
                <div className="content_big_part">
                  <div>
                    <figure className="class_pic">
                      <img
                        src={devUrl + '/pic/class/' + val.class_main_pic}
                        alt="課程圖片"
                      />
                    </figure>
                  </div>
                  <h5 className="class_title">課程特色</h5>
                  <div className="line"></div>
                  <ul className="features">
                    <li>{val.class_features1}</li>
                    <li>{val.class_features2}</li>
                    <li>{val.class_features3}</li>
                  </ul>
                  <h5 className="class_title">課程內容</h5>
                  <div className="line"></div>
                  <p dangerouslySetInnerHTML={{ __html: val.class_content }} />
                  {/* <p>{data[id].class_content}</p> */}
                  <h5 className="class_title">授課老師</h5>
                  <div className="line"></div>
                  <div className="teacher">
                    <figure className="teacher_pic">
                      <img
                        src={devUrl + '/pic/class/' + val.class_teacher_photo}
                        alt="老師圖片"
                      />
                    </figure>
                    <div className="teacher_info_block">
                      <h5 className="class_teacher">
                        {val.class_teacher_name}
                      </h5>
                      <p className="teacher_intro">{val.class_teacher_intro}</p>
                    </div>
                  </div>
                </div>
                <div className="left_part">
                  <ClassCard />
                  <div className="gmap">
                    <GMap location={location} zoomLevel={15} />
                  </div>
                </div>
              </div>
            </div>
            <div className="wave_background2">
              <div className="gallery_part">
                <h4>學員攝影作品</h4>
                <div className="line2"></div>
                <div className="member_photo_showcase">
                  <Carousel1 />
                </div>
              </div>
            </div>
            <div className="mainclass_wrapper">
              <h5 className="class_suggest">相似課程</h5>
              <div className="line"></div>
              <div className="bottom-carousel">
                <Carousel2 />
              </div>
            </div>
            <div>
              <FixedBottom />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(ClassMain)
