/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartProduct,
  allProductsDelete,
  deleteCart,
  productDelete,
  setDiscount,
  getCoupons,
} from '../../Redux/actions/actions';
import CardProductCart from '../CardProductCart/CardProductCart';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PlusLg, DashLg } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import imgDefault from '../../Assets/Images/Hamburguesas/Hamburguesa-con-Queso.png';

import './ShoppingCart.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function ShoppingCart() {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const couponsState = useSelector((state) => state.coupons);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
      } else {
        window.localStorage.removeItem('carrito');
        window.localStorage.removeItem('compra');
      }
    } else {
      setMount(false);
    }
  }, [dispatch, itemsToCart, mount]);

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

  let total = Object.values(itemsToCart).reduce(
    (acc, { price, cantidad }) => acc + price * cantidad,
    0
  );

  const handleMPago = async () => {
    try {
      const json = await axios.post(
        'http://localhost:3001/pay/mercadopago',
        {
          cart: JSON.parse(window.localStorage.getItem('carrito')),
          coupons: coupons.map((c) => c.code),
        },
        {
          headers: {
            'auth-token': JSON.parse(window.localStorage.getItem('user')).token,
          },
        }
      );

      window.localStorage.setItem('compra', JSON.stringify(json.data));

      navigate('/mercadoPago');
    } catch (error) {
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        confirmButtonText: 'Iniciar sesión',
        title: 'Opss...',
        text: 'Primero debes iniciar sesión!',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      }).then(function () {
        navigate('/userlogin');
      });
    }
  };

  useEffect(() => {
    if (!couponsState) {
      dispatch(getCoupons());
    }
  }, [dispatch, getCoupons]);

  function handleAddCoupon(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      const value = e.target.value.trim();

      if (value === '') {
        return null;
      }

      const couponInState = couponsState.find((c) => c.code === value);

      if (!couponInState) {
        return Swal.fire({
          customClass: {
            confirmButton: 'confirmBtnSwal',
          },
          confirmButtonText: 'OK',
          title: 'Opss...',
          text: 'El cupon ingresado no existe!!',
          imageUrl:
            'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Logo henrys',
        });
      }

      if (!coupons.find((c) => c.code === value)) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const yyyy = today.getFullYear();
        const todayDate = new Date(`${yyyy}-${mm}-${dd}`);
        const expDate = new Date(couponInState.expirationDate);

        if (todayDate > expDate) {
          return Swal.fire({
            customClass: {
              confirmButton: 'confirmBtnSwal',
            },
            confirmButtonText: 'OK',
            title: 'Opss...',
            text: 'El cupon esta vencido',
            imageUrl:
              'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Logo henrys',
          });
        }
        setCoupons(coupons.concat(couponInState));
        e.target.value = '';
      }
    }
  }

  function handleDeleteCoupon(e, code) {
    e.preventDefault();
    setCoupons(coupons.filter((c) => c.code !== code));
  }

  useEffect(() => {
    let discount = 0;

    itemsToCart.map((item) => {
      for (let i = 0; i < coupons?.length; i++) {
        if (coupons[i]?.productsId?.includes(item.id)) {
          discount += (item.price / 100) * coupons[i].discountPorcentage;
        }
      }
      return null;
    });

    setDiscount(discount);
  }, [itemsToCart, coupons]);

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
            <div>
              <h2 className="shoppingCart__h2 mb-4">
                Ingresa tu cupon de descuento
              </h2>
              <input type="text" onKeyDown={handleAddCoupon} />
              <div>
                {coupons?.map((c) => (
                  <div key={c?.code}>
                    {c?.code}
                    <button
                      type="button"
                      onClick={(e) => handleDeleteCoupon(e, c.code)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="shoppingCart__h2 mb-4">¿Necesitas algo más?</h2>
            <textarea
              name="message"
              placeholder="* Me gustaria quitar o añadir..."
              id="message_input"
              cols="36"
              rows="3"
            />
            {discount > 0 && (
              <h3 className="shoppingCart__h2 mb-4">
                Subtotal: <span>{`$${' ' + total}`}</span>
              </h3>
            )}
            {discount > 0 && (
              <h3 className="shoppingCart__h2 mb-4">
                Descuentos: <span>{`$${' ' + discount}`}</span>
              </h3>
            )}
            <h2 className="shoppingCart__h2 mb-4">
              Total de mi compra: <span>{`$${' ' + total - discount}`}</span>
            </h2>
            <Link to={false}>
              <Button onClick={handleMPago}>Confirmar Pago</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default ShoppingCart;
