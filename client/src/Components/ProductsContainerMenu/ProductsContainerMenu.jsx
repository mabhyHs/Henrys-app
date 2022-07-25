import React from 'react';
import CardProductMenu from '../CardProductMenu/CardProductMenu';
import Container from 'react-bootstrap/Container';

function ProductsContainerMenu({ currentProduct }) {
  return (
    <div>
      <Container className="products__container__menu mt-3">
        {currentProduct.map((item) => (
          <CardProductMenu
            name={item.name}
            price={item.price}
            imgUri={item.imgUri}
            key={item.name}
          />
        ))}
      </Container>
    </div>
  );
}

export default ProductsContainerMenu;