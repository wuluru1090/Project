import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 元素
import ClassResult from './pages/Class/ClassResult'
import ClassSearch from './pages/Class/ClassSearch'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import ScrollToTop from './components/Main/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <ScrollToTop>
            <Switch>
              <Route exact path="/class">
                <ClassSearch />
              </Route>
              <Route path="/class/:id?">
                <ClassResult />
              </Route>
            </Switch>
          </ScrollToTop>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
