/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartProduct,
  allProductsDelete,
  deleteCart,
  productDelete,
  setLocalStorage,
  postMP,
} from '../../Redux/actions/actions';
import CardProductCart from '../CardProductCart/CardProductCart';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PlusLg, DashLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import imgDefault from '../../Assets/Images/Hamburguesas/Hamburguesa-con-Queso.png';

import './ShoppingCart.css';

function ShoppingCart() {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);
  /* const mercadopago = useSelector((state) => state.mercaDopago); */

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
      } else {
        window.localStorage.removeItem('carrito');
      }
    } else {
      if (!itemsToCart.length && window.localStorage.getItem('carrito')) {
        dispatch(
          setLocalStorage(JSON.parse(window.localStorage.getItem('carrito')))
        );
      }
      setMount(false);
    }
  }, [dispatch, itemsToCart, mount]);

  /* useEffect(() => {
    if (mercadopago.id) {
      montarButtonMP(mercadopago.id);
    }
  }, [mercadopago]);

  const montarButtonMP = (id) => {
    const formChilds = document.getElementById('MP').childNodes;
    if (id && formChilds.length === 0) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', id);
      const form = document.getElementById('MP');
      form.appendChild(script);
    }
  }; */

  const addToCart = (id) => {
    dispatch(addCartProduct(id));
  };

  const handleDeleteCart = () => {
    dispatch(deleteCart());
  };

  const handleDelete = (id, all = false) => {
    if (all) {
      dispatch(allProductsDelete(id));
    } else {
      dispatch(productDelete(id));
    }
  };

  const total = Object.values(itemsToCart).reduce(
    (acc, { price, cantidad }) => acc + price * cantidad,
    0
  );

  const handleMPago = () => {
    dispatch(
      postMP(
        JSON.parse(window.localStorage.getItem('carrito')),
        JSON.parse(window.localStorage.getItem('user')).token
      )
    );
  };

  return (
    <Container className="py-4 shoppinCart__container">
      {itemsToCart && itemsToCart?.length === 0 ? (
        <div>
          <h2>El carrito se encuentra vacío</h2>
          <p>
            Entrá a nuestro menú y tentate con las hamburguesas más deliciosas
            del condado.
          </p>
          <Link to="/menu">
            <Button>Ir al Menú</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h1>Mi Carrito</h1>
            <Button onClick={handleDeleteCart} type="button">
              Limpia tu Carrito
            </Button>
          </div>
          <hr />
          {itemsToCart.map((item) => (
            <div key={item.name}>
              {
                <CardProductCart
                  id={item.id}
                  name={item.name}
                  cantidad={item.cantidad}
                  price={item.price}
                  imgUri={item.imgUri || imgDefault}
                />
              }
              <div>
                <Button
                  className="productCart__btn"
                  type="button"
                  onClick={() => addToCart(item.id)}
                >
                  <PlusLg />
                </Button>
                <Button
                  className="productCart__btn"
                  type="button"
                  onClick={() => handleDelete(item.id)}
                >
                  <DashLg />
                </Button>
                <Button
                  className="productCart__btn"
                  type="button"
                  onClick={() => handleDelete(item.id, true)}
                >
                  Quitar Producto
                </Button>
              </div>
              <hr />
            </div>
          ))}
          <div className="shoppingCart__total__container">
            <h2 className="shoppingCart__h2 mb-4">
              Total de mi compra: <span>{`$${' ' + total}`}</span>
            </h2>
            <Link to="/mercadoPago">
              <Button onClick={handleMPago}>Confirmar Pago</Button>
              {/* <form id="MP" method="GET"></form> */}
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default ShoppingCart;
