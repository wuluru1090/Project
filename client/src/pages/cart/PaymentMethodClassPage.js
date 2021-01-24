import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ShoppingDetailsTopPhoto from '../../components/Cart/ShoppingDetailsTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import PaymentClassButton from '../../components/Cart/PaymentClassButton'
import Paymentmethod from '../../components/Cart/Paymentmethod'
import PaymentOrdererinf from '../../components/Cart/PaymentOrdererinf'
import 'semantic-ui-css/semantic.min.css'
import Acc from '../../components/Cart/Acc'
import Receipt from '../../components/Cart/Receipt'
import PaymentDetails from '../../components/Cart/PaymentDetails'

function PaymentMethodClassPage() {
  return (
    <>
      <ShoppingDetailsTopPhoto />
      <ConfirmPuzzle />
      <Paymentmethod />
      <PaymentOrdererinf />
      <Acc />
      <Receipt />
      <PaymentDetails />
      <PaymentClassButton />
    </>
  )
}

export default PaymentMethodClassPage
