/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FiltersMenu from '../FiltersMenu/FiltersMenu';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';

import './Menu.css';

function Menu() {
  /* paginas */
  const [currentPage, setCurrentPage] = useState(1);
  const [burgersPerPage, setBurgersPerPage] = useState(9);
  const lastBurgerIndex = currentPage * burgersPerPage;
  const firstBurgerIndex = lastBurgerIndex - burgersPerPage;
  const { copyBurgers } = useSelector((store) => store);
  const currentBurger = copyBurgers.slice(firstBurgerIndex, lastBurgerIndex);

  const pageHandler = (page) => {
    setCurrentPage(page);
  };

  const setPageOne = () => {
    setCurrentPage(1);
  };

  /* next y prev */
  const nextPage = () => {
    if (currentPage < Math.ceil(copyBurgers.length / burgersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="menu__container">
      <SearchBar />
      <FiltersMenu />
      <ProductsContainerMenu />

      <div>
        <button type="button" onClick={prevPage}>
          {' '}
          prev{' '}
        </button>
        <Pagination
          burgersPerPage={burgersPerPage}
          burgersTotal={copyBurgers.length}
          onSetPage={pageHandler}
        />
        <button type="button" onClick={nextPage}>
          {' '}
          next{' '}
        </button>
      </div>
    </div>
  );
}

export default Menu;
