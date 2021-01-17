import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.scss'

import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
// import MemberPhoto from './components/Member/MemberPhoto'
import MemberContent2 from './components/Member/MemberContent2'

// 頁面元件
import MemberMyCollection from './pages/Member/MemberMyCollection'
import MemberHome from './pages/Member/MemberHome'
import MemberMyjoininFinish from './pages/Member/MemberMyjoininFinish'
import MemberMyjoinin from './pages/Member/MemberMyjoinin'
import MemberMyOrder from './pages/Member/MemberMyOrder'
import MemberMyOrderClass from './pages/Member/MemberMyOrderClass'
import MemberMyOrderClassNopay from './pages/Member/MemberMyOrderClassNopay'
import MemberMyOrderEventNopay from './pages/Member/MemberMyOrderEventNopay'
import MemberCoupon from './pages/Member/MemberCoupon'
import MemberHistoryClass from './pages/Member/MemberHistoryClass'
import MemberHistory from './pages/Member/MemberHistory'
import MemberMyCollectionC from './pages/Member/MemberMyCollectionC'
import MemberMyPhoto from './pages/Member/MemberMyPhoto'
import MemberMyPhoto2 from './pages/Member/MemberMyPhoto2'
import MemberMyManagement from './pages/Member/MemberMyManagement'
import MemberMyScore from './pages/Member/MemberMyScore'
import UserSeeMember from './pages/Member/UserSeeMember'
import SeeMemberAlbum from './pages/Member/SeeMemberAlbum'
import UserSeeMemberAlbum from './pages/Member/UserSeeMemberAlbum'
import MemberMyManagementDelete from './pages/Member/MemberMyManagementDelete'
function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <body>
          {/* <MemberPhoto /> */}
          {/* <MemberContent2 /> */}
          <Switch>
            <Route path="/member/:id?/MyOrder/Class/Pay">
              <MemberMyOrderClassNopay />
            </Route>
            <Route path="/member/:id?/MyOrder/Event/Pay">
              <MemberMyOrderEventNopay />
            </Route>
            <Route path="/member/:id?/MyCollection/Class">
              <MemberMyCollectionC />
            </Route>
            <Route path="/member/:id?/MyManagement/Delete">
              <MemberMyManagementDelete />
            </Route>
            <Route path="/member/:id?/MyOrder/Class">
              <MemberMyOrderClass />
            </Route>
            <Route path="/member/:id?/MyHistory/Class">
              <MemberHistoryClass />
            </Route>

            <Route path="/see/:id?/Album/photo">
              <UserSeeMemberAlbum />
            </Route>
            <Route path="/member/:id?/MyScore">
              <MemberMyScore />
            </Route>
            <Route path="/member/:id?/MyManagement">
              <MemberMyManagement />
            </Route>
            <Route path="/member/:id?/MyPhoto2">
              <MemberMyPhoto2 />
            </Route>

            <Route path="/member/:id?/MyPhoto">
              <MemberMyPhoto />
            </Route>
            <Route path="/member/:id?/MyjoininFinish">
              <MemberMyjoininFinish />
            </Route>

            <Route path="/member/:id?/Myjoinin">
              <MemberMyjoinin />
            </Route>
            <Route path="/member/:id?/MyOrder">
              <MemberMyOrder />
            </Route>
            <Route path="/member/:id?/MyCoupon">
              <MemberCoupon />
            </Route>
            <Route path="/member/:id?/MyHistory">
              <MemberHistory />
            </Route>
            <Route path="/member/:id?/MyCollection">
              <MemberMyCollection />
            </Route>
            <Route path="/see/:id?/Album">
              <SeeMemberAlbum />
            </Route>
            <Route path="/member/:id?">
              <MemberHome />
            </Route>
            <Route path="/see/:id?">
              <UserSeeMember />
            </Route>
          </Switch>
        </body>
        <Footer />
      </Router>
    </>
  )
}

export default App
