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

export default function HoverRating() {
  const [value, setValue] = React.useState(5)
  const [hover, setHover] = React.useState(-1)

  return (
    <div className=" d-flex row">
      {value !== null && (
        <p className=" d-flex align-items-center star_Points">
          <Box sml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        </p>
      )}
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
      />
    </div>
  )
}
