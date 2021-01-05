import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// 元素
import ClassResult from './pages/Class/ClassResult'
import ClassSearch from './pages/Class/ClassSearch'
import MyNavbar from './components/Main/MyNavbar'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <Switch>
            <Route path="/class">
              <ClassResult />
            </Route>
            <Route exact path="/event">
              <ClassSearch />
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
