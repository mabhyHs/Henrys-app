import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgProduct from '../../../../Assets/Images/combos/Combo1.png';
import { PencilSquare } from 'react-bootstrap-icons';

import './ProductCardAdmin.css';

function ProductCardAdmin() {
  return (
    <Card style={{ width: '15rem' }} className="adminProductHome__card">
      <Card.Img
        variant="top"
        src={imgProduct}
        className="adminProductHome__card__img"
      />
      <Card.Body className="adminProductHome__cardBody">
        <Card.Title className="adminProductHome__cardTittle">
          Nombre Producto
        </Card.Title>
        <Button variant="secondary">
          <PencilSquare />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardAdmin;
