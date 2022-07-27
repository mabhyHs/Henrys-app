import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './UserPersonalInfo.css';

function UserPersonalInfo() {
  return (
    <div className="userPersonalInfo__container">
      <Container>
        <h1>Mis Datos</h1>
        <Form className="mb-5">
          <div className="mb-4">
            <Button variant="outline-warning" className="userInfo__btn m-3">
              Cancelar
            </Button>
            <Button variant="primary" type="Submit">
              Actualizar
            </Button>
          </div>
          <hr />
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Control placeholder="Nombre*" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridApellido">
              <Form.Control placeholder="Apellido*" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Control type="email" placeholder="Email*" />
          </Form.Group>
          <Row className="mb-5">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Contraseña*" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirPassword">
              <Form.Control type="password" placeholder="Confirmar*" />
            </Form.Group>
          </Row>
          <hr />
          <Button as={Link} to="/" variant="primary">
            Volver
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UserPersonalInfo;
