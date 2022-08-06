import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from 'react-router-dom';

import './AddProductFilters.css';

function AddProductsFilters({ setFilter, filters }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  const creaBurger = () => {
    navigate('/admineditburger');
  };

  const creaCombo = () => {
    navigate('/admineditcombo');
  };

  const creaBeverage = () => {
    navigate('/admineditbeverage');
  };

  const creaBurgerBase = () => {
    navigate('/admineditburgerbase');
  };

  const creaFries = () => {
    navigate('/admineditfries');
  };

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
            <Button
              onClick={creaBurgerBase}
              className="btn__modal__create"
              variant="secondary"
            >
              Base Burguer
            </Button>
            <Button
              onClick={creaBurger}
              className="btn__modal__create"
              variant="secondary"
            >
              Hamburguesa
            </Button>
            <Button
              onClick={creaBeverage}
              className="btn__modal__create"
              variant="secondary"
            >
              Bebidas
            </Button>
            <Button
              onClick={creaCombo}
              className="btn__modal__create"
              variant="secondary"
            >
              Combos
            </Button>
            <Button
              onClick={creaFries}
              className="btn__modal__create"
              variant="secondary"
            >
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
          <Button
            onClick={handleOnChange}
            name="category"
            value=""
            className={
              filters.category === '' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Todo
          </Button>
          <Button
            onClick={handleOnChange}
            name="category"
            value="burgers"
            className={
              filters.category === 'burgers'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Hamburguesas
          </Button>
          <Button
            onClick={handleOnChange}
            name="category"
            value="combos"
            className={
              filters.category === 'combos'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Combos
          </Button>
          <Button
            onClick={handleOnChange}
            name="category"
            value="beverages"
            className={
              filters.category === 'beverages'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Bebidas
          </Button>
          <Button
            onClick={handleOnChange}
            name="category"
            value="fries"
            className={
              filters.category === 'fries'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Papas
          </Button>
          <Button
            onClick={handleOnChange}
            name="isVeggie"
            value="true"
            className={
              filters.isVeggie === 'true'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Veggie
          </Button>
          <Button
            onClick={handleOnChange}
            name="paranoid"
            value="false"
            className={
              filters.paranoid === 'false'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Inactivos
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default AddProductsFilters;
