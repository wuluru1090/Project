import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import '../../style/cart/credcard.scss'

function Credit() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div className="d-flex">
      <div className="credcard d-flex">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form className="inb">
          <input
            type="tel"
            className="form-control form-control-md ibox"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <div className="ind">支援Mastercard, VISA, JCB</div>
          <input
            type="text"
            className="form-control form-control-md ibox"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            className="form-control form-control-md ibox"
            name="expiry"
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            className="form-control form-control-md ibox"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </div>
  )
}

export default Credit
