import React from 'react';
import { Link } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import imgCard from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import './CardProductMenu.css';

function CardProductMenu({ name, price, imgUri }) {
  return (
    <Card className="card__menu" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUri} className="card__img__menu" />
      <Card.Body className="card__menu__body">
        <Card.Title>
          <p>{name}</p>
        </Card.Title>
        <Link className="footer__mail__link" to="/detalle">
          <p>Ver Más</p>
        </Link>
        <div className="card__cart__container">
          <span>${price}</span>
          <Card.Link className="card__menu__cart" as={Link} to="/carrito">
            <CartFill />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProductMenu;
