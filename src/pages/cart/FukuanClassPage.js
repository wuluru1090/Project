import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import FukuanTopPhoto from '../../components/Cart/FukuanTopPhoto'
import Buttonx3 from '../../components/Cart/Buttonx3'
import ConfirmPuzzle from '../../components/Cart/ConfirmPuzzle'
import ActivityOrderColumn from '../../components/Cart/ActivityOrderColumn'
import DetailsAmount from '../../components/Cart/DetailsAmount'
import FukuanClassButton from '../../components/Cart/FukuanClassButton'

function FukuanClassPage() {
  return (
    <>
      <FukuanTopPhoto />
      <Buttonx3 />
      <ConfirmPuzzle />
      <ActivityOrderColumn />
      <DetailsAmount />
      <FukuanClassButton />
    </>
  )
}

export default FukuanClassPage
