import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import slider1 from '../../Assets/Images/hero-bg.jpg';
import slider2 from '../../Assets/Images/slider-2.jpg';
import slider3 from '../../Assets/Images/slider-3.jpg';
import './MainHome.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h3>HENRY´S</h3>
          <p>Programá tu próxima salida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Sabor auténtico</h3>
          <p>Recetas propias y originales</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption className="carousel-caption-last">
          <h3>Compartí en familia</h3>
          <p>Lorem ipsum dolor</p>

          <Link to="/">
            <Button>Conocenos</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
