import { React, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIngredients,
  postBurgers,
  updateBurger,
} from '../../../../../Redux/actions/actions';
import './CreateOrEditBurger.css';

function CreateOrEditBurger({ data }) {
  const dispatch = useDispatch();
  const ingredientes = useSelector((state) => state.ingredients);
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    id: '',
    name: '',
    price: '',
    ingredient: [],
    imgUri: '',
    isVeggie: '',
  });

  useEffect(() => {
    dispatch(getIngredients());
    if (edit && !isRestore) {
      setInput({
        id: data.id,
        name: data.name,
        price: data.price,
        ingredient: data.ingredient,
        imgUri: data.imgUri,
        isVeggie: data.isVeggie,
      });
      setRestore(true);
    }
    console.log(input);
  }, [dispatch, edit, isRestore]);

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
      console.log(input.ingredient);
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      ingredient: input.ingredient.filter((c) => c !== e),
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updateBurger(input));
    } else {
      dispatch(postBurgers({ ...input, id: undefined }));
    }
  };

  return (
    <Container>
      <div className="editBurger__container">
        <h2>{edit ? 'Editar Hamburguesa' : 'Crear Hamburguesa'}</h2>
        <Form>
          <hr />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="burgerName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={onChange}
                type="text"
                value={input.name}
                name="name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="burgerPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={onChange}
                type="number"
                value={input.price}
                name="price"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="uploadImgBurger">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                onChange={onChange}
                type="url"
                name="imgUri"
                value={input.imgUri}
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="isVeggie">
              <Form.Label>Vegetariano</Form.Label>
              <Form.Select
                onChange={onChange}
                defaultValue="Es Veggie"
                value={input.isVeggie}
                name="isVeggie"
              >
                <option>Es Veggie?</option>
                <option value={true}>Si</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              onChange={(e) => handleSelect(e)}
              as={Col}
              controlId="burgerIngredients"
            >
              <Form.Label>Ingredientes</Form.Label>
              <Form.Select defaultValue="seleccionar">
                <option>Seleccionar</option>
                {ingredientes &&
                  ingredientes?.map((el) => (
                    <option key={el.id}>{el.name}</option>
                  ))}
              </Form.Select>
            </Form.Group>
            <div>
              {input.ingredient &&
                input.ingredient.map((e) => (
                  <div key={e.id || e}>
                    <p>{e.name || e}</p>
                    <button type="button" onClick={() => handleDelete(e)}>
                      X
                    </button>
                  </div>
                ))}
            </div>
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

export default CreateOrEditBurger;
