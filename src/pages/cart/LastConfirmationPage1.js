import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ConfirmTopPhoto from '../../components/Cart/ConfirmTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import CreditcardConfirmFrame from '../../components/Cart/CreditcardConfirmFrame'
import ConfirmButton from '../../components/Cart/ConfirmButton'

function LastConfirmationPage1() {
  return (
    <>
      <ConfirmTopPhoto />
      <ConfirmPuzzle />
      <CreditcardConfirmFrame />
      <ConfirmButton />
    </>
  )
}

export default LastConfirmationPage1
