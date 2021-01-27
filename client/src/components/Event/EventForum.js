import React, { useState, useEffect } from 'react'
import '../../style/event/event_forum.scss'
import { devUrl } from '../../config'
import Axios from 'axios'
import { DateConvert, TimeConvert } from '../Main/DateTimeConverter'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

function EventForum(props) {
  console.log(props)
  const [commentContent, setCommentContent] = useState('')
  const [commentData, setCommentData] = useState([])
  let memberInfo = ''
  if (props.memInfo) {
    memberInfo = props.memInfo
  }

  console.log(memberInfo)
  let history = useHistory()

  const comment = () => {
    Axios.post('http://localhost:3001/api/comment', {
      commentEventId: props.eventValue.id,
      commentMemberId: memberInfo.member_id,
      commentContent: commentContent,
      commentTime: new Date(),
    })
    let now = new Date()
    setCommentData([
      ...commentData,
      {
        member_name: memberInfo.member_name,
        member_img: memberInfo.member_img,
        comment_member_id: memberInfo.member_id,
        comment_content: commentContent,
        comment_time: now.toJSON(),
      },
    ])
    document.getElementById('commentArea').value = ''
  }

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/get/comment/${props.eventValue.id}`)
      .then((response) => {
        // console.log(response.data)
        setCommentData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div className="forum">
        {/* 標題 */}
        <div className="underline-title">
          <div
            className="detail-title"
            style={{
              color: '#ffffff',
              borderBottom: '3px solid #ffffff',
              borderBottomStyle: 'dashed',
              marginBottom: '46px',
              textAlign: 'left',
            }}
          >
            討論區
          </div>
        </div>
        {/* 留言 */}
        <div className="talk-card-area">
          {commentData.length <= 0 ? (
            <div>目前尚未有留言喔!</div>
          ) : (
            commentData.map((val) => {
              return (
                <>
                  <div className="talk-card d-flex">
                    <div className="talk-person d-flex align-items-center">
                      <figure className="talk-attendant-avatar">
                        <img
                          src={`${devUrl}/pic/mem_img/${val.member_img}`}
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="talk">
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="d-flex align-items-center"
                          style={{ marginBottom: '8px' }}
                        >
                          <div className="message-name subtitle1">
                            {val.member_name}
                          </div>
                          {props.eventValue.id == val.comment_member_id && (
                            <span className="identity host caption">主揪</span>
                          )}
                        </div>
                        <div className="timestamp">
                          <DateConvert jsonDate={val.comment_time} />
                          &nbsp;&nbsp;
                          <TimeConvert jsonTime={val.comment_time} />
                        </div>
                      </div>
                      <div className="message body2">{val.comment_content}</div>
                    </div>
                  </div>
                </>
              )
            })
          )}
        </div>
        {/* 輸入區 */}
        <div className="message-type-area">
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            className="my-message"
            placeholder="請在此輸入文字..."
            onChange={(e) => {
              setCommentContent(e.target.value)
            }}
            id="commentArea"
          ></textarea>
          <div className="d-flex justify-content-end forum-form">
            <button
              onClick={() => {
                if (memberInfo) {
                  comment()
                } else {
                  Swal.fire({
                    title: '登入會員即可留言!',
                    showCancelButton: true,
                    confirmButtonText: `去登入`,
                    cancelButtonText: '取消',
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      history.push('/login')
                    }
                  })
                }
              }}
              className="btn btn-primary rounded-pill bttn"
            >
              留言
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventForum
