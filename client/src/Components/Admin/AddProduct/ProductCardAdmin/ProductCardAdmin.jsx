import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PencilSquare } from 'react-bootstrap-icons';

import './ProductCardAdmin.css';

function ProductCardAdmin({ data }) {
  return (
    <Card style={{ width: '15rem' }} className="adminProductHome__card">
      <Card.Img
        variant="top"
        src={data.imgUri}
        className="adminProductHome__card__img"
      />
      <Card.Body className="adminProductHome__cardBody">
        <Card.Title className="adminProductHome__cardTittle">
          {data.name}
        </Card.Title>
        <Button variant="secondary">
          <PencilSquare />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardAdmin;
