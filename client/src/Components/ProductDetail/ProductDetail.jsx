import React from 'react';
import Container from 'react-bootstrap/Container';
import imgProduct from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';

import './ProductDetail.css';

function ProductDetail() {
  return (
    <div>
      <Container className="productDetail__container">
        <h1 className="productDetail__tittle">Hamburguesa Clásica</h1>
        <img
          src={imgProduct}
          className="productDetail__img img-fluid"
          alt="imagen del producto"
        />
        <h2>Descripción:</h2>
        <p className="productDetail__text">Tomate</p>
      </Container>
    </div>
  );
}

export default ProductDetail;
