import React from 'react'
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

export default function Example() {
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
                name="ability"
                value="newbie"
                className="checkbox"
              />
              新手
            </label>
            <label>
              <input
                type="checkbox"
                name="ability"
                value="amateur"
                className="checkbox"
              />
              業餘
            </label>
            <label>
              <input
                type="checkbox"
                name="ability"
                value="professional"
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
                name="price"
                value="free"
                className="checkbox"
              />
              免費
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="less"
                className="checkbox"
              />
              小於500
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="500to1000"
                className="checkbox"
              />
              500-1000
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="more500"
                className="checkbox"
              />
              多於1000
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
                name="price"
                value="free"
                className="checkbox"
              />
              商品攝影
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="less"
                className="checkbox"
              />
              人像攝影
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="500to1000"
                className="checkbox"
              />
              商業攝影
            </label>
            <label>
              <input
                type="checkbox"
                name="price"
                value="more500"
                className="checkbox"
              />
              影片剪輯
            </label>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
