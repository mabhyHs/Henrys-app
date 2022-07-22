import React from 'react';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';

import './Menu.css';

function Menu() {
  return (
    <div className="menu__container">
      <SearchBar />
      <ProductsContainerMenu />
    </div>
  );
}

export default Menu;
