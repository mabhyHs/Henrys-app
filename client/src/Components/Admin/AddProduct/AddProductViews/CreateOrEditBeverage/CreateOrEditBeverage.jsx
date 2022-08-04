import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './CreateOrEditBeverage.css';

function CreateOrEditBeverage() {
  return (
    <Container>
      <div className="editBeverage__container">
        <h2>Editar Crear Bebidas</h2>
        <Form>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="beverageName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="beveragePrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="Number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="uploadImgBeverage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" name="file"></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="isCarbonated">
              <Form.Label>Gasificada</Form.Label>
              <Form.Select defaultValue="Seleccionar">
                <option>Seleccionar</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="IsSugar">
              <Form.Label>Tiene Azúcar</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="size">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="isVeggie">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select defaultValue="Es Veggie">
                <option>Es Veggie?</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Confirmar
          </Button>
          <hr />
        </Form>
      </div>
    </Container>
  );
}

export default CreateOrEditBeverage;
