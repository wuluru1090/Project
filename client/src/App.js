import './index.scss'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'
import EventAttendant from './pages/Event/EventAttendant'

import Event from './pages/Event/'
import Album from './pages/Event/EventAlbum'
import EventAlbumPhoto from './pages/Event/EventAlbumPhoto'
import EventDetails from './pages/Event/EventDetail'
import SoYa from './pages/SoYa/SoYa'

import Login from './pages/SoYa/Login'
import Signup from './pages/SoYa/Signup'
import EventStart from './pages/SoYa/EventStart'

import Logout from './components/Soya/Logout'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Formika from './pages/SoYa/Formika'
import AutoTop from './components/Soya/AutoTop'

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
                {/* <Route path="/event-search">
                  <Event isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                 */}

                {/* 首頁 */}
                <Route exact path="/">
                  <SoYa />
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

                {/* 活動頁面開始 */}
                <Route path="/event/:id/attendants">
                  <EventAttendant />
                </Route>
                <Route path="/event/:id/album">
                  <Album />
                </Route>
                <Route path="/event/:id">
                  <EventDetails />
                </Route>
                <Route exact path="/event">
                  <Event />
                </Route>
                <Route exact path="/photo">
                  <EventAlbumPhoto />
                </Route>
                {/* 活動頁面結束 */}
              </Switch>
            </AutoTop>
          </MainContent>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
