import React from 'react';
import './imageCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../../assets/placeholder.png';

function ImageCarousel() {
  return (
    <Carousel fade controls={false} variant="dark">
      <Carousel.Item>
        <img
          className="first-slide"
          src={IMG1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>Raw denim shoreditch fashion axe bodega boys taxidermy gochujang semiotics ramps.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="second-slide"
          src={IMG1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Heirloom kale chips fingerstache hot chicken blog.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="third-slide"
          src={IMG1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>Offal brunch messenger bag mixtape, shabby chic hot chicken meggings forage pitchfork pok pok copper mug lomo.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;