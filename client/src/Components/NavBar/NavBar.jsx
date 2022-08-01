/* eslint-disable no-constant-condition */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartFill, CartCheckFill } from 'react-bootstrap-icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import imgNav from '../../Assets/Images/logo-henrys300px.png';
import UserLoggedInDropdown from '../User/UserLoggedIn/UserLoggedInDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';

import './NavBar.css';
import { setLoginState } from '../../Redux/actions/actions';

function NavBar() {
  const dispatch = useDispatch();
  const itemsToCart = useSelector((state) => state.cart);
  const isSession = useSelector((state) => state.loginState);
  const mount = useRef(true);
  const { isAuthenticated, logout } = useAuth0();
  const path = useLocation().pathname;

  useEffect(() => {
    if (mount.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      mount.current = false;
    } else {
      if (isLogged()) {
        dispatch(setLoginState(true));
      }
    }
  }, [dispatch]);

  function logoutSession() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('carrito');
    window.localStorage.removeItem('favoritos');

    dispatch(setLoginState(false));

    if (isAuthenticated) {
      logout();
    }
  }

  function isLogged() {
    return !!window.localStorage.getItem('user');
  }

  function getUserData() {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  return (
    <Navbar className="navBar" expand="lg" variant="dark" sticky="top">
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
            <Nav.Link
              className={path === '/' ? 'linkActive' : ''}
              as={Link}
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={path === '/menu' ? 'linkActive' : ''}
              as={Link}
              to="/menu"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              Menú
            </Nav.Link>
            <Nav.Link
              className={path === '/nosotros' ? 'linkActive' : ''}
              as={Link}
              to="/nosotros"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              Nosotros
            </Nav.Link>
            <Nav.Link
              className={path === '/contacto' ? 'linkActive' : ''}
              as={Link}
              to="/contacto"
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              className="ms-5 me-5"
              as={Link}
              to="/cart"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              {itemsToCart && itemsToCart?.length === 0 ? (
                <CartFill />
              ) : (
                <CartCheckFill className="CartCheckFill" />
              )}
            </Nav.Link>
          </Nav>

          {isSession && (
            <UserLoggedInDropdown
              userData={getUserData()}
              logoutSession={logoutSession}
            />
          )}

          {!isSession && (
            <Dropdown>
              <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
                Ingresar
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.ItemText className="dropdown__link-btn">
                  <Link to="/userlogin">Iniciá Sesión</Link>
                </Dropdown.ItemText>

                <Dropdown.ItemText>
                  <Dropdown.Divider />
                  <span>¿No tenés cuenta?</span>
                  <Link to="/registeruser" className="navBar__registrate">
                    Registrate
                  </Link>
                </Dropdown.ItemText>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
