import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.scss'
// 頁面元件
import MemberHome from './pages/Member/MemberHome'
import MemberMyjoinin from './pages/Member/MemberMyjoinin'

function App() {
  return (
    <>
      <Router>
        <body>
          123
          <Route path="/member">
            <MemberHome />
          </Route>
          <Route path="/Myjoinin">
            <MemberMyjoinin />
          </Route>
        </body>
      </Router>
    </>
  )
}

export default App
