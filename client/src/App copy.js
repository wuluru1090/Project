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
// import Login from './pages/SoYa/Login'
import EventStart from './pages/SoYa/EventStart'
import React from 'react'
import Login from './components/Soya/Login'
import ProtectedRoute from './components/Soya/ProtectedRoute'
import Logout from './components/Soya/Logout'

class App extends React.Component {
  constructor() {
    super()
    // 控制是否為登入狀態的應用程式領域的狀態
    this.state = {
      isAuth: false,
    }
  }

  // 進行登入
  authenticate = (callback) => {
    this.setState({ isAuth: true }, () => setTimeout(callback, 300))
  }

  // 進行登出
  signout = (callback) => {
    this.setState({ isAuth: false }, () => setTimeout(callback, 300))
  }
  render() {
    return (
      <>
        <Router>
          <>
            <MyNavbar />
            {this.state.isAuth ? (
              <div className="nav">
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to="/logout"
                >
                  登出
                </NavLink>
              </div>
            ) : (
              ''
            )}

            <MainContent>
              <Switch>
                <Route path="/begin">
                  <EventAttendant />
                </Route>
                <Route path="/event-search">
                  <Event />
                </Route>
                <Route path="/class">
                  <MainClass />
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
                <Route
                  path="/login"
                  render={(props) => (
                    <Login
                      authenticate={this.authenticate}
                      isAuth={this.state.isAuth}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/logout"
                  render={(props) => (
                    <Logout
                      signout={this.signout}
                      isAuth={this.state.isAuth}
                      {...props}
                    />
                  )}
                />
                <ProtectedRoute
                  path="/protected"
                  component={SearchTop}
                  isAuth={this.state.isAuth}
                />
              </Switch>
            </MainContent>
            <Footer />
          </>
        </Router>
      </>
    )
  }
}

export default App
