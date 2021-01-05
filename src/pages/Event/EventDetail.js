import '../../index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import EventDetail from '../../components/Event/EventDetail'

function EventDetails() {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventDetail />
        {/* <Footer /> */}
      </>
    </Router>
  )
}
export default EventDetails
