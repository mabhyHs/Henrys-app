import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './FiltersMenu.css';

function FiltersMenu() {
  return (
    <Container>
      <div className="m-3 order__container">
        <Button className="createBurger__btn">Creá tu Hamburguesa</Button>

        <select className="select__order">
          <option value="0">Ordenar por precio</option>
          <option value="1">Mayor a menor</option>
          <option value="2">Menor a menor</option>
        </select>
      </div>
      <div className="filters__btn__container">
        <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button className="filter__btn">Todo</Button>
          <Button className="filter__btn">Hamburguesas</Button>
          <Button className="filter__btn">Combos</Button>
          <Button className="filter__btn">Bebidas</Button>
          <Button className="filter__btn">Veggie</Button>
          <Button className="filter__btn">Papas</Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default FiltersMenu;
