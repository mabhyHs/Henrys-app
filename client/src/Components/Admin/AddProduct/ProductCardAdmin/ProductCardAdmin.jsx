import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

import './ProductCardAdmin.css';
import { useDispatch } from 'react-redux';
import {
  deleteProduct,
  restoreProduct,
} from '../../../../Redux/actions/actions';

function ProductCardAdmin({ data, isDeleted }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/admineditproducts/${data.id}`);
  };

  const onDelete = () => {
    if (isDeleted) {
      dispatch(deleteProduct(data.id, data.type));
    } else {
      dispatch(restoreProduct(data.id, data.type));
    }
  };

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
        {isDeleted &&    
            <Button onClick={redirect} variant="secondary">
                <PencilSquare />
            </Button>}
        <button onClick={onDelete}>{isDeleted ? 'Borrar' : 'Restaurar'}</button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardAdmin;
