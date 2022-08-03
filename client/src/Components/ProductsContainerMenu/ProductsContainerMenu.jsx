import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProductMenu from '../CardProductMenu/CardProductMenu';
import Container from 'react-bootstrap/Container';
import './ProductsContainerMenu.css';
import { addCartProduct, setLocalStorage } from '../../Redux/actions/actions';

function ProductsContainerMenu({ currentProduct }) {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
      } else {
        window.localStorage.removeItem('carrito');
      }
    } else {
      setMount(false);
    }
  }, [dispatch, itemsToCart, mount]);

  const addToCart = (id) => {
    dispatch(addCartProduct(id));
  };

  return (
    <div>
      <Container className="products__container__menu mt-3">
        {currentProduct.map((item) => (
          <CardProductMenu
            id={item.id}
            name={item.name}
            price={item.price}
            imgUri={item.imgUri}
            key={item.name}
            addToCart={addToCart}
          />
        ))}
      </Container>
    </div>
  );
}

export default ProductsContainerMenu;
