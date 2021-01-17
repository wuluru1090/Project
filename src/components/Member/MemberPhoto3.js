import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'
import { MdCameraAlt } from 'react-icons/md'
import { Card } from 'react-bootstrap'
import { devUrl } from '../../config'
// import './styles.css'

class MemberPhoto extends React.Component {
  state = {
    img: '',
  }
  onChange = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener('load', this.fileLoad)
    fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
  }
  // e為第13行發出load之事件
  fileLoad = (e) => {
    this.setState({
      img: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  submit = (e) => {
    Axios.post(`http://localhost:3001/api/update/img/21`, {
      img: this.state.img,
    })
  }
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="mem_img_box ">
          <img
            className="mem_img rounded-circle"
            style={{ width: '160px', height: '160px', cursor: ' pointer ' }}
            variant="top"
            src={this.state.img}
            alt=""
            id="submitmemphoto-button-file"
          />
        </div>
        <div class="position-relative">
          <input
            accept="image/*"
            className=""
            style={{ display: 'none' }}
            id="iconmemphoto-button-file"
            type="file"
            onChange={this.onChange}
          />
          <button
            style={{ display: 'none' }}
            id="submitmemphoto-button-file"
            onClick={this.submit}
          >
            上傳
          </button>
          <label htmlFor="iconmemphoto-button-file">
            <MdCameraAlt
              aria-label="upload picture"
              component="span"
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
  }
}
export default MemberPhoto
