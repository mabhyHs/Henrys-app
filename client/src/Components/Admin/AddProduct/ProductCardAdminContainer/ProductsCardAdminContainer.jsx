import React from 'react';
import ProductCardAdmin from '../ProductCardAdmin/ProductCardAdmin';

import './ProductCardAdminContainer.css';
function ProductsCardAdminContainer({ currentProduct }) {
  return (
    <div className="productAdminCards__container">
      {currentProduct &&
        currentProduct.map((item) => (
          <ProductCardAdmin data={item} key={item.id} />
        ))}
    </div>
  );
}

export default ProductsCardAdminContainer;
