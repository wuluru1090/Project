import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MainClass from '../../components/Class/MainClass'

function ClassResult() {
  return (
    <>
      <Router>
        <MainClass />
      </Router>
    </>
  )
}

export default ClassResult
