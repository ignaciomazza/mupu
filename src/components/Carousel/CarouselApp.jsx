import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselApp = (props) => {

    const [index, setIndex] = useState(0);
    const {CarouselFirst, CarouselSecond, CarouselThird} = props

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img className="d-block w-100" style={{height: 685}} src={CarouselFirst} alt="First slide"/>
                  <Carousel.Caption>
                      <h3>EXPLORA</h3>
                      <p>LO SALVAJE</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" style={{height: 685}} src={CarouselSecond} alt="Second slide"/>
                  <Carousel.Caption>
                      <h3>VIVI</h3>
                      <p>LA EXPERIENCIA</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100" style={{height: 685}} src={CarouselThird} alt="Third slide"/>
                  <Carousel.Caption>
                      <h3>ANIMATE</h3>
                      <p>A LA AVENTURA</p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default CarouselApp