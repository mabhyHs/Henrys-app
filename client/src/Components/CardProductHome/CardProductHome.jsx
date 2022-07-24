import React from 'react';
import hamburguesasMini from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import combitos from '../../Assets/Images/combos/Combo1.png';
import bebidas from '../../Assets/Images/bebidas/bebidas-transparentes-copia.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import logo from '../../Assets/Images/logo-henrys300px.png';
import './CardProductHome.css';

function CardProductHome() {
  return (
    <Container>
      <section className="sectionproduct">
        <div className="productCard">
          <div className="productCard__image">
            <img
              src={hamburguesasMini}
              alt="imagen"
              className="img-thumbnail"
            />
          </div>
          <div className="productCard__content">
            <div className="productCard__content__box">
              <h1>Hamburguesas</h1>
              <p className="hidden hide-text">
                Nuestras hamburguesas estan hechas con carne premium de novillo
                fresco y en pan de papa.
              </p>
              <Button className="productCard__content__box__h2">Ver mas</Button>
            </div>
          </div>
        </div>

        <div className="productCard">
          <div className="productCard__image">
            <img src={combitos} alt="imagen" className="img-thumbnail" />
          </div>
          <div className="productCard__content">
            <div className="productCard__content__box">
              <h1>Combos</h1>
              <p className="hidden hide-text">
                Las mejores delicias en combos que se adaptan a tu estilo de
                vida.
              </p>

              <Button className="productCard__content__box__h2">Ver mas</Button>
            </div>
          </div>
        </div>

        <div className="productCard">
          <div className="productCard__image">
            <img src={bebidas} alt="imagen" className="img-thumbnail" />
          </div>
          <div className="productCard__content">
            <div className="productCard__content__box">
              <h1>Bebidas</h1>
              <p className="hidden hide-text">
                Bebidas a la temperatura perfecta para acompañar tu hamburguesa
              </p>

              <Button className="productCard__content__box__h2">Ver mas</Button>
            </div>
          </div>
        </div>

        <div className="productCard">
          <div className="productCard__image">
            <img src={logo} alt="imagen" className="img-thumbnail" />
          </div>
          <div className="productCard__content">
            <div className="productCard__content__box">
              <h1>Todo</h1>
              <p className="hidden hide-text">
                Conocé todo lo que Henry´s tiene para vos.
              </p>

              <Button className="productCard__content__box__h2">Ver mas</Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default CardProductHome;
