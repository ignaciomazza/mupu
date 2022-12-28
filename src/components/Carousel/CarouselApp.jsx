import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselApp = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  
    return (
      <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      style={{height: 542}}
                      src="https://interprofessional.global/wp-content/uploads/2018/11/AUNZ-header-1920x600.jpg"
                      alt="First slide"
                  />
                  <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      style={{height: 542}}
                      src="https://www.neel-schaffer.com/wp-content/uploads/2015/06/Lighting-1920x600.jpg"
                      alt="Second slide"
                  />
  
                  <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      style={{height: 542}}
                      src="https://sportsworldrunningclub.com/wp-content/uploads/2018/04/beautiful_night_city-wallpaper-1920x600.jpg"
                      alt="Third slide"
                  />
  
                  <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
      </div>
    )
}

export default CarouselApp