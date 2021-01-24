import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCart } from 'react-icons/io'
import { TiDeleteOutline } from 'react-icons/ti'
import '../../style/cart/todo.scss'
import { devUrl } from '../../config'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.remove = this.remove.bind(this)
  }

  remove() {
    this.props.remove(this.props.id)
  }

  render() {
    const { name, amount, price, photoimg } = this.props

    return (
      <>
        <tr className="toto">
          <td>
            <input type="checkbox" />
          </td>
          <td className="tdcolumn d-flex">
            <div>
              <img
                className="titlephoto"
                src={devUrl + `/pic/pic/${photoimg}`}
                alt="titlephoto"
              />
            </div>
            <div className="context">{name}</div>
          </td>
          <td>{amount}</td>
          <td>{price}</td>
          <td>
            <Link to="#">
              <IoIosCart className="iconcolor" />
            </Link>
          </td>
          <td>
            <Link to="#">
              <TiDeleteOutline className="iconcolor2" onClick={this.remove} />
            </Link>
          </td>
        </tr>
        <div className="lineup"></div>
      </>
    )
  }
}
