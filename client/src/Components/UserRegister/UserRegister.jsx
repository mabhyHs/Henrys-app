import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgLogin from '../../Assets/Images/Hamburguesas/PAPAS-KING.png';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';

import './UserRegister.css';

function UserRegister() {
  return (
    <div>
      <Row className="userRegister__container m-3">
        <Col lg={6} sm={12}>
          <h1 className="userRegister__tittle">Crear una cuenta</h1>
          <p>Regístrate para poder empezar a disfrutar de Henry´s</p>
          <Button variant="outline-secondary" className="py-2">
            <FcGoogle className="me-2" />
            Registrate con Google
          </Button>
          <p className="userRegister__divider">──────── Ó ────────</p>
          <Form className="mb-5">
            <Row className="mb-3">
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
            <Button variant="primary" type="submit">
              Registrarme
            </Button>
          </Form>
          <span>¿Ya tenés una cuenta? </span>
          <Link to="/userlogin" className="navBar__registrate">
            Ingresá
          </Link>
        </Col>
        <Col lg={6} sm={12}>
          <img className="img-fluid" src={imgLogin} alt="imagen de un combo" />
        </Col>
      </Row>
    </div>
  );
}

export default UserRegister;
