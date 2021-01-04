import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainClass from './components/Class/MainClass'
import EventMain from './components/Event/EventMain'
import SearchMain from './components/Class/SearchMain'
import EventBottom from './components/Event/EventBottom'
import EventResult from './components/Event/EventResult'
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
            <Route exact path="/event">
              <EventMain />
              <SearchMain />
              <EventBottom />
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
  )
}

export default App
