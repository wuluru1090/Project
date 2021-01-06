import '../../index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import EventInspectPhoto from '../../components/Event/EventInspectPhoto'

function EventAlbumPhoto() {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventInspectPhoto />
        {/* <Footer /> */}
      </>
    </Router>
  )
}

export default EventAlbumPhoto
