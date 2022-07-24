import React from 'react';
import CardProductMenu from '../CardProductMenu/CardProductMenu';
import Container from 'react-bootstrap/Container';

import './ProductsContainerMenu.css';

function ProductsContainerMenu() {
  return (
    <div>
      <Container className="products__container__menu mt-3">
        <CardProductMenu />
      </Container>
    </div>
  );
}

export default ProductsContainerMenu;
