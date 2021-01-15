import React, { useState, useEffect } from 'react'
import '../../style/default.scss'
import '../../style/class/accordion.scss'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default function Example(props) {
  const [ab, setAb] = useState(false)
  const [ab1, setAb1] = useState(false)
  const [ab2, setAb2] = useState(false)

  function handleChecks() {
    const abilityList = []
    if (ab) {
      abilityList.push('新手')
    }
    if (ab1) {
      abilityList.push('業餘')
    }
    if (ab2) {
      abilityList.push('專業')
    }

    props.setAbility(abilityList)
  }

  useEffect(() => {
    handleChecks()
  }, [ab, ab1, ab2])

  return (
    <Accordion className="class_accordion font20">
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>攝影能力</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="checkboxs">
            <label>
              <input
                type="checkbox"
                checked={ab}
                name="ability"
                value="新手"
                onChange={() => {
                  setAb(!ab)
                }}
                className="checkbox"
              />
              新手
            </label>
            <label>
              <input
                type="checkbox"
                checked={ab1}
                name="ability"
                value="業餘"
                onChange={() => {
                  setAb1(!ab1)
                }}
                className="checkbox"
              />
              業餘
            </label>
            <label>
              <input
                type="checkbox"
                checked={ab2}
                name="ability"
                value="專業"
                onChange={() => {
                  setAb2(!ab2)
                }}
                className="checkbox"
              />
              專業級
            </label>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>價格</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="checkboxs">
            <label>
              <input
                type="checkbox"
                checked={price}
                name="price"
                value="0-1000"
                onChange={() => {
                  setPrice(!price)
                }}
                className="checkbox"
              />
              0-1000
            </label>
            <label>
              <input
                type="checkbox"
                checked={price1}
                name="price"
                value="1000-2000"
                onChange={() => {
                  setPrice1(!price1)
                }}
                className="checkbox"
              />
              1000-2000
            </label>
            <label>
              <input
                type="checkbox"
                checked={price2}
                name="price"
                value="2000-3000"
                onChange={() => {
                  setPrice2(!price2)
                }}
                className="checkbox"
              />
              2000-3000
            </label>
            <label>
              <input
                type="checkbox"
                checked={price3}
                name="price"
                value="3000-4000"
                onChange={() => {
                  setPrice3(!price3)
                }}
                className="checkbox"
              />
              3000-4000
            </label>
            <label>
              <input
                type="checkbox"
                checked={price4}
                name="price"
                value="4000-5000"
                className="checkbox"
                onChange={() => {
                  setPrice4(!price4)
                }}
              />
              4000-5000
            </label>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>課程類型</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="checkboxs">
            <label>
              <input
                type="checkbox"
                checked={type}
                name="photography"
                value="人像攝影"
                className="checkbox"
                onChange={() => {
                  setType(!type)
                }}
              />
              人像攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type1}
                name="photography"
                value="風景攝影"
                className="checkbox"
                onChange={() => {
                  setType1(!type1)
                }}
              />
              風景攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type2}
                name="photography"
                value="商品攝影"
                className="checkbox"
                onChange={() => {
                  setType2(!type2)
                }}
              />
              商品攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type3}
                name="photography"
                value="影像編輯"
                className="checkbox"
                onChange={() => {
                  setType3(!type3)
                }}
              />
              影像編輯
            </label>
            <label>
              <input
                type="checkbox"
                checked={type4}
                name="photography"
                value="vlog"
                className="checkbox"
                onChange={() => {
                  setType4(!type4)
                }}
              />
              vlog
            </label>
            <label>
              <input
                type="checkbox"
                checked={type5}
                name="photography"
                value="空拍攝影"
                className="checkbox"
                onChange={() => {
                  setType5(!type5)
                }}
              />
              空拍攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type6}
                name="photography"
                value="手機攝影"
                className="checkbox"
                onChange={() => {
                  setType6(!type6)
                }}
              />
              手機攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type7}
                name="photography"
                value="底片沖洗"
                className="checkbox"
                onChange={() => {
                  setType7(!type7)
                }}
              />
              底片沖洗
            </label>
            <label>
              <input
                type="checkbox"
                checked={type8}
                name="photography"
                value="商業攝影"
                className="checkbox"
                onChange={() => {
                  setType8(!type8)
                }}
              />
              商業攝影
            </label>
            <label>
              <input
                type="checkbox"
                checked={type9}
                name="photography"
                value="食物攝影"
                className="checkbox"
                onChange={() => {
                  setType9(!type9)
                }}
              />
              食物攝影
            </label>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
