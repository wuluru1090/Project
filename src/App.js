import './index.scss'
import MyNavbar from './components/Event/MyNavbar'
import EventMain from './components/EventMain'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <EventMain />
      </>
    </Router>
  )
}

export default App
