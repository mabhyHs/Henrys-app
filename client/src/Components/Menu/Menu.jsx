/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const mount = useRef(false);

    const [filters, setFilters] = useState({
        filter: "", // alguna filtro
        search:  "", // algun string
        order:  "", // algun string
        isVeggie: "" // vegano
    });

    function setFilter(name, value){  
        setFilters({...filters, [name]: value});
    }

    const setPage = (page) => {
      setCurrentPage(page);
    };

  useEffect(() => {
    if(!mount.current){
        console.log("a")
        mount.current = true;
    } else if(filters){
        setPage(1);          
        dispatch(getProduct());
        console.log("b")
    }

  }, [dispatch, filters]);

  return (
    <div className="menu__container">
      <SearchBar setFilter={setFilter}/>
      <FiltersMenu setFilter={setFilter} filters={filters} />
      <ProductsContainerMenu currentProduct={currentProduct} />

      <div className="menu__pagination__container mb-3 mt-3">
        <Pagination
          burgersPerPage={burgersPerPage}
          allProducts={allProducts.length}
          currentPage={currentPage}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}

export default Menu;
