import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainClass from './components/Class/MainClass'
import Footer from './components/Main/Footer'

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
            {/* <Route exact path="/event">
              <Home />
            </Route>
            <Route path="/begin">
              <ProductMen />
            </Route>
            <Route path="/cart">
              <ProductMen />
            </Route> */}
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
