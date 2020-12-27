import React, { useState, useEffect } from 'react'

function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto justify-content-center">
        <div className="container">
          <ul className="nav d-flex justify-content-around">
            <li className="nav-item">
              <a className="nav-link " href="#">
                <img
                  src="images/item-apple.jpg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="images/item-apple.jpg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="images/item-apple.jpg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="images/item-apple.jpg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img
                  src="images/item-apple.jpg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
          </ul>
          <ul className="nav d-flex justify-content-around">
            <li className="nav-item">
              <a className="nav-link " href="#">
                課程
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                活動
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                首頁
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                收藏
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                我的
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
