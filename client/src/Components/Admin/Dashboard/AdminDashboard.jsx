import React from 'react';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="adminDashboard__container">
      <AdminNavBar />
      <Container>
        <h3>Bienvenido de nuevo, Admin!</h3>
        <ButtonGroup>
          <Button variant="secondary">Enviar Novedades</Button>
          <Button variant="secondary">opcion2</Button>
          <Button variant="secondary">opcion3</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default AdminDashboard;
