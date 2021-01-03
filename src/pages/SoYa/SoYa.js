import logo from '../../logo.svg'
import '../../index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import Searchbar from '../../components/Soya/Searchbar'
import SoYa1 from '../../components/Soya/SoYa1'
import SoYa2 from '../../components/Soya/SoYa2'
import SoYa3 from '../../components/Soya/SoYa3'
import SoYa4 from '../../components/Soya/SoYa4'
import SoYa5 from '../../components/Soya/SoYa5'

function SoYa() {
  return (
    <>
      <Router>
        <MyNavbar />
        <SoYa1>
          <Searchbar />
        </SoYa1>
        <SoYa2 />
        <SoYa3 />
        <SoYa4 />
        <SoYa5 />
        <Footer />
      </Router>
    </>
  )
}

export default SoYa
