import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'

import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'
import Event from './pages/Event/'
import Signup from './pages/SoYa/Signup'

function App() {
  return (
    <Router>
      <>
        <Signup />
      </>
    </Router>
  )
}

export default App
