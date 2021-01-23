import React from 'react'
import '../../index.scss'
import EventAlbum from '../../components/Event/EventAlbum'

function Album(props) {
  return (
    <>
      <EventAlbum isAuth={props.isAuth} />
    </>
  )
}
export default Album
