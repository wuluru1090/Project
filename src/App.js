import './index.scss'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'
import Event from './pages/Event/'
import SearchTop from './components/Class/SearchTop'
import SearchMain from './components/Class/SearchMain'
import SoYa from './pages/SoYa/SoYa'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <MainContent>
            <Switch>
              <Route path="/begin">
                <Event />
              </Route>
              <Route path="/event">
                <Event />
              </Route>
              <Route path="/class">
                <SearchTop />
                <SearchMain />
              </Route>
              <Route exact path="/">
                <SoYa />
              </Route>
              <Route exact path="/event/:id">
                <SoYa />
              </Route>
            </Switch>
          </MainContent>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
