import logo from '../../logo.svg'
import '../../index.scss'
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
=======
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4

import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import SearchTop from '../../components/Class/SearchTop'
import SearchMain from '../../components/Class/SearchMain'

function ClassSearch() {
  return (
    <>
<<<<<<< HEAD
      <SearchTop />
      <SearchMain />
=======
      <Router>
        <SearchTop />
        <SearchMain />
      </Router>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
    </>
  )
}

export default ClassSearch
