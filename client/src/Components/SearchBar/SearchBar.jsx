import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../Redux/actions/actions';

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
    <div>
      <input
        value={ingredients}
        type="text"
        placeholder="ingresa tu ingrediente favorito"
        onChange={(e) => handleInput(e)}
      />

      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
