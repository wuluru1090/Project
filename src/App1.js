import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.scss'
import Axios from 'axios'

import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'

// 頁面元件
import MemberHome from './pages/Member/MemberHome'
import MemberMyjoinin from './pages/Member/MemberMyjoinin'
import MemberMyOrder from './pages/Member/MemberMyOrder'
import MemberCoupon from './pages/Member/MemberCoupon'
import MemberHistory from './pages/Member/MemberHistory'
import MemberMyCollection from './pages/Member/MemberMyCollection'
import MemberMyPhoto from './pages/Member/MemberMyPhoto'
import MemberMyPhoto2 from './pages/Member/MemberMyPhoto2'
import MemberMyManagement from './pages/Member/MemberMyManagement'
import MemberMyScore from './pages/Member/MemberMyScore'
import UserSeeMember from './pages/Member/UserSeeMember'
import SeeMemberAlbum from './pages/Member/SeeMemberAlbum'
import UserSeeMemberAlbum from './pages/Member/UserSeeMemberAlbum'
import MemberMyManagementDelete from './pages/Member/MemberMyManagementDelete'
function App(props) {
  const [member_name, setMembername] = useState('')
  const [member_account, setMemberaccount] = useState('')
  const [member, setMember] = useState([])
  const [newaccount, setNewMemberaccount] = useState('')

  useEffect(() => {
    Axios.get(`http://localhost:3001/member/get`).then((res) => {
      setMember(res.data)
    })
  }, [])
  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      member_name: member_name,
      member_account: member_account,
    }).then(() => {
      setMember([
        ...member,
        { member_name: member_name, member_account: member_account },
      ])
    })
  }
  const deleteReview = (member) => {
    Axios.delete(`http://localhost:3001/api/delete/${member}`)
  }

  const UpdateReview = () => {
    Axios.put(`http://localhost:3001/api/update`, {
      member_name: member_name,
      member_account: member_account,
    })
    setMemberaccount('')
  }

  return (
    <>
      <Router>
        <MyNavbar />
        <body>
          {member.map((val) => {
            return (
              <div className="form">
                <label>Member name:</label>
                <input
                  type="text"
                  name="member_name"
                  onChange={(e) => {
                    setMembername(e.target.value)
                  }}
                ></input>
                <label>Member account:</label>
                <input
                  type="text"
                  name="member_account"
                  onChange={(e) => {
                    setMemberaccount(e.target.value)
                  }}
                ></input>

                <button onClick={submitReview}>送出</button>

                <div>
                  <input
                    type="text"
                    name="member_name"
                    placeholder={val.member_name}
                    onChange={(e) => {
                      setMembername(e.target.value)
                    }}
                  ></input>
                  <label>Member account:</label>
                  <input
                    type="text"
                    name="member_account"
                    placeholder={val.member_account}
                    onChange={(e) => {
                      setMemberaccount(e.target.value)
                    }}
                  ></input>
                  <p>
                    member_name:{val.member_name} | member_account:
                    {val.member_account}
                  </p>
                  <button
                    onClick={() => {
                      deleteReview(val.member_name)
                    }}
                  >
                    刪除
                  </button>
                  <input
                    type="text"
                    name="member_account"
                    onChange={(e) => {
                      setMemberaccount(e.target.value)
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      UpdateReview(val.member_name)
                    }}
                  >
                    修改
                  </button>
                </div>
              </div>
            )
          })}

          <Switch>
            <Route path="/member/MyManagement/Delete">
              <MemberMyManagementDelete />
            </Route>

            <Route path="/see/Album/photo">
              <UserSeeMemberAlbum />
            </Route>
            <Route path="/member/MyScore">
              <MemberMyScore />
            </Route>
            <Route path="/member/MyManagement">
              <MemberMyManagement />
            </Route>
            <Route path="/member/MyPhoto2">
              <MemberMyPhoto2 />
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
            <Route path="/see/Album">
              <SeeMemberAlbum />
            </Route>
            <Route path="/see">
              <UserSeeMember />
            </Route>
            <Route path="/member">
              <MemberHome />
            </Route>
          </Switch>
        </body>
        <Footer />
      </Router>
    </>
  )
}

export default App
