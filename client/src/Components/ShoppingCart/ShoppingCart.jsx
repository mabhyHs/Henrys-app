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
} from '../../Redux/actions/actions';
import CardProductCart from '../CardProductCart/CardProductCart';

function ShoppingCart() {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);

  /* useEffect(() => {
    
    if (!itemsToCart.length && window.localStorage.getItem('carrito')) {
      dispatch(
        setLocalStorage(JSON.parse(window.localStorage.getItem('carrito')))
      );
    }
  }, [dispatch]); */

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

  const addToCart = (id) => {
    dispatch(addCartProduct(id));
  };

  const handleDeleteCart = () => {
    dispatch(deleteCart());
    window.localStorage.removeItem('carrito');
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

  return (
    <div>
      <h1>Mi Carrito</h1>
      <button onClick={handleDeleteCart} type="button">
        Limpia tu Carrito
      </button>
      {itemsToCart.map((item) => (
        <div>
          {
            <CardProductCart
              id={item.id}
              name={item.name}
              cantidad={item.cantidad}
              price={item.price}
              imgUri={item.imgUri}
              key={item.name}
            />
          }
          <div>
            <button type="button" onClick={() => addToCart(item.id)}>
              Agregar
            </button>
            <button type="button" onClick={() => handleDelete(item.id)}>
              Quitar
            </button>
            <button type="button" onClick={() => handleDelete(item.id, true)}>
              Quitar Producto
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total de mi compra ={`$${' ' + total}`}</h2>
        <button>Pagar</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
