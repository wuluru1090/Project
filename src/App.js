import './index.scss'
import MyNavbar from './components/MyNavbar'
import EventMain from './components/Event/EventMain'
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
