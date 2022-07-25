/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import FiltersMenu from '../FiltersMenu/FiltersMenu';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import { getProduct } from '../../Redux/actions/actions';
import './Menu.css';

function Menu() {
  const dispatch = useDispatch();
  /* paginas */
  const [currentPage, setCurrentPage] = useState(1);
  const [burgersPerPage, setBurgersPerPage] = useState(9);
  const lastBurgerIndex = currentPage * burgersPerPage;
  const firstBurgerIndex = lastBurgerIndex - burgersPerPage;
  const allProducts = useSelector((state) => state.products);
  const currentProduct = allProducts.slice(firstBurgerIndex, lastBurgerIndex);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(getProduct());
    }
  }, [dispatch]);

  const pageHandler = (page) => {
    setCurrentPage(page);
  };

  const setPageOne = () => {
    setCurrentPage(1);
  };

  /* next y prev */
  const nextPage = () => {
    if (currentPage < Math.ceil(allProducts.length / burgersPerPage)) {
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
      <FiltersMenu setPageOne={setPageOne} />
      <ProductsContainerMenu currentProduct={currentProduct} />

      <div className="menu__pagination__container mb-3 mt-3">
        <Button className="btn__round__effect" type="button" onClick={prevPage}>
          <CaretLeftFill />
        </Button>
        <Pagination
          burgersPerPage={burgersPerPage}
          allProducts={allProducts.length}
          onSetPage={pageHandler}
        />
        <Button className="btn__round__effect" type="button" onClick={nextPage}>
          <CaretRightFill />
        </Button>
      </div>
    </div>
  );
}

export default Menu;
