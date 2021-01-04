import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import EventMain from './components/Event/EventMain'
import EventResult from './components/Event/EventResult'
import EventBottom from './components/Event/EventBottom'
import EventAttendant from './components/Event/EventAttendant'
import EventAlbum from './components/Event/EventAlbum'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <EventMain />
        <EventResult />
        <EventBottom />
        {/* <EventAttendant /> */}
        {/* <EventAlbum /> */}
        <Footer />
      </>
    </Router>
  )
}

export default App
