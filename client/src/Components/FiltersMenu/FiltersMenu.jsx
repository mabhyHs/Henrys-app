import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './FiltersMenu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, setCategory } from '../../Redux/actions/actions';

function FiltersMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  const handleSortByPrice = (e) => {
    dispatch(getProduct(categories, e.target.value));
  };

  const handleBurgers = () => {
    dispatch(getProduct('burgers'));
    dispatch(setCategory('burgers'));
    navigate('/menu');
  };

  const handleCombos = () => {
    dispatch(getProduct('combos'));
    dispatch(setCategory('combos'));
    navigate('/menu');
  };

  const handleBeverages = () => {
    dispatch(getProduct('beverages'));
    dispatch(setCategory('beverages'));
    navigate('/menu');
  };

  const handleFries = () => {
    dispatch(getProduct('fries'));
    dispatch(setCategory('fries'));
    navigate('/menu');
  };

  /* const handleVeggie = () => {
    dispatch(getProduct('isVeggie'));
    dispatch(setCategory('veggie'));
    navigate('/menu');
  }; */

  const handleAll = () => {
    dispatch(getProduct());
    dispatch(setCategory(''));
    navigate('/menu');
  };

  return (
    <Container>
      <div className="m-3 order__container">
        <Button as={Link} to="/addBurger" className="createBurger__btn">
          Creá tu Hamburguesa
        </Button>

        <select
          onChange={(e) => handleSortByPrice(e)}
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
          <Button onClick={handleAll} className="filter__btn">
            Todo
          </Button>
          <Button onClick={handleBurgers} className="filter__btn">
            Hamburguesas
          </Button>
          <Button onClick={handleCombos} className="filter__btn">
            Combos
          </Button>
          <Button onClick={handleBeverages} className="filter__btn">
            Bebidas
          </Button>
          {/* <Button onClick={handleVeggie} className="filter__btn">
            Veggie
          </Button> */}
          <Button onClick={handleFries} className="filter__btn">
            Papas
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default FiltersMenu;
