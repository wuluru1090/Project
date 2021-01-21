import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuerenTopPhoto from '../../components/Cart/QuerenTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import Test from '../../components/Cart/Test'
import TotalInf from '../../components/Cart/TotalInf'
import QuerenButton from '../../components/Cart/QuerenButton'

function QuerenPage() {
  return (
    <>
      <QuerenTopPhoto />
      <ConfirmPuzzle />
      <Test />
      <TotalInf />
      <QuerenButton />
    </>
  )
}

export default QuerenPage
