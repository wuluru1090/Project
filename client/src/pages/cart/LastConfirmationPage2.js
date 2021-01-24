import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import AtmConfirmFrame from '../../components/Cart/AtmConfirmFrame'
import ConfirmButton from '../../components/Cart/ConfirmButton'

function PaymentMethodPage() {
  return (
    <>
      <ConfirmTopPhoto />
      <ConfirmPuzzle />
      <AtmConfirmFrame />
      <ConfirmButton />
    </>
  )
}

export default PaymentMethodPage
