import React from 'react';
import CardProductMenu from '../CardProductMenu/CardProductMenu';

function ProductsContainerMenu({ currentProduct }) {
  return (
    <div>
      {currentProduct.map((item) => (
        <CardProductMenu
          name={item.name}
          price={item.price}
          imgUri={item.imgUri}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default ProductsContainerMenu;
