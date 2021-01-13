import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }))

export default function Pagination1() {
  // const classes = useStyles()

  return (
    <div>
      <Pagination count={10} shape="rounded" size="large" color="primary" />
    </div>
  )
}
