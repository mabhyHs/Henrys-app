import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import './CreateOrEditFries.css';

function CreateOrEditFries() {
  return (
    <div>
      <Container className="editFries__container">
        <h2>Editar o Crear Papas Fritas</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="Number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name="file"></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridsize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select defaultValue="Tamaño">
                <option>Tamaño</option>
                <option>Chico</option>
                <option>Mediano</option>
                <option>Grande</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridVegan">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select defaultValue="Es Veggie">
                <option>Es Veggie?</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button>Confirmar</Button>
          <hr />
        </Form>
      </Container>
    </div>
  );
}

export default CreateOrEditFries;
