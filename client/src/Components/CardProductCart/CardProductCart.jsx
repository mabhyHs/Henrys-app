import React from 'react';
import { Link } from 'react-router-dom';
import { CartFill } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import './CardProductCart.css';

function CardProductCart({ id, name, price, imgUri, addToCart, cantidad}) {

  return (
    <Card className="card__menu" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUri} className="card__img__menu" />
      <Card.Body className="card__menu__body">
        <Card.Title>
          <p>{name}</p>
          <p>x{" " + cantidad}</p>
        </Card.Title>
        <Link className="footer__mail__link" to="/detalle">
          <p>Ver Más</p>
        </Link>
        <div className="card__cart__container">
          <span>${price}</span>
          <Card.Link className="card__menu__cart">
            <CartFill onClick={()=>addToCart(id)} />
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProductCart;
