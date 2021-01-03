import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import EventMain from './components/Event/EventMain'
import EventResult from './components/Event/EventResult'
import EventBottom from './components/Event/EventBottom'
import EventAttendant from './components/Event/EventAttendant'
import { BrowserRouter as Router } from 'react-router-dom'
import SoYa from './pages/SoYa/SoYa'

function App() {
  return (
    <Router>
      <>
        <SoYa />
      </>
    </Router>
  )
}

export default App
