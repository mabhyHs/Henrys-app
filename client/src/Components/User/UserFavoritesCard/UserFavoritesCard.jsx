import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeFavorites } from '../../../Redux/actions/actions';
import { useNavigate } from 'react-router-dom';

import './UserFavoritesCard.css';

function UserFavoritesCard({ id, name, imgUri, ingredient }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delFav = (id) => {
    dispatch(removeFavorites(id));
  };

  const goDetail = () => {
    navigate(`/detalle/${id}`);
  };

  return (
    <Container>
      <Row className="userFavCard__container">
        <Col lg={3}>
          <img
            src={imgUri}
            alt="foto del producto"
            className="img-fluid userFavImg"
          />
        </Col>
        <Col lg={3}>
          <h4>{name}</h4>
        </Col>
        <Col lg={3}>
          <p>{ingredient}</p>
        </Col>
        <Col lg={3}>
          <Button variant="secondary" onClick={goDetail} className="me-2">
            Ver
          </Button>
          <Button variant="secondary" onClick={() => delFav(id)}>
            Quitar
          </Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default UserFavoritesCard;
