import logo from './logo.svg'
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
          <MainClass />
        </>
      </Router>
    </>
  )
}

export default App
