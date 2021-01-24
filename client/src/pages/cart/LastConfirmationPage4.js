import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import LineConfirmFrame from '../../components/Cart/LineConfirmFrame'
import ConfirmButton from '../../components/Cart/ConfirmButton'

function PaymentMethodPage() {
  return (
    <>
      <ConfirmTopPhoto />
      <ConfirmPuzzle />
      <LineConfirmFrame />
      <ConfirmButton />
    </>
  )
}

export default PaymentMethodPage
