import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import SearchTop from '../../components/Class/SearchTop'
import SearchMain from '../../components/Class/SearchMain'
import SearchBottom from '../../components/Class/SearchBottom'

function ClassSearch() {
  return (
    <>
      <Router>
        <SearchTop />
        <SearchMain />
        <SearchBottom />
      </Router>
    </>
  )
}

export default ClassSearch
