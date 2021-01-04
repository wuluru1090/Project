import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'

function App() {
  return (
    <Router>
      <>
        <Login />
      </>
    </Router>
  )
}

export default App
