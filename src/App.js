import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import EventMain from './components/Event/EventMain'
import EventResult from './components/Event/EventResult'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <EventMain />
        <EventResult />
        <Footer />
      </>
    </Router>
  )
}

export default App
