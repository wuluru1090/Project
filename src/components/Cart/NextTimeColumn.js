import React, { useState, useEffect } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'
import '../../style/cart/nexttimecolumn.scss'
import { IoIosCart } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'

function NextTimeColumn(props) {
  return (
    <>
      <div className="nextactivityordercolumnobb">
        <div className="activityordercolumno">
          <table responsive className="columnoh">
            <thead className="centertrtd">
              <tr className="trco">
                <th className="checkboxaaa">
                  <input type="checkbox" />
                </th>
                <th className="imgw">下次再買</th>
                <th>數量</th>
                <th>價格</th>
                <th>加入購買</th>
                <th>刪除</th>
              </tr>
            </thead>
            <div className="lineup"></div>

            <tbody className="centertrtd">
              <tr className="">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="tdcolumn d-flex">
                  <div>
                    <img
                      className="titlephoto"
                      src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                      alt="titlephoto"
                    />
                  </div>{' '}
                  <div>日出撈魚苗│日出霞光、火燒雲絕美景色</div>
                </td>
                <td className="">1</td>
                <td>2000</td>
                <td className="">
                  <Link to="#">
                    <IoIosCart className="iconcolor" />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <TiDeleteOutline className="iconcolor2" />
                  </Link>
                </td>
              </tr>
              <div className="lineup"></div>
              <tr className="">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="tdcolumn d-flex">
                  <div>
                    <img
                      className="titlephoto"
                      src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                      alt="titlephoto"
                    />
                  </div>{' '}
                  <div>日出撈魚苗│日出霞光、火燒雲絕美景色</div>
                </td>
                <td className="">1</td>
                <td>2000</td>
                <td className="">
                  <Link to="#">
                    <IoIosCart className="iconcolor" />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <TiDeleteOutline className="iconcolor2" />
                  </Link>
                </td>
              </tr>
              <div className="lineup"></div>
              <tr className="">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="tdcolumn d-flex">
                  <div>
                    <img
                      className="titlephoto"
                      src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                      alt="titlephoto"
                    />
                  </div>{' '}
                  <div>日出撈魚苗│日出霞光、火燒雲絕美景色</div>
                </td>
                <td className="">1</td>
                <td>2000</td>
                <td className="">
                  <Link to="#">
                    <IoIosCart className="iconcolor" />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <TiDeleteOutline className="iconcolor2" />
                  </Link>
                </td>
              </tr>
              <div className="lineup"></div>
              <tr className="">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="tdcolumn d-flex">
                  <div>
                    <img
                      className="titlephoto"
                      src={devUrl + '/pic/pic/鳳山溪橋東側1.jpg'}
                      alt="titlephoto"
                    />
                  </div>{' '}
                  <div>日出撈魚苗│日出霞光、火燒雲絕美景色</div>
                </td>
                <td className="">1</td>
                <td>2000</td>
                <td className="">
                  <Link to="#">
                    <IoIosCart className="iconcolor" />
                  </Link>
                </td>
                <td>
                  <Link to="#">
                    <TiDeleteOutline className="iconcolor2" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default NextTimeColumn
