import './index.scss'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import React, { useState } from 'react'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'
import EventAttendant from './pages/Event/EventAttendant'
=======
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'
import EventAttendant from './components/Event/EventAttendant'
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
import Event from './pages/Event/'
import Album from './pages/Event/EventAlbum'
import EventAlbumPhoto from './pages/Event/EventAlbumPhoto'
import EventDetails from './pages/Event/EventDetail'
import SearchTop from './components/Class/SearchTop'
import SearchMain from './components/Class/SearchMain'
import MainClass from './components/Class/MainClass'
import SoYa from './pages/SoYa/SoYa'
<<<<<<< HEAD
import Test from './Test'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/event/:id/attendants">
              <EventAttendant />
            </Route>

            <Route path="/event/:id/album">
              <Album />
            </Route>

            <Route path="/event/:id">
              <EventDetails />
            </Route>
            {/* event2Att={event2Att} */}
            <Route exact path="/event">
              <Event />
            </Route>

            <Route path="/class">
              <MainClass />
            </Route>

            <Route exact path="/photo">
              <EventAlbumPhoto />
            </Route>

            <Route exact path="/">
              <SoYa />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </>
    </Router>
=======
import Login from './pages/SoYa/Login'
import Signup from './pages/SoYa/Signup'
import EventStart from './pages/SoYa/EventStart'
import React, { useState, useEffect } from 'react'
import Logout from './components/Soya/Logout'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Formika from './pages/SoYa/Formika'
import AutoTop from './components/Soya/AutoTop'
import MemberEventManage from './pages/Member/MemberEventManage'

function App() {
  // 會員認証範例
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    console.log(isAuth)
  }, [isAuth])

  return (
    <>
      <Router>
        <MyNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <>
          <MainContent>
            <AutoTop>
              <Switch>
                <Route path="/begin">
                  <EventAttendant />
                </Route>
                <Route path="/event-search">
                  <Event isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/class">
                  <MainClass isAuth={isAuth} />
                </Route>
                <Route exact path="/photo">
                  <EventAlbumPhoto />
                </Route>
                <Route path="/event/album">
                  <Album />
                </Route>
                <Route exact path="/">
                  <SoYa />
                </Route>
                <Route path="/event/:id">
                  <EventDetails />
                </Route>
                <Route path="/eventstartdata/get/:id">
                  <MemberEventManage />
                </Route>
                <Route path="/login">
                  <Login isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/logout">
                  <Logout isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/eventstart">
                  <EventStart isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
              </Switch>
            </AutoTop>
          </MainContent>
          <Footer />
        </>
      </Router>
    </>
>>>>>>> 903f70c83b1325388a24207e9da433c16f0aa1e4
  )
}

export default App
