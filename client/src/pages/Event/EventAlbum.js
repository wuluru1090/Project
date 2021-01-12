import '../../index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import EventAlbum from '../../components/Event/EventAlbum'

function Album() {
  return (
    <Router>
      <>
        {/* <MyNavbar /> */}
        <EventAlbum />
        {/* <Footer /> */}
      </>
    </Router>
  )
}
export default Album
