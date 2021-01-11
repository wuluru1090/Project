import React from 'react'
import { devUrl } from '../../config'
import '../../style/footer_custom.scss'
function Footer() {
  return (
    <>
      <footer className="footer bg-primary mt-auto justify-content-center">
        <div className="container">
          <ul className="nav justify-content-around">
            <li className="nav-item">
              <a className="nav-link  subtitle1 " href="#">
                關於我們
              </a>
              <li>
                <a
                  className="nav-link  subtitle2
                 "
                  href="#"
                >
                  品牌故事
                </a>
              </li>
            </li>
            <li className="nav-item">
              <a
                className="nav-link subtitle1
"
                href="#"
              >
                加入會員
              </a>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  註冊會員
                </a>
              </li>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  登入會員
                </a>
              </li>
              <li>
                <a
                  className="nav-link  subtitle2
                  "
                  href="#"
                >
                  推薦會員
                </a>
              </li>
            </li>
            <li className="nav-item ">
              <a className="nav-link subtitle1" href="#">
                下載app
              </a>
              <ul className="nav d-flex justify-content-around ">
                <li className="nav-link">
                  <img
                    src={devUrl + '/pic/pic/btn_app_android.png'}
                    alt=""
                  ></img>
                </li>
                <li className="nav-link">
                  <img src={devUrl + '/pic/pic/btn_app_ios.png'} alt=""></img>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <a className="nav-link justify-content-around subtitle1" href="#">
                聯絡我們
              </a>
              <ul className="nav d-flex justify-content-around">
                <li>
                  <img
                    className="nav-link icon"
                    src={devUrl + '/pic/SVG/FB.svg'}
                    alt=""
                  ></img>
                </li>
                <li>
                  <img
                    className="nav-link icon"
                    src={devUrl + '/pic/SVG/ig.svg'}
                    alt=""
                  ></img>
                </li>
                <li>
                  <img
                    className="nav-link icon"
                    src={devUrl + '/pic/SVG/Twitter.svg'}
                    alt=""
                  ></img>
                </li>
                <li>
                  <img
                    className="nav-link icon"
                    src={devUrl + '/pic/SVG/Pinterst.svg'}
                    alt=""
                  ></img>
                </li>
              </ul>
            </li>
          </ul>

          <div className="container justify-content-center">
            <p className="text-muted d-flex justify-content-center Overline">
              ©2020 JoinIn All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
