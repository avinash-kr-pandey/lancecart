import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Crousel() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'60vh'}}
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/2024/apr/vibe-badlo/Frame%2048097456.jpg"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'60vh'}}
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/republic/future-classic/web.gif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'60vh'}}
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/Feb24/bloom/InBloom-WebBanner.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'60vh'}}
          className="d-block w-100"
          src="https://static5.lenskart.com/media/uploads/web02apr.jpg"
          alt="forth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'60vh'}}
          className="d-block w-100"
          src="https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif"
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Crousel
