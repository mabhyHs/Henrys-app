import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgNavEmp from '../../../Assets/Images/logo-henrys300px.png';
import { Link } from 'react-router-dom';
import { BiHome, BiLogOut, BiCheckCircle } from 'react-icons/bi';
import { MdPendingActions } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setOrders } from '../../../Redux/actions/actions';
import './EmployeeNavBar.css';

function EmployeeNavBar() {

    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(setOrders());  
    }, [dispatch]);


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="navBar__employee"
    >
      <Container>
        <Navbar.Brand as={Link} to="/employeehome">
          <img src={imgNavEmp} className="nav-img" alt="Henrys burguer logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto employee__nav">
            <Nav.Link as={Link} to="/employeehome">
              <BiHome /> INICIO
            </Nav.Link>

            <Nav.Link as={Link} to="/employeeordersready">
              <BiCheckCircle />
              PEDIDOS LISTOS
            </Nav.Link>
            <Nav.Link as={Link} to="/employeependingorders">
              <MdPendingActions />
              PEDIDOS PENDIENTES
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <BiLogOut /> SALIR
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployeeNavBar;
