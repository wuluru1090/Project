import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainClass from './components/Class/MainClass'
import SearchTop from './components/Class/SearchTop'
import SearchMain from './components/Class/SearchMain'
// import EventBottom from './components/Event/EventBottom'
// import EventResult from './components/Event/EventResult'
// import Footer from './components/Main/Footer'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <Switch>
            <Route path="/class">
              <MainClass />
            </Route>
            <Route exact path="/event">
              <SearchTop />
              <SearchMain />
              {/* <EventBottom /> */}
            </Route>
            {/* <Route path="/begin">
              <ProductMen />
            </Route>
            <Route path="/cart">
              <ProductMen />
            </Route> */}
          </Switch>
        </>
      </Router>
    </>
=======
import Footer from './components/Main/Footer'

import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'
import Event from './pages/Event/'
import Signup from './pages/SoYa/Signup'

function App() {
  return (
    <Router>
      <>
        <Signup />
      </>
    </Router>
>>>>>>> f0501dc7203921ee484dd497a7c8373489251d97
  )
}

export default App
