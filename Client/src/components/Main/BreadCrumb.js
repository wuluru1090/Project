import React from 'react'
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props
  //   console.log(pathname)

  //JS CODE->將收到的pathname分解開來
  const pathnames = pathname.split('/').filter((x) => x)
  // console.log('這是pathname' + pathnames)
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link onClick={() => history.push('/')}>首頁</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        // console.log('名字是' + name)
        // console.log('路徑是' + routeTo)
        return isLast ? (
          <Typography>{name}</Typography>
        ) : (
          <Link onClick={() => history.push(routeTo)}>{name}</Link>
        )
      })}
    </MUIBreadcrumbs>
  )
}

export default withRouter(Breadcrumbs)
