import React from 'react';
import { Link } from 'react-router-dom';
import { CartPlus } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './CardProductMenu.css';

function CardProductMenu({ id, name, price, imgUri, addToCart }) {
  return (
    <Card className="card__menu" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUri} className="card__img__menu" />
      <Card.Body className="card__menu__body">
        <Card.Title>
          <p>{name}</p>
        </Card.Title>
        <Link className="footer__mail__link" to={`/detalle/${id}`}>
          <p>Ver Más</p>
        </Link>
        <div className="card__cart__container">
          <span>${price}</span>
          <Button onClick={() => addToCart(id)} className="card__menu__cart">
            <CartPlus />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProductMenu;
