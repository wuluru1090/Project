import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { devUrl } from '../../config'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../../style/class/Carousel1.scss'

function Carousel1(props) {
  const [carousel, setCarousel] = useState([])
  const [carouselPic, setCarouselPic] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/class/${props.match.params.id}`)
      .then((response) => {
        setCarousel(response.data)
        setCarouselPic(response.data[0].class_carousel_pic.split(';'))
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Carousel className="class_carousel_block">
        {carouselPic.map((val) => {
          return (
            <div className="class_carousel">
              <img src={devUrl + `/pic/class/${val}`} alt="..." />
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default withRouter(Carousel1)

// 參考來源：http://react-responsive-carousel.js.org/
