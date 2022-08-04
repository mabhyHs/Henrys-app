import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './AddProductFilters.css';

function AddProductsFilters() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className="m-3 order__container">
        <Button
          onClick={handleShow}
          variant="secondary"
          className="productFilters__btnModal"
        >
          CREAR PRODUCTOS
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear:</Modal.Title>
          </Modal.Header>
          <div className="btn__modal__container">
            <Button className="btn__modal__create" variant="secondary">
              Base Burguer
            </Button>
            <Button className="btn__modal__create" variant="secondary">
              Hamburguesa
            </Button>
            <Button className="btn__modal__create" variant="secondary">
              Bebidas
            </Button>
            <Button className="btn__modal__create" variant="secondary">
              Combos
            </Button>
            <Button className="btn__modal__create" variant="secondary">
              Papas
            </Button>
          </div>
        </Modal>
      </div>
      <hr />
      <div className="">
        <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button className="filter__btn">Todo</Button>
          <Button className="filter__btn">Hamburguesas</Button>
          <Button className="filter__btn">Combos</Button>
          <Button className="filter__btn">Bebidas</Button>
          <Button className="filter__btn">Papas</Button>
          <Button className="filter__btn">Veggie</Button>
          <Button className="filter__btn">Inactivos</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default AddProductsFilters;
