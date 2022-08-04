/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartProduct,
  allProductsDelete,
  deleteCart,
  productDelete,
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
  const [cupon, setCupon] = useState('')

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
      } else {
        window.localStorage.removeItem('carrito');
        window.localStorage.removeItem("compra");
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
            },
            { headers: { 'auth-token': JSON.parse(window.localStorage.getItem('user')).token } }
          );
    
          window.localStorage.setItem("compra", JSON.stringify(json.data));

          navigate("/mercadoPago");
    
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
              }).then(function() {
                navigate("/userlogin");
            });
        }    
  };
  function handleCupon(e){
    setCupon(e.target.value)
  }
  function validateCupon(cupon){
    try{
      const json = {code: 'XS123', porcentaje: 20}
      total = total - (total * json.porcentaje / 100)
      console.log(total)
    }catch(error){
      console.log(error)
    }
  }
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
            <h2 className="shoppingCart__h2 mb-4">¿Necesitas algo más?</h2>
            <textarea
              name="message"
              placeholder="* Me gustaria quitar o añadir..."
              id="message_input"
              cols="36"
              rows="3"
            />
            <h2>Cupon de descuento:</h2>
            <input type='text' name='cupon' onChange={(e) => handleCupon(e)}></input>
            <button onClick={() => validateCupon(cupon)}>Aplicar</button>
            <h2 className="shoppingCart__h2 mb-4">
              Total de mi compra: <span>{`$${' ' + total}`}</span>
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
