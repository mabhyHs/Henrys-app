import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {
  PersonCheckFill,
  PersonXFill,
  PencilSquare,
} from 'react-bootstrap-icons';

import './AdminUsers.css';

function AdminUsers() {
  return (
    <Container>
      <div className="adminUsers__container">
        <h2>Gestionar tus usuarios</h2>
        <hr />
        <div className="filters__btn__container mb-3">
          <p>Filtrar Usuarios:</p>

          <ButtonGroup
            aria-label="Filter Buttons"
            className="me-2 filter__btn"
            size="sm"
          >
            <Button className="filter__btn">Activos</Button>
            <Button className="filter__btn">Inactivos</Button>
            <Button className="filter__btn">Rol</Button>
          </ButtonGroup>
        </div>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agustina Lopez</td>
              <td>aguslopez@gmail.com</td>
              <td>USUARIO</td>
              <td className="adminUser__td__btns">
                <Button variant="outline-secondary" size="sm">
                  <PencilSquare />
                </Button>
                <Button variant="outline-success" size="sm">
                  <PersonCheckFill />
                </Button>
                <Button variant="outline-danger" size="sm">
                  <PersonXFill />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default AdminUsers;
