import React from 'react';
/* import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PersonCircle, CartFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import imgNav from '../../Assets/Images/logo-henrys300px.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css';

function NavBar() {
  return (
    <Navbar className="navBar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={imgNav} className="nav-img" alt="Henrys burguer logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menú
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
            <Nav.Link className="ms-5 me-5" as={Link} to="/cart">
              <CartFill />
            </Nav.Link>
          </Nav>

          <Dropdown>
            <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
              <PersonCircle className="m-1" />
              Ingresar
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.ItemText className="dropdown__link-btn">
                <Link to="/Ingresar">Iniciá Sesión</Link>
              </Dropdown.ItemText>

              <Dropdown.ItemText>
                <Dropdown.Divider />
                <span>¿No tenés cuenta?</span>
                <Link to="/Registrate" className="navBar__registrate">
                  Registrate
                </Link>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
