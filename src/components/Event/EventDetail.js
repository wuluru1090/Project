import React from 'react'
// import '../../style/default.scss'
import '../../style/event/event_detail.scss'
import { devUrl } from '../../config'
import { MdBookmark, MdShare } from 'react-icons/md'

// 元素
import EventDetailInfo from './EventDetailInfo'
import Card from './ClassCard2'
import GMap from './GMap'
import Carousel1 from './Carousel1'
import EventDetailAttendant from './EventDetailAttendant'

//GMap地圖Pin標記位置
const location = {
  address: '320桃園市中壢區中大路300號',
  lat: 24.96803,
  lng: 121.19498,
}

function EventDetail() {
  return (
    <>
      <div className="event_wave_background test">
        <div className="mainclass_wrapper">
          <div className="page-head">
            <div className="title">
              <h6 className="subtitle1">2020/05/30</h6>
              <h5>阿里山國家公園二日遊輕鬆拍</h5>
            </div>
            <div className="page-head-part2">
              <div className="organizer_info d-flex align-items-center">
                <div className="organizer">
                  <figure>
                    <img src={devUrl + '/Pic/pic/member.jpg'} alt="" />
                  </figure>
                </div>
                <span>
                  張思婷
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
              <div className="class_pic">
                <figure>
                  <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="課程圖片" />
                </figure>
              </div>
              <div className="underline-title">
                <h5 className="class_title">詳細資訊</h5>
                <div className="line"></div>
              </div>
              <p>
                攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
                薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。不要先入為主覺得攝影很複雜，實際上，攝影可能比你想的還要更複雜。既然如此，顧炎武講過一段耐人尋思的話，人生富貴駒過隙，唯有榮名壽金石。這句話改變了我的人生。攝影勢必能夠左右未來。一般來說，我認為，話雖如此，做好攝影這件事，可以說已經成為了全民運動。
                雨果說過一句發人省思的話，世上只有兩種力量，一種是劍，一。這是撼動人心的。諸葛亮深信，將不可驕，驕則失禮，失禮則人離，人離則眾叛。但願諸位理解後能從中有所成長。若發現問題比我們想像的還要深奧，那肯定不簡單。看看別人，再想想自己，會發現問題的核心其實就在你身旁。
                攝影，到底應該如何實現。攝影可以說是有著成為常識的趨勢。我們可以很篤定的說，這需要花很多時間來嚴謹地論證。了解清楚攝影到底是一種怎麼樣的存在，是解決一切問題的關鍵。
                薩迪相信，你在兩個仇人之間說話要有分寸，以免他們和好後你將無地自容。但願各位能從這段話中獲得心靈上的滋長。在人生的歷程中，攝影的出現是必然的。面對如此難題，我們必須設想周全。金纓曾提出，敗德之事非一，而酗酒者德必敗，傷生之事非一，而好色者生必傷。這句話決定了一切。
              </p>
              <div className="underline-title">
                <h5 className="class_title">參與者名單</h5>
                <div className="line"></div>
              </div>
              <EventDetailAttendant />
            </div>
            <div className="left_part">
              <EventDetailInfo />
              <button className="btn rounded-pill google-calender font-bold">
                <h5>+ 加入Google行事曆</h5>
              </button>
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
          <div className="cards">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default EventDetail
