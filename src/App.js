import logo from './logo.svg'
import './index.scss'
import MyNavbar from './components/MyNavbar'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
        </>
      </Router>
    </>
  )
}

export default App
