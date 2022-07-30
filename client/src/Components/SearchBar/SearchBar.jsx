import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'react-bootstrap-icons';
import { getIngredients } from '../../Redux/actions/actions';
import './SearchBar.css';

function SearchBar({ setFilter }) {

  function handleInput(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilter(e.target.name, e.target.value);
  }

  return (
    <div className="pt-4">
      <input
        className="search__input ps-2"
        type="text"
        placeholder="Busca tu hamburguesa"
        onChange={(e) => handleInput(e)}
      />

      <button
        className="search__btn"
        type="submit"
        name='search'
        onClick={(e) => handleSubmit(e)}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
