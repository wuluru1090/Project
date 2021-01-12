import '../../index.scss'
import EventMain from '../../components/Event/EventMain'
import EventResult from '../../components/Event/EventResult'
import EventBottom from '../../components/Event/EventBottom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Event() {
  return (
    <>
      <EventMain />
      <EventResult />
      <EventBottom />
    </>
  )
}
export default Event
