import '../../index.scss'
import ShoppingDetailsTopPhoto from '../../components/Cart/ShoppingDetailsTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import PaymentButton from '../../components/Cart/PaymentButton'
import Paymentmethod from '../../components/Cart/Paymentmethod'
import PaymentOrdererinf from '../../components/Cart/PaymentOrdererinf'
import 'semantic-ui-css/semantic.min.css'
import Participant2 from '../../components/Cart/Participant2'
import Receipt from '../../components/Cart/Receipt'
import PaymentDetails from '../../components/Cart/PaymentDetails'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function PaymentMethodActivityPage() {
  return (
    <>
      <ShoppingDetailsTopPhoto />
      <ConfirmPuzzle />
      <Paymentmethod />
      <PaymentOrdererinf />
      <Participant2 />
      <Receipt />
      <PaymentDetails />
      <PaymentButton />
      <ConfirmWave />
    </>
  )
}

export default PaymentMethodActivityPage
