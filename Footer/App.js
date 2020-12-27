import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 排版用的元件，全部都使用
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyFooter2 from './components/MyFooter2'
// import MainContent from './components/MainContent'

// // 頁面用元件
// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// // withRouter 高階元件樣式(HOC) 範例
// import ProductMen from './pages/ProductMen'
// import ProductBaby from './pages/ProductBaby'

function App() {
  // 會員認証範例
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <>
        {/* logo+標頭+導覽列 */}
        <MyNavbar />
        {/* 主內容區 */}
        {/* <MainContent> */}
        <h1>Link/to</h1>
        <Link to="/">首頁</Link>
        <Link to="/about">關於我們</Link>
        <Link to="/login">會員登入頁面</Link>
        <Link to="/product/men">男士產品</Link>
        <Link to="/product/baby">嬰兒產品</Link>

        {/* <hr />

          <h1>a/href</h1>
          <a href="/">首頁</a>
          <a href="/about">關於我們</a>
          <a href="/login">會員登入頁面</a> */}

        <hr />
        {/* 以下為匹配路徑對用頁面用的路由列表  ,一個網站維護一個路由表就好了*/}
        <Switch>
          {/* <Route path="/about">
              <About isAuth={isAuth} />
            </Route>
            <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
              /> 
            </Route>
            <Route path="/product/men">
              <ProductMen isAuth={isAuth} />
            </Route>
  
               {/* `:id?`是網址上的參數列 */}
          {/* <Route path="/product/baby/:id?">
            <ProductBaby isAuth={isAuth} />
          </Route>
          <Route exact path="/">
            <Home isAuth={isAuth} />
          </Route>{' '}
          */}{' '}
          */}
        </Switch>
        {/* end 路由表 */}
        {/* </MainContent> */}
        {/* 頁尾 */}
        <MyFooter />
        <hr />
        <MyFooter2 />
      </>
    </Router>
  )
}

export default App
