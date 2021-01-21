import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdAddBox } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'
import { devUrl } from '../config'
import FukuanActivityPage from '../pages/cart/FukuanActivityPage'
import Buttonx3 from '../components/Cart/Buttonx3'

function Cart() {
  // [{cat1:'a', cat2:'XXXX', cat3:'123'}]
  // const [filter, setFilter] = useState([])

  // // http://xxx.com/getdata/?color=red,white&ids=2,3,5
  // const [colorArray, setColorArray] = useState([1, 3, 5])
  // const [filterCat2, setFilterCat2] = useState([])
  // const [filterCat3, setFilterCat3] = useState([])
  // const [filterCat4, setFilterCat4] = useState([])
  // const [filterCat5, setFilterCat5] = useState([])

  // 'color='+ colorArray.join(',')

  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="shoppingdetailstopphoto">
        <img src={devUrl + '/pic/pic/Group 597.png'} alt="..." />
      </div>
      <Buttonx3 />
      <div className="activityordercolumnobb2">
        <div className="activityordercolumno">
          <table responsive className="columnoh">
            <thead className="centertrtd">
              <tr className="trco">
                <th className="checkboxaaa">
                  <input type="checkbox" />
                </th>
                <th className="imgw">活動名稱</th>
                <th>數量</th>
                <th>價格</th>
                <th>下次再買</th>
                <th>刪除</th>
              </tr>
            </thead>
            <div className="lineup"></div>

            {mycartDisplay.map((item, index) => {
              return (
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
                      <div>{item.name}</div>
                    </td>
                    <td className="">
                      <button
                        onClick={() => {
                          if (item.amount === 1) return
                          updateCartToLocalStorage(item, false)
                        }}
                      >
                        -
                      </button>
                      {item.amount}
                      <button
                        onClick={() => updateCartToLocalStorage(item, true)}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.amount * item.price}</td>
                    <td className="">
                      <select
                        className="form-select selectstyle"
                        aria-label="Default select example"
                      >
                        <option selected>{item.amount}</option>
                        <option
                          value="1"
                          onChange={() => {
                            if (item.amount === 1) return
                            updateCartToLocalStorage(item, false)
                          }}
                        >
                          1
                        </option>
                        <option
                          value="2"
                          onChange={() => {
                            if (item.amount === 1) return
                            updateCartToLocalStorage(item, false)
                          }}
                        >
                          2
                        </option>
                        <option value="3">3</option>
                      </select>
                    </td>
                    <td>
                      <Link to="#">
                        <TiDeleteOutline className="iconcolor2" />
                      </Link>
                    </td>
                  </tr>
                  <div className="lineup"></div>
                </tbody>
              )
            })}
          </table>
        </div>
      </div>
      <div>
        <div className="detailsamountbox d-flex">
          <div className="boxx2 d-flex">
            <div className="d-flex voucher">
              <div className="lineh">
                <input type="checkbox" />
              </div>
              <div className="lineh">是否使用優惠卷</div>
              <div className="inputbox d-flex">
                <input type="text" className="form-control form-control-md" />
              </div>
            </div>
          </div>
          <div className="boxx3 d-flex">
            <div>
              <div className="money d-flex">5件商品合計</div>
              <div className="money d-flex">優惠卷折抵</div>
              <div className="money d-flex">總價</div>
            </div>
            <div>
              <div className="money d-flex moneyex">{sum(mycartDisplay)}元</div>
              <div className="money d-flex moneyred"> -$200元</div>
              <div className="money d-flex">{sum(mycartDisplay)}元</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fukuanbutton">
        <div className="b1 d-flex">
          <button className="btn d-flex confirmbutton1">繼續購物</button>
          <Link
            to="/PaymentMethodActivityPage"
            className="btn d-flex confirmbutton2"
          >
            前往結帳
          </Link>
        </div>
      </div>
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default Cart
