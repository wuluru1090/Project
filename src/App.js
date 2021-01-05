import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SoYa from './pages/SoYa/SoYa'
import Event from './pages/Event/'

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
