import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import imgProduct from '../../Assets/Images/Hamburguesas/hamburguesa-clasica.png';
import { getProductById } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { HeartFill } from 'react-bootstrap-icons';

import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(getProductById(id));
    
  });

  return (
    <div>
      <Container className="productDetail__container">
        <Link to="/userfavorites" className="mt-3 mb-5 productDetail__link">
          <HeartFill className="productDetail__link__Svg " />
          Agregar a Favoritos
        </Link>
        <h1 className="productDetail__tittle">{producto.name}</h1>
        <img
          src={producto.imgUri}
          className="productDetail__img img-fluid"
          alt="imagen del producto"
        />
        <h2>Descripción:</h2>
        {producto.ingredient ?(

          producto.ingredient.map((p) => {
            return(
            <p key={p.name.length}className="productDetail__text">{p.name}</p>
            )
          })
        ):<div></div>}
        <p>Precio: {producto.price}</p>

        <Button as={Link} to="/menu" className="mt-3 mb-5">
          Volver al Menú
        </Button>
      </Container>
    </div>
  );
}

export default ProductDetail;
