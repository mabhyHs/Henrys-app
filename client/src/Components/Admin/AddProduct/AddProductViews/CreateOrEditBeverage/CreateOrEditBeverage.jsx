import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './CreateOrEditBeverage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../../Redux/actions/actions';

function CreateOrEditBeverage({ data }) {
  const dispatch = useDispatch();
  const bebidas = useSelector((state) => state.products);
  const [size] = useState(['Chica', 'Mediana', 'Grande']);
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    size: '',
    isCarbonated: '',
    isSugar: '',
    imgUri: '',
    isVeggie: '',
  });

  useEffect(() => {
    dispatch(getProduct('beverages'));
    if (edit && !isRestore) {
      setInput({
        name: data.name,
        price: data.price,
        size: data.size,
        isCarbonated: '',
        isSugar: '',
        imgUri: '',
        isVeggie: data.isVeggie,
      });
      setRestore(true);
    }
  }, [dispatch, edit, isRestore]);

  console.log(bebidas);

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
      // put
    } else {
      // post
    }
  };
  return (
    <Container>
      <div className="editBeverage__container">
        <h2>{edit ? 'Editar Bebidas' : 'Crear Bebidas'}</h2>
        <Form>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="beverageName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                value={input.name}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="beveragePrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={onChange}
                type="number"
                value={input.price}
                name="price"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="uploadImgBeverage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              onChange={onChange}
              type="file"
              name="file"
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="isCarbonated">
              <Form.Label>Gasificada</Form.Label>
              <Form.Select onChange={onChange} defaultValue="Seleccionar">
                <option>Seleccionar</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="IsSugar">
              <Form.Label>Tiene Azúcar</Form.Label>
              <Form.Select onChange={onChange} defaultValue="seleccionar">
                <option>Seleccionar</option>
                <option>Si</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="size">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select onChange={onChange} defaultValue="seleccionar">
                <option>Seleccionar</option>
                {size &&
                  size.map((s) => <option key={s.id}>{s.name || s}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="isVeggie">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select onChange={onChange} defaultValue="Es Veggie">
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
