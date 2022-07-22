import React from 'react';
import FiltersMenu from '../FiltersMenu/FiltersMenu';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';

import './Menu.css';

function Menu() {
  return (
    <div className="menu__container">
      <SearchBar />
      <FiltersMenu />
      <ProductsContainerMenu />
    </div>
  );
}

export default Menu;
