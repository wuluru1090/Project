import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

export default function SimpleRating() {
  return (
    <div className=" d-flex justify-content-center">
      <p className=" d-flex align-items-center star_Points">
        <Box sml={2}>5</Box>
      </p>

      <Rating name="read-only" value="5" readOnly />
    </div>
  )
}
