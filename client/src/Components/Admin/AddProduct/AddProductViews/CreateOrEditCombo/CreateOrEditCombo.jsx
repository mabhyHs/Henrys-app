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
  updateCombos,
} from '../../../../../Redux/actions/actions';

import './CreateOrEditCombo.css';

function CreateOrEditCombo({ data }) {
  const dispatch = useDispatch();
  // const [selectBeverage, setSelectBeverage] = useState([]);
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
        // beverage: data.beverage.map((e) => e.id),
        burger: data.burger,
        imgUri: '',
        isVeggie: data.isVeggie,
      });
      // setSelectBeverage(data.beverage.map((el) => el));
      setRestore(true);
    }
  }, [dispatch, edit, isRestore]);

  const onChange = (e) => {
    console.log(input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function isEdit() {
    return data && Object.keys(data).length;
  }

  function handleSelectBeverages(e) {
    const value = JSON.parse(e.target.value);
    if (!input.beverage.map((e) => e.id).includes(value.id)) {
      setInput({
        ...input,
        beverage: [...input.beverage, value],
      });
    }
  }

  function handleDeleteBeverages(e) {
    setInput({
      ...input,
      beverage: input.beverage.filter((c) => c.id !== e.target.value),
    });
  }

  function handleSelectFries(e) {
    // console.log(input.fries);
    console.log(e.target.value);
    const value = JSON.parse(e.target.value);
    if (!input.fries.map((e) => e.id).includes(value.id)) {
      setInput({
        ...input,
        fries: [...input.fries, value],
      });
    }
  }

  function handleDeleteFries(e) {
    setInput({
      ...input,
      fries: input.fries.filter((c) => c.id !== e.target.value),
    });
  }

  function handleSelectBurgers(e) {
    const value = JSON.parse(e.target.value);
    if (!input.burger.map((e) => e.id).includes(value.id)) {
      setInput({
        ...input,
        burger: [...input.burger, value],
      });
    }
  }

  function handleDeleteBurgers(e) {
    setInput({
      ...input,
      burger: input.burger.filter((c) => c.id !== e.target.value),
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (edit) {
      console.log({
        ...input,
        beverages: input.beverage.map((e) => e.id),
        fries: input.fries.map((e) => e.id),
        burgers: input.burger.map((e) => e.id),
      });
      dispatch(
        updateCombos({
          ...input,
          beverages: input.beverage.map((e) => e.id),
          fries: input.fries.map((e) => e.id),
          burgers: input.burger.map((e) => e.id),
        })
      );
    } else {
      // post
    }
  };
  return (
    <Container>
      <div className="editCombo__container">
        <h2>{edit ? 'Editar Combo' : 'Crear Combo'}</h2>
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
              type="url"
              name="imgUri"
              value={input.imgUri}
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group
              onChange={(e) => handleSelectBeverages(e)}
              as={Col}
              controlId="beverages"
            >
              <Form.Label>Bebida</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                {beverages &&
                  beverages.map((bev) => (
                    <option value={JSON.stringify(bev)} key={bev.id}>
                      {bev.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <div>
              {input.beverage?.map((e) => (
                <div key={e.id}>
                  <p>{e.name}</p>
                  <button
                    value={e.id}
                    type="button"
                    onClick={(e) => handleDeleteBeverages(e)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <Form.Group
              as={Col}
              controlId="burger"
              multiple
              onChange={(e) => handleSelectBurgers(e)}
            >
              <Form.Label>Hamburguesa</Form.Label>
              <Form.Select
                defaultValue="seleccionar"
                name="burger"
                value={input.burger}
              >
                <option>Seleccionar</option>
                {burgers &&
                  burgers.map((bur) => (
                    <option value={JSON.stringify(bur)} key={bur.id}>
                      {bur.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
          </Row>
          <div>
            {input.burger?.map((e) => (
              <div key={e.id}>
                <p>{e.name}</p>
                <button
                  value={e.id}
                  type="button"
                  onClick={(e) => handleDeleteBurgers(e)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <Row className="mb-3">
            <Form.Group
              as={Col}
              controlId="fries"
              onChange={(e) => handleSelectFries(e)}
            >
              <Form.Label>Papas</Form.Label>
              <Form.Select
                defaultValue="seleccionar"
                name="fries"
                value={input.fries}
              >
                <option>Seleccionar</option>
                {fries &&
                  fries.map((bur) => (
                    <option value={JSON.stringify(bur)} key={bur.id}>
                      {bur.name}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <div>
              {input.fries?.map((e) => (
                <div key={e.id}>
                  <p>{e.name}</p>
                  <button
                    value={e.id}
                    type="button"
                    onClick={(e) => handleDeleteFries(e)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <Form.Group as={Col} controlId="isVeggie">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select
                onChange={onChange}
                defaultValue="Es Veggie"
                name="isVeggie"
              >
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button onClick={onSubmit} variant="primary" type="submit">
            Confirmar
          </Button>
          <hr />
        </Form>
      </div>
    </Container>
  );
}

export default CreateOrEditCombo;
