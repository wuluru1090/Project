import React, { Component, useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../Class/ClassCard2'
import '../../style/class/Carousel2.scss'
import Axios from 'axios'

function Carousel2(props) {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/theme?theme='${props.themeData}'`)
      .then((response) => {
        setCarouselData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [props.themeData])

  const CarouselCard = carouselData.map((val) => {
    return (
      <div className="carousel2_block">
        <Card calData={val} />
      </div>
    )
  })

  return (
    <Carousel itemsToScroll={1} itemsToShow={3} itemPadding={[50, 0, 0, 0]}>
      {CarouselCard}
    </Carousel>
  )
}

export default Carousel2
