import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuerenTopPhoto from '../../components/Cart/QuerenTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import Test from '../../components/Cart/Test'
import TotalInf from '../../components/Cart/TotalInf'
import QuerenClassButton from '../../components/Cart/QuerenClassButton'

function QuerenClassPage() {
  return (
    <>
      <QuerenTopPhoto />
      <ConfirmPuzzle />
      <Test />
      <TotalInf />
      <QuerenClassButton />
    </>
  )
}

export default QuerenClassPage
