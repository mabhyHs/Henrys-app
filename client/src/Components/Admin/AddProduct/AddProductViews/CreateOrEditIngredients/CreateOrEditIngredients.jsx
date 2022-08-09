import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import './CreateOrEditIngredients.css';
import '../FormsGlobal.css';

function CreateOrEditIngredients() {
  return (
    <Container className="mb-5">
      <h2>Editar Ingrediente</h2>
      <hr />
      <div className="editIngredients__container">
        <Form className="editOrCreate__form">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                placeholder="Nombre *"
                type="text"
                name="name"
                value="{input.name}"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Precio *</Form.Label>
              <Form.Control
                placeholder="Precio *"
                type="number"
                name="price"
                value="{input.price}"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridsize">
              <Form.Label>Se repite? *</Form.Label>
              <Form.Select name="isRepeat" value="{input.isRepeat}">
                <option value="No" defaultValue>
                  No
                </option>
                <option value="Si">Si</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridVegan">
              <Form.Label>Veggie *</Form.Label>
              <Form.Select name="isVeggie" value="{input.isVeggie}">
                <option value={true} defaultValue>
                  Si
                </option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button onClick="{onSubmit}">Confirmar</Button>
        </Form>
      </div>
      <hr />
    </Container>
  );
}

export default CreateOrEditIngredients;
