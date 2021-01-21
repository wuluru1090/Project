import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdImage, MdSave, MdCancel } from 'react-icons/md'
import Axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function EventAlbum(props) {
  window.scrollTo(0, 0)
  const eventId = props.match.params.id
  window.sessionStorage.setItem('logIn', '4')
  const loginId = window.sessionStorage.getItem('logIn')
  // console.log(loginId)

  //預設顯示的相簿
  const [defaultPhoto, setDefaultPhoto] = useState([])

  //預設活動細節
  const [eventInfo, setEventInfo] = useState({})

  //預設會員照片
  const [memberImg, setMemberImg] = useState([])

  //react-bootstrap modal
  const [lgShow, setLgShow] = useState(false)

  //取得所有照片資料
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/album/${eventId}`)
      .then((response) => {
        setDefaultPhoto(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  // 取得會員照片資料
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/api/event/memberalbum?eventId=${eventId}&memberId=${loginId}`
    )
      .then((response) => {
        // console.log(response.data)
        setMemberImg(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  //取的活動資料
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/event/${eventId}`)
      .then((response) => {
        setEventInfo(response.data[0])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function isOneDay(date1, date2) {
    let startDate = date1.split('-')
    let endDate = date2.split('-')
    return parseInt(endDate[2]) - parseInt(startDate[2]) <= 0 ? true : false
  }
  //單獨轉換json日期
  function dateConvert(jsonDate) {
    let json = String(jsonDate).split(' ')

    let date = new Date(json[0])
    let dd = date.getDate()
    let mm = date.getMonth() + 1

    let yyyy = date.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    date = yyyy + '-' + mm + '-' + dd
    return date
  }

  const [updateList, setUpdateList] = useState([])
  const [deleteList, setDeleteList] = useState([])
  //上傳函式
  const add2Update = (photoId) => {
    alert(photoId)
    // console.log(typeof photoId)
    console.log(Array.isArray(updateList))
    if (!updateList.includes(photoId)) {
      console.log('yes')
      // setUpdateList([...updateList, photoId])
      // console.log(updateList)
      // console.log([...updateList, photoId])
    }
    // else {
    //   const newList = updateList.filter((v) => v !== photoId)
    //   setUpdateList(newList)
    //   console.log(updateList)
    // }
  }

  return (
    <>
      <div className="album-page">
        <div className="go-back d-flex align-items-center">
          <MdKeyboardArrowLeft />
          <a href={`/event/${eventId}`}>回到活動頁</a>
        </div>

        <div className="title row d-flex justify-content-between">
          <div className="word col-9">
            <h6>
              {isOneDay(
                dateConvert(eventInfo.event_start_time),
                dateConvert(eventInfo.event_end_time)
              )
                ? `${dateConvert(eventInfo.event_start_time)}`
                : `${dateConvert(eventInfo.event_start_time)} ~ 
                      ${dateConvert(eventInfo.event_end_time)} `}
            </h6>
            <h5>{eventInfo.event_name}</h5>
          </div>

          <button
            className="btn rounded-pill upload-button align-items-center d-flex"
            onClick={() => setLgShow(true)}
          >
            <MdImage
              size={30}
              style={{ color: 'white', paddingRight: '6px' }}
            />
            <span>上傳圖片</span>
          </button>
        </div>
        {/* 圖片部分開始 */}
        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            {defaultPhoto.length > 0 ? (
              defaultPhoto.map((val) => {
                return (
                  <>
                    <div className="photo-card col-4">
                      <figure>
                        <img
                          src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                          alt=""
                        ></img>
                      </figure>
                      <div>
                        <p className="subtitle1">
                          by&nbsp;&nbsp;{val.member_name}
                        </p>
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <div style={{ fontSize: '18px' }}>尚無照片顯示</div>
            )}
          </div>
        </div>
      </div>
      {/* 編輯&上傳 */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            style={{ fontSize: '18px' }}
          >
            上傳/編輯圖片
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>從我的相簿中選擇上傳</div>
          <div className="photo-content d-flex flex-wrap row">
            {memberImg.map((val) => {
              return val.photo_show == 1 ? (
                <div
                  className="image col-4"
                  onClick={() => {
                    // alert(val.photo_id)
                  }}
                >
                  <figure>
                    <img
                      src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                      alt=""
                    />
                    <div className="gray">已上傳</div>
                  </figure>
                </div>
              ) : (
                <div
                  className="image col-4"
                  onClick={() => {
                    add2Update(val.photo_id)
                  }}
                >
                  <figure>
                    <img
                      src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                      alt=""
                    />
                  </figure>
                </div>
              )
            })}
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button
            variant="secondary"
            className="btn rounded-pill align-items-center d-flex"
            style={{ padding: '8px 16px', color: '#ffffff' }}
          >
            <MdCancel
              size={30}
              style={{ color: 'white', paddingRight: '6px' }}
            />
            關閉
          </Button> */}
          <Button
            variant="primary"
            className="btn rounded-pill align-items-center d-flex"
            style={{ padding: '8px 16px' }}
          >
            <MdSave size={30} style={{ color: 'white', paddingRight: '6px' }} />
            儲存
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default withRouter(EventAlbum)
