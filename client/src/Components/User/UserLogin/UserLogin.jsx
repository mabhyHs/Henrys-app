import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgLogin from '../../../Assets/Images/combos/Combo1.png';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormText from 'react-bootstrap/esm/FormText';
import imgLogo from '../../../Assets/Images/logo-henrys300px.png';

import './UserLogin.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginState } from '../../../Redux/actions/actions';

function UserLogin() {

  const dispatch = useDispatch();
  const isSession = useSelector((state) => state.loginState);
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/login`, { ...input });

      if (res.status === 200) {
        if(!isSession){
            window.localStorage.setItem('user', JSON.stringify({ ...res.data.user, token: res.data.data.token }));
            dispatch(setLoginState(true));
            navigate('/');
        }
      }

    } catch (error) {
      window.alert('Email o contraseña incorrecta');
    }

  };
  
  if(isSession){
    setInterval(() => {
        navigate("/");
    }, 500);
  }

  return (
    <div>
        {isSession &&
            <div>
            </div>
        }

        
    {!isSession &&
        <Row className="userLogin__container m-3">
        <Col lg={6} sm={12}>
          <h1 className="userLogin__tittle">Ingresá a tu cuenta</h1>
          <p>Bienvenido de nuevo, por favor ingrese sus datos.</p>
          <Button
            variant="outline-secondary"
            className="p-2"
            onClick={() => loginWithRedirect()}
          >
            <FcGoogle /> Continuar con Google
          </Button>          
          <p className="userLogin__divider">──────── Ó ────────</p>
          <Form
            className="userLogin__form mb-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Form.Group controlId="formGridEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="mb-3"
                value={input.email}
                onChange={(e) => handleChange(e)}
              />
              <Form.Control
                className="mb-3"
                type="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <FormText
              className="mb-3 userLogin__forgotPass"
              as={Button}
              onClick={handleShow}
            >
              Olvidé mi contraseña
            </FormText>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <img
                  src={imgLogo}
                  alt="logo de henrys"
                  className="img-fluid userLogin__imgLogo"
                ></img>
                <Modal.Title>Recuperar Contraseña</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Ingresá el E-mail con el que te registraste para recuperar tu
                  acceso.
                </p>
                <Form.Control
                  type="email"
                  placeholder="Ingresar mail"
                  className="mb-3"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Enviar
                </Button>
              </Modal.Footer>
            </Modal>
            <Button
              // as={Link}
              // to="/userprofiledashboard"
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
    }    
    </div>
  );
}

export default UserLogin;
