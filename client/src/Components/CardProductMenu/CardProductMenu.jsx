import React from 'react';
import { addFavorites } from '../../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import { Heart, CartPlus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './CardProductMenu.css';

function CardProductMenu({ id, name, price, imgUri, addToCart }) {
  const dispatch = useDispatch();

  const addFav = () => {
    dispatch(addFavorites(id));
  };

  return (
    <Card className="card__menu" style={{ width: '18rem' }}>
      <Button
        variant="outline"
        onClick={() => addFav(id)}
        className="cardMenu__favorite__link"
      >
        <Heart className="cardMenu__favorite__Svg " />
      </Button>
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
