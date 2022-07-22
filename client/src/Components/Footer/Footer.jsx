import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import imgFooter from '../../Assets/Images/logo-henrys300px.png';

import './Footer.css';

function Footer() {
  return (
    <Container fluid fixed="bottom" className="footer__container">
      <Nav className="footer__nav">
        <Row className="pt-5">
          <Col sm={12} lg={4}>
            <p className="pt-3">
              Suscribite a nuestro newsletter y recibí las últimas novedades,
              promociones y descuentos:
            </p>
            <form className="pb-3">
              <input
                type="text"
                value=""
                change=""
                placeholder="ejemplo@ejemplo.com"
              />
              <input
                type="submit"
                value="Suscribirme"
                className="footer__btn__suscribe"
              />
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
            <h3>Hamburguesas que se ajustan a tu estilo de vida</h3>
          </Col>
          <Col sm={12} lg={4} className="p-3">
            <p>Seguinos:</p>
            <Link to="/facebook.com">
              <Facebook />
            </Link>
            <Link to="/instagram.com">
              <Instagram />
            </Link>
            <Link to="/linkedin.com">
              <Linkedin />
            </Link>
            <Link className="footer__mail__link" to="/enviarmail">
              <p>henrys@gmail.com</p>
            </Link>
          </Col>
        </Row>
      </Nav>
    </Container>
  );
}

export default Footer;
