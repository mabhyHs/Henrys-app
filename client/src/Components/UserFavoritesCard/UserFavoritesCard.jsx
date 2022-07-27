import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import cardFavImg from '../../Assets/Images/Hamburguesas/Cuarto-XL.png';

import './UserFavoritesCard.css';

function UserFavoritesCard() {
  return (
    <Container>
      <Row className="userFavCard__container">
        <Col lg={3}>
          <img
            src={cardFavImg}
            alt="foto del producto"
            className="img-fluid userFavImg"
          />
        </Col>
        <Col lg={3}>
          <h4>Cuarto XL</h4>
        </Col>
        <Col lg={3}>
          <p>Descripción/Ingredientes</p>
        </Col>
        <Col lg={3}>
          <Button>Ver</Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default UserFavoritesCard;
