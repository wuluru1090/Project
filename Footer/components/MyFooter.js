import React, { useState, useEffect } from 'react'
import { FaReact } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
const IconButton = (props) => (
  <>
    <Button variant="primary">
      <FaReact /> React v16
    </Button>
  </>
)
function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto justify-content-center">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link " href="#">
                關於揪影
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                加入揪影
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                使用條款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                幫助中心
              </a>
            </li>
          </ul>
          <ul className="nav justify-content-center">
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
              <a className="nav-link " href="#">
                <img
                  src="images/ig.svg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <img
                  src="images/Twitter.svg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <img
                  src="images/Pinterst.svg"
                  width="45"
                  height="45
                "
                />
              </a>
            </li>
          </ul>

          <div className="container justify-content-center">
            <p className="text-muted d-flex justify-content-center">
              ©2020 JoinIn All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
