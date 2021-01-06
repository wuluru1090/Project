import React from 'react'
import '../../style/event/event_forum.scss'
import { devUrl } from '../../config'

function EventForum() {
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
          ></textarea>
          <form className="d-flex justify-content-end forum-form">
            <button type="submit" className="btn btn-primary rounded-pill bttn">
              留言
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EventForum
