import React from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import '../../style/event/event_bread_crumb.scss'

function EventBreadcrumbs(props) {
  console.log(props)
  return (
    <Breadcrumbs aria-label="breadcrumb" className="bread">
      <Link href="/" className="event-link">
        首頁
      </Link>
      <Link href="/event" className="event-link">
        參加攝影團
      </Link>
      <Link
        href={props.location.pathname}
        aria-current="page"
        className="event-link"
      >
        {props.initValue}
      </Link>
    </Breadcrumbs>
  )
}

export default withRouter(EventBreadcrumbs)
