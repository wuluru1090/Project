import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const labels = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
}

export default function SimpleRating() {
  const [value, setValue] = React.useState(5.0)

  return (
    <div className=" d-flex justify-content-center">
      {value !== null && (
        <p className=" d-flex align-items-center star_Points">
          <Box sml={2}>{labels[value !== -1 ? value : value]}</Box>
        </p>
      )}
      <Rating name="read-only" value={value} readOnly />
    </div>
  )
}
