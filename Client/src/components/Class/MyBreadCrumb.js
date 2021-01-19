import React from 'react'
import { withRouter } from 'react-router-dom'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import '../../style/class/mybreadcrumb.scss'

function MyBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="bread">
      <Link href="/" className="class-link">
        首頁
      </Link>
      <Link href="/class" className="class-link">
        課程搜尋頁
      </Link>
      <Link
        href={props.location.pathname}
        aria-current="page"
        className="class-link"
      >
        {props.match.params.id}
      </Link>
    </Breadcrumbs>
  )
}

export default withRouter(MyBreadcrumbs)
