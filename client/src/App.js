import './index.scss'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MainContent from './components/Main/MainContent'

//////////活動//////////
import EventAttendant from './pages/Event/EventAttendant'
import Event from './pages/Event/'
import Album from './pages/Event/EventAlbum'
import EventAlbumPhoto from './pages/Event/EventAlbumPhoto'
import EventDetails from './pages/Event/EventDetail'

//////////首頁&登入//////////
import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'
import Signup from './pages/SoYa/Signup'
import EventStart from './pages/SoYa/EventStart'
import Logout from './components/Soya/Logout'

//////////課程//////////
import ClassResult from './pages/Class/ClassResult'
import ClassSearch from './pages/Class/ClassSearch'

//////////自動往上捲//////////
import AutoTop from './components/Soya/AutoTop'

//////////會員//////////
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
import MemberMyScoreOk from './pages/Member/MemberMyScoreOk'
import UserSeeMember from './pages/Member/UserSeeMember'
import SeeMemberAlbum from './pages/Member/SeeMemberAlbum'
import UserSeeMemberAlbum from './pages/Member/UserSeeMemberAlbum'
import MemberMyManagementDelete from './pages/Member/MemberMyManagementDelete'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import Formika from './pages/SoYa/Formika'

function App() {
  // 會員認証範例
  const [isAuth, setIsAuth] = useState(false)

  //首頁搜尋欄&主題子傳子
  const [conditionsobad, setConditionsobad] = useState({})
  // console.log(conditionsobad)

  useEffect(() => {
    console.log(isAuth)
  }, [isAuth])

  return (
    <>
      <Router>
        <MyNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
        <>
          <MainContent>
            <AutoTop>
              <Switch>
                {/* <Route path="/event-search">
                  <Event isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                 */}

                {/* 首頁 */}
                <Route exact path="/">
                  <SoYa isAuth={isAuth} setConditionsobad={setConditionsobad} />
                </Route>

                <Route path="/login">
                  <Login isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/logout">
                  <Logout isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/eventstart">
                  <EventStart isAuth={isAuth} setIsAuth={setIsAuth} />
                </Route>

                {/* 活動頁面開始 */}
                <Route path="/event/:id/attendants">
                  <EventAttendant />
                </Route>
                <Route path="/event/:id/album/:photo">
                  <EventAlbumPhoto />
                </Route>
                <Route path="/event/:id/album">
                  <Album isAuth={isAuth} />
                </Route>
                <Route path="/event/:id">
                  <EventDetails isAuth={isAuth} />
                </Route>
                <Route exact path="/event">
                  <Event conditionsobad={conditionsobad} isAuth={isAuth} />
                </Route>
                {/* 活動頁面結束 */}

                {/* 課程頁面開始 */}
                <Route exact path="/class">
                  <ClassSearch />
                </Route>
                <Route path="/class/:id?">
                  <ClassResult />
                </Route>
                {/* 課程頁面結束 */}

                {/* 會員頁面開始 */}
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
                <Route path="/member/:id?/MyScoreOk">
                  <MemberMyScoreOk />
                </Route>
                <Route path="/member/:id?/MyScore">
                  <MemberMyScore />
                </Route>
                <Route path="/member/:id?/MyManagement">
                  <MemberMyManagement />
                </Route>
                <Route path="/member/:id?/MyPhoto/photo">
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
                {/* 會員頁面結束 */}
              </Switch>
            </AutoTop>
          </MainContent>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
