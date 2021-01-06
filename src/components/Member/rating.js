import React from 'react'
import Rating from '@material-ui/lab/Rating'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export default function CustomizedRatings() {
  return (
    <div>
      <Rating
        name="customized-empty"
        defaultValue={5}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </div>
  )
}
