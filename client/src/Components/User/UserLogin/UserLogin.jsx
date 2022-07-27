import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgLogin from '../../../Assets/Images/combos/Combo1.png';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';

import './UserLogin.css';
import FormText from 'react-bootstrap/esm/FormText';

function UserLogin() {
  return (
    <div>
      <Row className="userLogin__container m-3">
        <Col lg={6} sm={12}>
          <h1 className="userLogin__tittle">Ingresá a tu cuenta</h1>
          <p>Bienvenido de nuevo, por favor ingrese sus datos.</p>
          <Button variant="outline-secondary" className="p-2">
            <FcGoogle /> Continuar con Google
          </Button>
          <p className="userLogin__divider">──────── Ó ────────</p>
          <Form className="userLogin__form mb-5">
            <Form.Group controlId="formGridEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mb-3"
              />
              <Form.Control
                className="mb-3"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <FormText className="mb-3" as={Link} to="/">
              Olvidé mi contraseña
            </FormText>
            <Button
              as={Link}
              to="/userprofiledashboard"
              variant="primary"
              type="submit"
            >
              Ingresar
            </Button>
          </Form>
          <span>¿No tenés cuenta? </span>
          <Link to="/registeruser" className="navBar__registrate">
            Registrate
          </Link>
        </Col>
        <Col lg={6} sm={12}>
          <img className="img-fluid" src={imgLogin} alt="imagen de un combo" />
        </Col>
      </Row>
    </div>
  );
}

export default UserLogin;
