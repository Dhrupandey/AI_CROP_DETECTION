import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Welcome() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
        <img src="/anuty.jpg" alt="error" height="740px" width="100%" style={{opacity: "0.8"}}></img>
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="/img2.jpg" alt="error" height="750px" width="100%" style={{opacity: "0.8"}}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img3.jpg" alt="error" height="750px" width="100%" style={{opacity: "0.8"}}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img4.jpg" alt="error" height="750px" width="100%" style={{opacity: "0.8"}}></img>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
