import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {
  getBeverages,
  getBurgers,
  getFries,
} from '../../../../../Redux/actions/actions';

import './CreateOrEditCombo.css';

function CreateOrEditCombo({ data }) {
  const dispatch = useDispatch();
  const burgers = useSelector((state) => state.burgers);
  const fries = useSelector((state) => state.fries);
  const beverages = useSelector((state) => state.beverages);
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    fries: [],
    beverage: [],
    burger: [],
    imgUri: '',
    isVeggie: '',
  });

  useEffect(() => {
    dispatch(getBurgers('burgers'));
    dispatch(getFries('fries'));
    dispatch(getBeverages('beverages'));
    if (edit && !isRestore) {
      setInput({
        name: data.name,
        price: data.price,
        fries: data.fries,
        beverage: data.beverage,
        burger: data.burger,
        imgUri: '',
        isVeggie: data.isVeggie,
      });
      setRestore(true);
    }
  }, [dispatch, edit, isRestore]);

  console.log(burgers, fries, beverages);

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function isEdit() {
    return data && Object.keys(data).length;
  }

  function handleSelect(e) {
    if (!input.ingredient.includes(e.target.value)) {
      setInput({
        ...input,
        ingredient: [...input.ingredient, e.target.value],
      });
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      ingredient: input.ingredient.filter((c) => c !== e),
    });
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
      <div className="editCombo__container">
        <h2>Editar Crear Combo</h2>
        <Form>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="comboName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                name="name"
                value={input.name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="comboPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={onChange}
                type="number"
                name="price"
                value={input.price}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="uploadImgCombo">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              name="imgUri"
              value={input.imgUri}
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="beverages">
              <Form.Label>Bebida</Form.Label>
              <Form.Select defaultValue="Seleccionar">
                <option>Seleccionar</option>
                {beverages &&
                  beverages.map((bur) => <option key={bur}>{bur.name}</option>)}
                <div>
                  {input.beverage &&
                    input.beverage.map((e) => (
                      <div key={e.id || e}>
                        <p>{e.name || e}</p>
                        <button type="button" onClick={() => handleDelete(e)}>
                          X
                        </button>
                      </div>
                    ))}
                </div>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="burger" multiple>
              <Form.Label>Hamburguesa</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                {burgers &&
                  burgers.map((bur) => <option key={bur}>{bur.name}</option>)}
                <div>
                  {input.burger &&
                    input.burger.map((e) => (
                      <div key={e.id || e}>
                        <p>{e.name || e}</p>
                        <button type="button" onClick={() => handleDelete(e)}>
                          X
                        </button>
                      </div>
                    ))}
                </div>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="fries">
              <Form.Label>Papas</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                {fries &&
                  fries.map((bur) => <option key={bur}>{bur.name}</option>)}
                <div>
                  {input.fries &&
                    input.fries.map((e) => (
                      <div key={e.id || e}>
                        <p>{e.name || e}</p>
                        <button type="button" onClick={() => handleDelete(e)}>
                          X
                        </button>
                      </div>
                    ))}
                </div>
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

export default CreateOrEditCombo;
