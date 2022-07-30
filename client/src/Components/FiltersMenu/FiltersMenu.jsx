import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import './FiltersMenu.css';

function FiltersMenu({ setFilter, filters }) {

   const handleOnChange = (e) => {
    setFilter(e.target.name, e.target.value);
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <Button as={Link} to="/addBurger" className="createBurger__btn">
          Creá tu Hamburguesa
        </Button>

        <select
          onChange={handleOnChange}
          className="select__order"
        >
          <option value="0">Ordenar por precio</option>
          <option value="desc">Mayor a menor</option>
          <option value="asc">Menor a mayor</option>
        </select>
      </div>
      <div className="filters__btn__container">
        <ButtonGroup
          aria-label="Filter Buttons"
          className="me-2 filter__btn"
          size="sm"
        >
          <Button
            name="filter"
            value=""
            onClick={handleOnChange}
            className={
                filters.filter === '' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Todo
          </Button>
          <Button
            name="filter"
            value="burgers"
            onClick={handleOnChange}
            className={
                filters.filter === 'burgers' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Hamburguesas
          </Button>
          <Button
            name="filter"
            value="combos"
            onClick={handleOnChange}
            className={
                filters.filter === 'combos' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Combos
          </Button>
          <Button
            name="filter"
            value="beverages"
            onClick={handleOnChange}
            className={
                filters.filter === 'beverages'
                ? 'filter__btn activeBtn'
                : 'filter__btn'
            }
          >
            Bebidas
          </Button>          
          <Button
            name="filter"
            value="fries"
            onClick={handleOnChange}
            className={
                filters.filter === 'fries' ? 'filter__btn activeBtn' : 'filter__btn'
            }
          >
            Papas
          </Button>

        <Button name="isVeggie" value="true" onClick={handleOnChange} className={filters.isVeggie === 'isVeggie' ? 'filter__btn activeBtn' : 'filter__btn'}>
            Veggie
        </Button>

        </ButtonGroup>
      </div>
    </Container>
  );
}

export default FiltersMenu;
