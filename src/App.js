import './index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'

import SoYa from './pages/SoYa/SoYa'
import Login from './pages/SoYa/Login'
import Event from './pages/Event/'
import Signup from './pages/SoYa/Signup'

function App() {
  return (
    <Router>
      <>
        {/* logo+標頭+導覽列 */}
        <SoYa />
        {/* 主內容區 */}
        <MainContent>
          <Link to="/">首頁</Link>
          <Link to="/about">關於我們</Link>

          {/* 以下為匹配路徑對用頁面用的路由列表 */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          {/* end 路由表 */}
        </MainContent>
        {/* 頁尾 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
