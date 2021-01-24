import React, { useState, useEffect, Component } from 'react'
// import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { devUrl } from '../../config'
import { Link } from 'react-router-dom'
import '../../style/cart/nexttimecolumn.scss'
import { IoIosCart } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import Todo from './Todo'

class NextTimeColumn extends Component {
  // 建構子，每個 class 第一次產生時都會執行到這邊
  constructor(props) {
    super(props)

    // 這一行有點難解釋，想深入研究的麻煩自己查資料
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.removeTodo = this.removeTodo.bind(this)

    // 設定 state
    this.state = {
      todos: [
        {
          id: 1,
          name: '大稻埕攝影懷舊之旅',
          amount: 1,
          price: 1500,
          photoimg: 'event-slider1.jpg',
        },
        {
          id: 2,
          name: '與玉山拍張照',
          amount: 1,
          price: 2500,
          photoimg: 'event-slider2.jpg',
        },
        {
          id: 3,
          name: '阿里山日出',
          amount: 1,
          price: 3500,
          photoimg: 'event-slider4.jpg',
        },
      ],
    }
  }

  // input 改變，設定 value
  onChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  onClick() {
    const { todos, text } = this.state
    const newId = todos[todos.length - 1].id + 1

    // 設定 state
    this.setState({
      text: '',
      todos: [
        ...todos,
        { id: newId, name: text, amount: text, price: text, photoimg: text },
      ],
    })
  }

  removeTodo(id) {
    const { todos } = this.state

    // 直接用 filter 來把資料砍掉
    let newTodos = todos.filter((item) => item.id !== id)

    this.setState({
      todos: newTodos, // 這個為什麼不寫成 todos: newTodos 呢?
    })
  }

  render() {
    // 從 state 取出資料
    const { todos, text } = this.state

    return (
      <div>
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
                {todos.map((todo) => (
                  <Todo
                    id={todo.id}
                    name={todo.name}
                    amount={todo.amount}
                    price={todo.price}
                    photoimg={todo.photoimg}
                    remove={this.removeTodo}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default NextTimeColumn
