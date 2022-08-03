/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../../Assets/Images/logo-henrys300px.png';
import { Link } from 'react-router-dom';
import './AdminNavBar.css';

function AdminNavBar() {
  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3 adminNavBar">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo henrys" className="adminNavBar__logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Henry's Admin</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to={'/adminhome'}
                  className="adminNavBar__link"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/adminusers'}
                  className="adminNavBar__link"
                >
                  Usuarios
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/adminproducts'}
                  className="adminNavBar__link"
                >
                  Productos
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={'/admincupons'}
                  className="adminNavBar__link"
                >
                  Cupones
                </Nav.Link>
                <Nav.Link as={Link} to={'/'} className="adminNavBar__link">
                  Salir
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavBar;
