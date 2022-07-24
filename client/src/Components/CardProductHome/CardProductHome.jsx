import React from 'react';
import './CardProductHome.css';
import { Link } from 'react-router-dom';
import hamburguesasMini from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import combitos from '../../Assets/Images/combos/Combo1.png';
import bebidas from '../../Assets/Images/bebidas/bebidas-transparentes-copia.png';
import logo from '../../Assets/Images/logo-henrys300px-copia.png';

function CardProductHome() {
  return (
    <section className="sectionproduct">
      <div className="productCard">
        <div className="productCard__image">
          <img src={hamburguesasMini} alt="imagen" />
        </div>
        <div className="productCard__content">
          <div className="productCard__content__box">
            <h1>Hamburguesas</h1>
            <p className="hidden hide-text">
              Nuestras hamburguesas estan hechas con carne premium de novillo
              fresco y en pan de papa.
            </p>
            <div>
              <Link to="/menu/hamburguesas">
                <h2 className="productCard__content__box__h2">Ver mas</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="productCard__image">
          <img src={combitos} alt="imagen" />
        </div>
        <div className="productCard__content">
          <div className="productCard__content__box">
            <h1>Combos</h1>
            <p className="hidden hide-text">
              Las mejores delicias en combos que se adaptan a tu estilo de vida.
            </p>
            <div>
              <Link to="/menu/combos">
                <h2 className="productCard__content__box__h2">Ver mas</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="productCard__image">
          <img src={bebidas} alt="imagen" />
        </div>
        <div className="productCard__content">
          <div className="productCard__content__box">
            <h1>Bebidas</h1>
            <p className="hidden hide-text">
              Bebidas a la temperatura perfecta para acompañar tu hamburguesa
            </p>
            <div>
              <Link to="/menu/bebidas">
                <h2 className="productCard__content__box__h2">Ver mas</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="productCard">
        <div className="productCard__image">
          <img src={logo} alt="imagen" />
        </div>
        <div className="productCard__content">
          <div className="productCard__content__box">
            <h1>Ver todo</h1>
            <p className="hidden hide-text">
              Conocé todo lo que Henry´s tiene para vos y sumate a la explosion
              de sabores que te ofrecemos.
            </p>
            <div>
              <Link to="/menu/todo">
                <h2 className="productCard__content__box__h2">Ver mas</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardProductHome;
