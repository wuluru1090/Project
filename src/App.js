import logo from './logo.svg'
import './index.scss'
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'
import ClassMain from './components/Main'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'

function App() {
  return (
      <Router>
      <>
      <MyNavbar/>
      <ClassMain/>

    </>
    </Router>
  )
}

export default App