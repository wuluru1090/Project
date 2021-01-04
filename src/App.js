import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'

import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Event from './pages/Event/'

function App() {
  return (
    <Router>
      <>
        <Event />
      </>
    </Router>
  )
}

export default App
