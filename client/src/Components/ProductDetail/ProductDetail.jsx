import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import imgProduct from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import { getProductById } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.css';

function ProductDetail() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const producto = useSelector((state) => state.productDetail)
  useEffect(() => {
    dispatch(getProductById(id))
  })

  return (
    <div>
      <Container className="productDetail__container">
        <h1 className="productDetail__tittle">{producto.name}</h1>
        <img
          src={producto.imgUri}
          className="productDetail__img img-fluid"
          alt="imagen del producto"
        />
        <h2>Descripción:</h2>
        <p className="productDetail__text">Tomate</p>
        <p>{producto.price}</p>
        <Button as={Link} to="/menu" className="mt-3 mb-5">
          Volver al Menú
        </Button>
      </Container>
    </div>
  );
}

export default ProductDetail;
