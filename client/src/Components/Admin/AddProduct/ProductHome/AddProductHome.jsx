import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ProductsCardAdminContainer from '../ProductCardAdminContainer/ProductsCardAdminContainer';
import AddProductsFilters from '../AddProductFilters/AddProductsFilters';

import './AddProductHome.css';
import AdminSearchBarProduct from '../AdminSearchBar/AdminSearchBarProduct';
import AdminPagination from '../AdminPagination/AdminPagination';

function AddProductHome() {
  return (
    <Container>
      <div className="addProductHome__container">
        <h2>Gestioná tus productos</h2>
        <AddProductsFilters />
        <AdminSearchBarProduct />
        <ProductsCardAdminContainer />
        <AdminPagination />
      </div>
    </Container>
  );
}

export default AddProductHome;
