import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFries,
  postFries,
  updateFries,
} from '../../../../../Redux/actions/actions';

import './CreateOrEditFries.css';

function CreateOrEditFries({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fries = useSelector((state) => state.fries);
  const [edit] = useState(isEdit());
  const [isRestore, setRestore] = useState(false);
  const [input, setInput] = useState({
    id: '',
    name: '',
    price: '',
    size: '',
    imgUri: '',
    isVeggie: '',
  });

  useEffect(() => {
    dispatch(getFries('fries'));
    if (edit && !isRestore) {
      setInput({
        id: data.id,
        name: data.name,
        price: data.price,
        size: data.size,
        imgUri: '',
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (edit) {
      dispatch(updateFries(input));
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: `${input.name}`,
        text: 'Actualizada con exito',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659288361/logo-henrys-20x20_ftnamq.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    } else {
      dispatch(postFries({ ...input, id: undefined }));
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: `${input.name}`,
        text: 'Creada con exito',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659288361/logo-henrys-20x20_ftnamq.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
    navigate('/adminproducts');
  };

  return (
    <div>
      <Container className="editFries__container">
        <h2>{edit ? 'Editar Papas Fritas' : 'Crear Papas Fritas'}</h2>
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

          <Form.Group className="mb-3" controlId="formGridImage">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              onChange={onChange}
              type="url"
              name="imgUri"
              value={input.imgUri}
            ></Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridsize">
              <Form.Label>Tamaño</Form.Label>
              <Form.Select
                onChange={onChange}
                defaultValue="Tamaño"
                name="size"
                value={input.size}
              >
                <option>Tamaño</option>
                <option value="Chico">Chico</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </Form.Select>
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

export default CreateOrEditFries;
