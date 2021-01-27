import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuerenTopPhoto from '../../components/Cart/QuerenTopPhoto'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import TestClass from '../../components/Cart/TestClass'
import TotalInfClass from '../../components/Cart/TotalInfClass'
import QuerenClassButton from '../../components/Cart/QuerenClassButton'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function QuerenClassPage() {
  return (
    <>
      <QuerenTopPhoto />
      <ConfirmPuzzle />
      <TestClass />
      <TotalInfClass />
      <QuerenClassButton />
      <ConfirmWave />
    </>
  )
}

export default QuerenClassPage
