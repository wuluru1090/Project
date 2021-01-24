import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { MdCameraAlt } from 'react-icons/md'
import { devUrl } from '../../config'
import { withRouter } from 'react-router-dom'
function MemberPhotoImg(props) {
  const [member, setMember] = useState([])
  const [member_img, setMemberImg] = useState([])

  const img = useEffect(() => {
    Axios.get(`http://localhost:3001/member/get/${props.match.params.id}`)
      .then(async (res) => {
        setMember(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const UpdateMemberImg = (member_id) => {
    console.log(member_img)

    Axios.put('http://localhost:3001/member/update/img', {
      member_id: member_id,
      member_img: member_img,
    }).then((res) => {
      setMember(
        member.map((val) => {
          return val.member_id === member_id
            ? {
                member_id: val.member_id,
                member_img: val.member_img,
              }
            : val
        })
      )
    })
  }

  function upUp() {
    setTimeout(function () {
      document.getElementById('putmemphoto-button-file').click()
      setTimeout(window.location.reload(), 500)
    }, 500)
  }

  return (
    <>
      {member.map((val) => {
        return (
          <div className="d-flex justify-content-center align-items-center">
            <div className="mem_img_box ">
              <img
                className="mem_img rounded-circle"
                style={{
                  width: '160px',
                  height: '160px',
                  cursor: ' pointer ',
                }}
                variant="top"
                src={devUrl + `/pic/mem_img/${val.member_img}`}
                alt=""
              />
            </div>

            <div class="position-relative">
              <input
                className=""
                style={{ display: 'none' }}
                id="iconmemphoto-button-file"
                type="file"
                onChange={(e) => {
                  setMemberImg(e.target.value.split('\\').pop())
                  upUp()
                }}
              />

              <button
                style={{ display: 'none' }}
                id="putmemphoto-button-file"
                onClick={() => {
                  UpdateMemberImg(val.member_id)
                }}
              >
                上傳
              </button>

              <label htmlFor="iconmemphoto-button-file">
                <MdCameraAlt
                  aria-label="upload picture"
                  component="span"
                  title="選擇照片上傳"
                  className=" position-absolute  translate-middle "
                  style={{
                    width: '42px',
                    height: '42px',
                    top: '40px',
                    right: '-5px',
                    color: '#104b6d',
                    cursor: ' pointer ',
                  }}
                />
              </label>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default withRouter(MemberPhotoImg)
