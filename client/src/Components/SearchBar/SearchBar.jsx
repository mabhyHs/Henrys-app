import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'react-bootstrap-icons';
import { getIngredients } from '../../Redux/actions/actions';
import './SearchBar.css';
// eslint-disable-next-line no-unused-vars, react/prop-types
function SearchBar({ onSearch }) {
  const dispatch = useDispatch();
  const [ingredients, setIngredients] = useState('');

  function handleInput(e) {
    e.preventDefault();
    setIngredients(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getIngredients(ingredients));
    setIngredients('');
  }

  //   lo que retorna

  return (
    <div className="pt-4">
      <input
        className="search__input ps-2"
        value={ingredients}
        type="text"
        placeholder="Buscar por Ingrediente"
        onChange={(e) => handleInput(e)}
      />

      <button
        className="search__btn"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
