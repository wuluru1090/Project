import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// 頁面切換時要用捲軸讓頁面回到最上方
class AutoTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // console.log(prevProps)
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

// function AutoTop(props) {
//   useEffect(() => {
//     console.log(props)
//     if (props.location.pathname !== props.history.goBack) {
//       window.scrollTo(0, 0)
//     }
//   }, [])

//   return props.children
// }

export default withRouter(AutoTop)
