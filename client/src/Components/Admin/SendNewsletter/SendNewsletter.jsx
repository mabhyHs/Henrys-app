import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import './SendNewsletter.css';

function SendNewsletter() {
  return (
    <div className="sendNewsletter__container mt-3">
      <h2 className="mb-3">Compartí las novedades</h2>
      <Container className="sendNewsletter__form">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Ingrese el título" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Ingrese la descripción" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre del Botón</Form.Label>
            <Form.Control type="text" placeholder="Nombre del botón" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SendNewsletter;
