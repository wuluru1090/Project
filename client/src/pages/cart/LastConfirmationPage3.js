import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import StoreConfirmFrame from '../../components/Cart/StoreConfirmFrame'
import ConfirmButton from '../../components/Cart/ConfirmButton'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function PaymentMethodPage() {
  return (
    <>
      <ConfirmTopPhoto />
      <ConfirmPuzzle />
      <StoreConfirmFrame />
      <ConfirmButton />
      <ConfirmWave />
    </>
  )
}

export default PaymentMethodPage
