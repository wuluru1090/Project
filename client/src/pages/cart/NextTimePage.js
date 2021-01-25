import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FukuanTopPhoto from '../../components/Cart/FukuanTopPhoto'
import Buttonx3 from '../../components/Cart/Buttonx3'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import NextTimeColumn from '../../components/Cart/NextTimeColumn'
import NextTimeButton from '../../components/Cart/NextTimeButton'
import ConfirmWave from '../../components/Cart/ConfirmWave'

function NextTimePage() {
  return (
    <>
      <FukuanTopPhoto />
      <Buttonx3 />
      <ConfirmPuzzle />
      <NextTimeColumn />
      <NextTimeButton />
      <ConfirmWave />
    </>
  )
}

export default NextTimePage
