import './index.scss'
import MyNavbar from './components/Main/MyNavbar'
import Footer from './components/Main/Footer'
import MemberContent from './components/Member/MemberContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//已排版 未遷動
function MemberHome(props) {
  return (
    <>
      <Router>
        <body>
          <header>
            <MyNavbar />
          </header>
          <main className="container">
            <aside className="d-flex justify-content-end">
              <div>
                <MemberCard />
                <br />
                <MemberNavlist />
              </div>

              <article className="">
                <MemberContent />
              </article>
            </aside>
          </main>
          <br />

          <Footer />
        </body>
      </Router>
    </>
  )
}

export default MemberHome
