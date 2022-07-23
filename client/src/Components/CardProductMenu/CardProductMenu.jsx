import React from 'react';
import { Link } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import imgCard from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import './CardProductMenu.css';

function CardProductMenu() {
  return (
    <Card className="card__menu" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgCard} className="card__img__menu" />
      <Card.Body className="card__menu__body">
        <Card.Title>
          <p>Henry´s Clásica</p>
        </Card.Title>
        <Link className="footer__mail__link" to="/detail">
          <p>Ver Más</p>
        </Link>
        <div className="card__cart__container">
          <span>$950</span>
          <Card.Link className="card__menu__cart" as={Link} to="/detalle">
            <CartFill />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProductMenu;
