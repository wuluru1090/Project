import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FukuanTopPhoto from '../../components/Cart/FukuanTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import ActivityOrderColumn2 from '../../components/Cart/ActivityOrderColumn2'
import DetailsAmount from '../../components/Cart/DetailsAmount'
import FukuanButton from '../../components/Cart/FukuanButton'
import ConfirmWave from '../../components/Cart/ConfirmWave'
import PaymentMethodActivityPage from '../cart/PaymentMethodActivityPage'
import MainContent from '../../components/MainContent'

function FukuanActivityPage() {
  return (
    <>
      <FukuanTopPhoto />
      <ConfirmPuzzle />
      <ActivityOrderColumn2 />
      <DetailsAmount />
      <FukuanButton />
    </>
  )
}

export default FukuanActivityPage
