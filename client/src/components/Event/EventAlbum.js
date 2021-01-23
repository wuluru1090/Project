import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/event/event_album.scss'
import { devUrl } from '../../config'
import { withRouter, useHistory } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdImage, MdSave, MdCancel } from 'react-icons/md'
import Axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function EventAlbum(props) {
  window.scrollTo(0, 0)
  const eventId = props.match.params.id
  let history = useHistory()
  const isAuth = props.isAuth
  const [loginId, setLogInId] = useState()

  // 是否是登入狀態
  useEffect(() => {
    if (isAuth === true) {
      const id = window.sessionStorage.getItem('useriddd')
      setLogInId(id)
    }
  }, [isAuth])

  //預設顯示的相簿
  const [defaultPhoto, setDefaultPhoto] = useState([])

  //預設活動細節
  const [eventInfo, setEventInfo] = useState({})

  //預設會員照片
  const [memberImg, setMemberImg] = useState([])

  //react-bootstrap modal
  const [lgShow, setLgShow] = useState(false)
  const handleClose = () => setLgShow(false)

  //取得所有照片資料
  const getAllPhoto = () => {
    Axios.get(`http://localhost:3001/api/event/album/${eventId}`)
      .then((response) => {
        setDefaultPhoto(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  //取得會員照片狀態
  const getMemberPhoto = () => {
    if (loginId) {
      Axios.get(
        `http://localhost:3001/api/event/memberalbum?eventId=${eventId}&memberId=${loginId}`
      )
        .then((response) => {
          setMemberImg(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  //初始狀態
  useEffect(() => {
    getAllPhoto()
    getMemberPhoto()
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

  var updateList = []
  var deleteList = []

  const [status, setStatus] = useState('unupload')
  //上傳函式
  const add2Update = (photoId) => {
    // alert(photoId)
    if (!updateList.includes(photoId)) {
      updateList = [...updateList, photoId]
    } else {
      const newList = updateList.filter((v) => v !== photoId)
      updateList = newList
    }
  }

  const add2Delete = (photoId) => {
    if (!deleteList.includes(photoId)) {
      deleteList = [...deleteList, photoId]
    } else {
      const newList = deleteList.filter((v) => v !== photoId)
      deleteList = newList
    }
    console.log(deleteList)
  }

  const save = () => {
    Axios.put(
      `http://localhost:3001/api/event/eventaddphoto?photoId=${updateList.join(
        ','
      )}`
    ).then((response) => {
      console.log(response)
    })
    Axios.put(
      `http://localhost:3001/api/event/eventdeletephoto?photoId=${deleteList.join(
        ','
      )}`
    ).then((response) => {
      console.log(response)
    })
  }

  //檢視大圖
  const click2big = (photoName) => {
    let stringId = JSON.stringify(photoName)
    history.push('/event/' + eventId + '/album/' + photoName)
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

          {loginId && (
            <button
              className="btn rounded-pill upload-button align-items-center d-flex"
              onClick={() => {
                setLgShow(true)
              }}
            >
              <MdImage
                size={30}
                style={{ color: 'white', paddingRight: '6px' }}
              />
              <span>編輯我的圖片</span>
            </button>
          )}
        </div>
        {/* 圖片部分開始 */}
        <div className="album-slider d-flex justify-content-center">
          <div className="album-content row">
            {defaultPhoto.length > 0 ? (
              defaultPhoto.map((val) => {
                return (
                  <>
                    <div
                      className="photo-card col-4"
                      onClick={() => {
                        click2big(val.photo_name)
                      }}
                    >
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
          <div>
            活動相簿裡的圖片預設是與會員相簿裡同名活動相簿中的圖面相同。您可以在此選擇相片並按下儲存以決定您的圖片在此相簿的可見狀態。
          </div>
          <div className="photo-content d-flex flex-wrap row">
            {memberImg.map((val) => {
              return val.photo_show == 1 ? (
                <div
                  className="image col-4"
                  onClick={(e) => {
                    e.preventDefault()
                    add2Delete(val.photo_id)
                    if (document.querySelector(`#figure${val.photo_id}`)) {
                      if (deleteList.includes(val.photo_id)) {
                        document.querySelector(
                          `#figure${val.photo_id}`
                        ).innerHTML = '不可見'
                      } else {
                        document.querySelector(
                          `#figure${val.photo_id}`
                        ).innerHTML = '可見'
                      }
                    }
                  }}
                >
                  <figure>
                    <img
                      src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                      alt=""
                    />
                    <div className="gray" id={'figure' + val.photo_id}>
                      可見
                    </div>
                  </figure>
                </div>
              ) : (
                <div
                  className="image col-4 "
                  onClick={(e) => {
                    e.preventDefault()
                    add2Update(val.photo_id)
                    if (document.querySelector(`#figure${val.photo_id}`)) {
                      if (updateList.includes(val.photo_id)) {
                        document.querySelector(
                          `#figure${val.photo_id}`
                        ).innerHTML = '可見'
                      } else {
                        document.querySelector(
                          `#figure${val.photo_id}`
                        ).innerHTML = '不可見'
                      }
                    }
                  }}
                >
                  <figure>
                    <img
                      src={`${devUrl}/pic/event_pic/${val.photo_name}`}
                      alt=""
                      className="d-flex justify-content-center align-items-center"
                    />
                    <div className="gray" id={'figure' + val.photo_id}>
                      不可見
                    </div>
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
            onClick={() => {
              let saveNClose = async () => {
                await save()
                await handleClose()
                window.location.reload()
              }
              saveNClose()
            }}
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
