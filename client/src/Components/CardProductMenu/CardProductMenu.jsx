import React from 'react';
import { addFavorites } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, CartPlus } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './CardProductMenu.css';

function CardProductMenu({ id, name, price, imgUri, addToCart }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSession = useSelector((state) => state.loginState);

  const addFav = () => {
    if (!isSession) {
      // navigate('/userlogin');
      alert('es necesario estar logueado');
    } else {
    }
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
