import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import comboImg from '../../../../Assets/Images/combos/Combo1.png';
import burgerImg from '../../../../Assets/Images/Hamburguesas/Stacker-Triple.png';
import burgerbaseImg from '../../../../Assets/Images/Hamburguesas/Hamburguesa-con-Queso.png';
import friesImg from '../../../../Assets/Images/Hamburguesas/Papas-Cheddar.png';
import beveragesImg from '../../../../Assets/Images/bebidas/bebidas-transparentes.png';

import './AddProductHome.css';

function AddProductHome() {
  return (
    <Container>
      <h2>Gestioná tus productos</h2>
      <hr />
      <div className="addProductHome__container">
        <Card style={{ width: '14rem' }} className="adminProductHome__card">
          <Card.Img
            variant="top"
            src={comboImg}
            className="adminProductHome__card__img"
          />
          <Card.Body className="adminProductHome__card__body">
            <Card.Title>Combos</Card.Title>
            <Button as={Link} to="/admicombos" variant="secondary">
              Ingresar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem' }} className="adminProductHome__card">
          <Card.Img
            variant="top"
            src={burgerImg}
            className="adminProductHome__card__img"
          />
          <Card.Body className="adminProductHome__card__body">
            <Card.Title>Burger</Card.Title>
            <Button as={Link} to="/admiburger" variant="secondary">
              Ingresar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem' }} className="adminProductHome__card">
          <Card.Img
            variant="top"
            src={burgerbaseImg}
            className="adminProductHome__card__img"
          />
          <Card.Body className="adminProductHome__card__body">
            <Card.Title>Burger Base</Card.Title>
            <Button as={Link} to="/admiburgerbase" variant="secondary">
              Ingresar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem' }} className="adminProductHome__card">
          <Card.Img
            variant="top"
            src={friesImg}
            className="adminProductHome__card__img"
          />
          <Card.Body className="adminProductHome__card__body">
            <Card.Title>Fries</Card.Title>
            <Button as={Link} to="/admifries" variant="secondary">
              Ingresar
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem' }} className="adminProductHome__card">
          <Card.Img
            variant="top"
            src={beveragesImg}
            className="adminProductHome__card__img"
          />
          <Card.Body className="adminProductHome__card__body">
            <Card.Title>Bebidas</Card.Title>
            <Button as={Link} to="/admibeverages" variant="secondary">
              Ingresar
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default AddProductHome;
