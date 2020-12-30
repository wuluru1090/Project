import logo from './logo.svg'
import './index.scss'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainClass from './components/MainClass'

function App() {
  return (
    <>
      <Router>
        <>
          <MyNavbar />
          <MainClass/>
        </>
      </Router>
    </>
  )
}

export default App
