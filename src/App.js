import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.scss'
// 頁面元件
import MemberHome from './pages/Member/MemberHome'
import MemberMyjoinin from './pages/Member/MemberMyjoinin'
import MemberMyOrder from './pages/Member/MemberMyOrder'
import MemberCoupon from './pages/Member/MemberCoupon'
import MemberHistory from './pages/Member/MemberHistory'
import MemberMyCollection from './pages/Member/MemberMyCollection'
import MemberMyPhoto from './pages/Member/MemberMyPhoto'
import MemberMyManagement from './pages/Member/MemberMyManagement'
import MemberMyScore from './pages/Member/MemberMyScore'
import UserSeeMember from './pages/Member/UserSeeMember'
function App() {
  return (
    <>
      <Router>
        <body>
          <Switch>
            <Route path="/member/MyScore">
              <MemberMyScore />
            </Route>
            <Route path="/member/MyManagement">
              <MemberMyManagement />
            </Route>

            <Route path="/member/MyPhoto">
              <MemberMyPhoto />
            </Route>

            <Route path="/member/Myjoinin">
              <MemberMyjoinin />
            </Route>
            <Route path="/member/MyOrder">
              <MemberMyOrder />
            </Route>
            <Route path="/member/MyCoupon">
              <MemberCoupon />
            </Route>
            <Route path="/member/MyHistory">
              <MemberHistory />
            </Route>
            <Route path="/member/MyCollection">
              <MemberMyCollection />
            </Route>
            <Route path="/see">
              <UserSeeMember />
            </Route>
            <Route path="/member">
              <MemberHome />
            </Route>
          </Switch>
        </body>
      </Router>
    </>
  )
}

export default App
