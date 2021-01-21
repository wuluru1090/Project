import './index.scss'
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
import Event from './pages/Event/'
import Album from './pages/Event/EventAlbum'
import EventAlbumPhoto from './pages/Event/EventAlbumPhoto'
import EventDetails from './pages/Event/EventDetail'
import SearchTop from './components/Class/SearchTop'
import SearchMain from './components/Class/SearchMain'
import MainClass from './components/Class/MainClass'
import SoYa from './pages/SoYa/SoYa'
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
  )
}

export default App
