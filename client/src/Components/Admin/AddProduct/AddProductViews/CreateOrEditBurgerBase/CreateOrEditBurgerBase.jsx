import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import './CreateOrEditBurgerBase.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBurgerBase,
  postBurgerBase,
  updateBurgerBase,
} from '../../../../../Redux/actions/actions';

function CreateOrEditBurgerBase({ data }) {
  const dispatch = useDispatch();
  const base = useSelector((state) => state.burgerBase);
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    description: '',
    imgUri: '',
    isVeggie: false,
  });

  useEffect(() => {
    dispatch(getBurgerBase());
    if (edit && !isRestore) {
      setInput({
        name: data.name,
        price: data.price,
        description: data.description,
        imgUri: data.imgUri ? data.imgUri : "",
        isVeggie: data.isVeggie,
      });
      setRestore(true);
    }
  }, [dispatch, edit, isRestore, data]);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function isEdit() {
    return data && Object.keys(data).length;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (edit) {
      dispatch(updateBurgerBase(input));
    } else {
      dispatch(postBurgerBase({ ...input, id: undefined }));
    }
  };
  return (
    <div>
      <Container className="editBurgerBase__container">
        <h2>Editar Burger Base</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                name="name"
                value={input.name}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={onChange}
                type="number"
                name="price"
                value={input.price}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              onChange={onChange}
              type="url"
              name="imgUri"
              value={input.imgUri}
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                name="description"
                value={input.description}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridVegan">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select
                onChange={onChange}
                defaultValue="Es Veggie"
                name="isVeggie"
                value={input.isVeggie}
              >
                <option>Es Veggie?</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button onClick={onSubmit}>Confirmar</Button>
          <hr />
        </Form>
      </Container>
    </div>
  );
}

export default CreateOrEditBurgerBase;
