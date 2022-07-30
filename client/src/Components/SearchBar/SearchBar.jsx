import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'react-bootstrap-icons';
import { getIngredients } from '../../Redux/actions/actions';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      return alert('escribe el nombre de tu hamburguesa!');
    } else {
      dispatch(getIngredients(name));
      setName('');
    }
  }

  //   lo que retorna

  return (
    <div className="pt-4">
      <input
        className="search__input ps-2"
        value={name}
        type="text"
        placeholder="Busca tu hamburguesa"
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
