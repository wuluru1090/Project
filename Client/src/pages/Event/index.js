import '../../index.scss'
import MyNavbar from '../../components/Main/MyNavbar'
import Footer from '../../components/Main/Footer'
import EventMain from '../../components/Event/EventMain'
import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Event() {
  return (
    <>
      {/* <MyNavbar /> */}
      <EventMain />
      <EventResult />
      <EventBottom />
      {/* <Footer /> */}
    </>
  )
}
export default Event
