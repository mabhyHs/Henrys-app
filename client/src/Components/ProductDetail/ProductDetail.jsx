import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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
        <Button as={Link} to="/menu" className="mt-3 mb-5">
          Volver al Menú
        </Button>
      </Container>
    </div>
  );
}

export default ProductDetail;
