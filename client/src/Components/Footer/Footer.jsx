/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/named */
/* eslint-disable no-useless-escape */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { suscriptionNewsLetterEmail } from '../../Redux/actions/actions';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import imgFooter from '../../Assets/Images/logo-henrys300px.png';

import './Footer.css';

function Footer() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(suscriptionNewsLetterEmail(input));
    Swal.fire({
      customClass: {
        confirmButton: 'confirmBtnSwal',
      },
      title: 'Suscripción Exitosa',
      text: 'A partir de ahora recibirás todas nuestras novedades',
      imageUrl:
        'https://res.cloudinary.com/henrysburgers/image/upload/v1659301858/success-henrys_nlrgo0.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo henrys',
    });
    setInput({ email: '' });
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  }

  function validate(input) {
    let errors = {};

    if (!input.email) {
      errors.email = '* El email es obligatorio.';
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.email
      )
    ) {
      errors.email = '* Dirección de mail inválida.';
    }

    return errors;
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        className="footer__mail__link"
        href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <Container fluid fixed="bottom" className="footer__container">
      <Nav className="footer__nav">
        <Row className="pt-5">
          <Col sm={12} lg={4}>
            <p className="pt-3">
              Suscribite a nuestro newsletter y recibí las últimas novedades,
              promociones y descuentos:
            </p>
            <form
              className="pb-3"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                name="email"
                type="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
                placeholder="ejemplo@ejemplo.com"
              />
              <input
                type="submit"
                value="Suscribirme"
                className="footer__btn__suscribe"
                disabled={Object.keys(errors).length > 0 || !input.email}
              />
              <div>
                {errors.email && (
                  <p className="footer__newsletter__error">{errors.email}</p>
                )}
              </div>
            </form>
          </Col>
          <Col sm={12} lg={4} className="p-3">
            <Link to="/">
              <img
                src={imgFooter}
                className="nav-img"
                alt="Henrys burguer logo"
              />
            </Link>
            <h4>"Hamburguesas que se ajustan a tu estilo de vida"</h4>
          </Col>
          <Col sm={12} lg={4} className="p-3">
            <p>Seguinos:</p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <Mailto
              email="henrysburgers2022@gmail.com"
              subject="Contacto via Email"
              body="Hola! Quisiera recbir información con respecto a"
            >
              <p>henrysburgers2022@gmail.com</p>
            </Mailto>
          </Col>
        </Row>
      </Nav>
    </Container>
  );
}

export default Footer;
