import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/sidebar.scss'

export default function Sidebar(props) {
  const [ct1, setCt1] = useState(true)
  const [ct2, setCt2] = useState(false)
  const [ct3, setCt3] = useState(false)
  const [ct4, setCt4] = useState(false)
  const [ct5, setCt5] = useState(false)
  const [ct6, setCt6] = useState(false)
  const [ct7, setCt7] = useState(false)
  const [ct8, setCt8] = useState(false)
  const [ct9, setCt9] = useState(false)
  const [ct10, setCt10] = useState(false)
  const [ct11, setCt11] = useState(false)

  function NotChecked() {
    setCt1(false)
    setCt2(false)
    setCt3(false)
    setCt4(false)
    setCt5(false)
    setCt6(false)
    setCt7(false)
    setCt8(false)
    setCt9(false)
    setCt10(false)
    setCt11(false)
  }

  function handleChecks() {
    const classThemeList = []
    if (ct1) {
      classThemeList.push('全部課程')
      props.setTheme(classThemeList)
      return
    }
    if (ct2) {
      classThemeList.push('人像')
    }
    if (ct3) {
      classThemeList.push('風景')
    }
    if (ct4) {
      classThemeList.push('商品')
    }
    if (ct5) {
      classThemeList.push('影像編輯')
    }
    if (ct6) {
      classThemeList.push('vlog')
    }
    if (ct7) {
      classThemeList.push('空拍')
    }
    if (ct8) {
      classThemeList.push('手機')
    }
    if (ct9) {
      classThemeList.push('底片沖洗')
    }
    if (ct10) {
      classThemeList.push('商業攝影')
    }
    if (ct11) {
      classThemeList.push('食物')
    }
    props.setTheme(classThemeList)
  }

  useEffect(() => {
    handleChecks()
  }, [ct1, ct2, ct3, ct4, ct5, ct6, ct7, ct8, ct9, ct10, ct11])
  return (
    <div className="class_search_sidebar">
      <ul>
        <li className="class_theme_topic">
          <label>課程主題</label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct1}
              name="photo1"
              value="全部內容"
              onChange={() => {
                NotChecked()
                setCt1(!ct1)
              }}
              className="checkbox"
            />
            全部課程
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct2}
              name="photo2"
              value="人像攝影"
              onChange={() => {
                NotChecked()
                setCt2(!ct2)
              }}
              className="checkbox"
            />
            人像攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct3}
              name="photo3"
              value="風景攝影"
              onChange={() => {
                NotChecked()
                setCt3(!ct3)
              }}
              className="checkbox"
            />
            風景攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct4}
              name="photo4"
              value="商品攝影"
              onChange={() => {
                NotChecked()
                setCt4(!ct4)
              }}
              className="checkbox"
            />
            商品攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct5}
              name="photo5"
              value="影像編輯"
              onChange={() => {
                NotChecked()
                setCt5(!ct5)
              }}
              className="checkbox"
            />
            影像編輯
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct6}
              name="photo6"
              value="vlog"
              onChange={() => {
                NotChecked()
                setCt6(!ct6)
              }}
              className="checkbox"
            />
            vlog
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct7}
              name="photo8"
              value="空拍攝影"
              onChange={() => {
                NotChecked()
                setCt7(!ct7)
              }}
              className="checkbox"
            />
            空拍攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct8}
              name="photo9"
              value="手機攝影"
              onChange={() => {
                NotChecked()
                setCt8(!ct8)
              }}
              className="checkbox"
            />
            手機攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct9}
              name="photo10"
              value="底片沖洗"
              onChange={() => {
                NotChecked()
                setCt9(!ct9)
              }}
              className="checkbox"
            />
            底片沖洗
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct10}
              name="photo11"
              value="商業攝影"
              onChange={() => {
                NotChecked()
                setCt10(!ct10)
              }}
              className="checkbox"
            />
            商業攝影
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              checked={ct11}
              name="photo12"
              value="食物攝影"
              onChange={() => {
                NotChecked()
                setCt11(!ct11)
              }}
              className="checkbox"
            />
            食物攝影
          </label>
        </li>
      </ul>
    </div>
  )
}
