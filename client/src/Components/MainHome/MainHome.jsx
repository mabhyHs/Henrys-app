import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import imgSlider1 from '../../Assets/Images/hero-bg.jpg';
import imgSlider2 from '../../Assets/Images/slider-2.jpg';
import imgSlider3 from '../../Assets/Images/slider-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainHome.css';

function MainHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider1} alt="First slide" />
        <Carousel.Caption>
          <h3>HENRY´S</h3>
          <p>Programá tu próxima salida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Sabor auténtico</h3>
          <p>Recetas propias y originales</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlider3} alt="Third slide" />

        <Carousel.Caption className="carousel-caption-last">
          <h3>Compartí en familia</h3>
          <p>Lorem ipsum dolor</p>
          <Link to="/nosotros">
            <Button>Conocenos</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainHome;
