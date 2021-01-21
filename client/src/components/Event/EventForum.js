<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import '../../style/event/event_forum.scss'
import { devUrl } from '../../config'
import Axios from 'axios'
import { DateConvert, TimeConvert } from '../Main/DateTimeConverter'

function EventForum(props) {
  // console.log(props.eventValue)
  const [commentContent, setCommentContent] = useState('')
  const [commentData, setCommentData] = useState([])

  const comment = () => {
    Axios.post('http://localhost:3001/api/comment', {
      commentEventId: props.eventValue.id,
      commentMemberId: 13,
      commentContent: commentContent,
      commentTime: new Date(),
    })
    let now = new Date()
    setCommentData([
      ...commentData,
      {
        member_name: '登入的使用者',
        comment_member_id: 13,
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

=======
import React from 'react'
import '../../style/event/event_forum.scss'
import { devUrl } from '../../config'

function EventForum() {
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
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
<<<<<<< HEAD
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
=======
          <div className="talk-card d-flex">
            <div className="talk-person d-flex align-items-center">
              <figure className="talk-attendant-avatar">
                <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="" />
              </figure>
            </div>
            <div className="talk">
              <div
                className="d-flex align-items-center"
                style={{ marginBottom: '8px' }}
              >
                <div className="message-name subtitle1">陳宇軒</div>
                <span className="identity host caption">主揪</span>
              </div>
              <div className="message body2">
                高爾基曾經提到過，要重返生活就須有所奉獻。強烈建議大家把這段話牢牢記住。裡根曾說過一句意義深遠的話，我認為今天有些父母所犯的最大的錯誤是，忽視了對孩子的關心與照顧，以及有效的鼓勵孩子們的責任感和認識到自我價值。
              </div>
            </div>
          </div>

          <div className="talk-card d-flex">
            <div className="talk-person d-flex align-items-center">
              <figure className="talk-attendant-avatar">
                <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="" />
              </figure>
            </div>
            <div className="talk">
              <div
                className="d-flex align-items-center"
                style={{ marginBottom: '8px' }}
              >
                <div className="message-name subtitle1">陳欣雯</div>
                <span className="identity attendants caption">參與者</span>
              </div>
              <div className="message body2">
                高爾基曾經提到過，要重返生活就須有所奉獻。強烈建議大家把這段話牢牢記住。
              </div>
            </div>
          </div>

          <div className="talk-card d-flex">
            <div className="talk-person d-flex align-items-center">
              <figure className="talk-attendant-avatar">
                <img src={devUrl + '/pic/SVG/class_pic.svg'} alt="" />
              </figure>
            </div>
            <div className="talk">
              <div
                className="d-flex align-items-center"
                style={{ marginBottom: '8px' }}
              >
                <div className="message-name subtitle1">陳欣雯</div>
                <span className="identity attendants caption">參與者</span>
              </div>
              <div className="message body2">
                高爾基曾經提到過，要重返生活就須有所奉獻。強烈建議大家把這段話牢牢記住。
              </div>
            </div>
          </div>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
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
<<<<<<< HEAD
            onChange={(e) => {
              setCommentContent(e.target.value)
            }}
            id="commentArea"
          ></textarea>
          <div className="d-flex justify-content-end forum-form">
            <button
              onClick={comment}
              className="btn btn-primary rounded-pill bttn"
            >
              留言
            </button>
          </div>
=======
          ></textarea>
          <form className="d-flex justify-content-end forum-form">
            <button type="submit" className="btn btn-primary rounded-pill bttn">
              留言
            </button>
          </form>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
        </div>
      </div>
    </>
  )
}

export default EventForum
