import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIngredients,
  getBurgerBase,
  setLocalStorage,
  addCartProductCustom,
} from '../../Redux/actions/actions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import imgAddBurger from '../../Assets/Images/Hamburguesas/Hamburguesa-con-Queso.png';

import Swal from 'sweetalert2';

import './AddBurger.css';

const modificarIngredientes = function (
  id,
  ingredientes,
  cb,
  precio,
  setPrecio
) {
  cb((ingredientes = ingredientes.filter((i) => i.id !== id)));
  let sumaTotal = 0;
  for (const ele of ingredientes) {
    let { cantidad } = ele;
    sumaTotal += ele.price * cantidad;
  }
  setPrecio((precio = sumaTotal));
};

const añadirIngredientes = function (
  e,
  ingredientes,
  cb,
  igrGlobal,
  precio,
  setPrecio
) {
  const ingredienteSelect = igrGlobal.find((i) => i.name === e.target.value);

  if (!ingredienteSelect) return;

  let prueba = [];

  for (const ele of ingredientes) {
    if (ele.name === ingredienteSelect.name) {
      prueba.push(ele);
    }
  }

  if (prueba.length > 0) {
    prueba = [];
  } else {
    ingredienteSelect.cantidad = 1;

    if ([...ingredientes, ingredienteSelect].length <= 6) {
      cb((ingredientes = [...ingredientes, ingredienteSelect]));
      const copiaIngredientes = [...ingredientes];
      precioPrimeraVez(precio, setPrecio, copiaIngredientes);
    } else {
      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Oops...',
        text: 'Sólo puedes seleccionar hasta 6 Ingredientes',
        imageUrl:
          'https://res.cloudinary.com/henrysburgers/image/upload/v1659301854/error-henrys_zoxhtl.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    }
  }
};
const precioPrimeraVez = function (precio, setPrecio, ingredientes) {
  let sumaTotal = 0;
  for (const ele of ingredientes) {
    let { cantidad } = ele;
    sumaTotal += ele.price * cantidad;
  }
  setPrecio((precio = sumaTotal));
};

const cambiarCantidad = function (e, id, ingredientes, cb, precio, setPrecio) {
  const ingredienteSelect = ingredientes.find((i) => i.id === id);
  const index = ingredientes.indexOf(ingredienteSelect);
  if (e.target.name === 'mas' && ingredienteSelect.cantidad < 10) {
    ingredienteSelect.cantidad += 1;
  } else if (e.target.name === 'menos' && ingredienteSelect.cantidad > 1) {
    ingredienteSelect.cantidad -= 1;
  }
  let copiaIngredientes = [...ingredientes];
  copiaIngredientes[index] = ingredienteSelect;

  cb((ingredientes = [...copiaIngredientes]));
  let sumaTotal = 0;
  for (const ele of ingredientes) {
    let { cantidad } = ele;
    sumaTotal += ele.price * cantidad;
  }
  if (ingredienteSelect.cantidad > 0) {
    setPrecio((precio = sumaTotal));
  }
};

function AddBurger() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  const burgerBase = useSelector((state) => state.burgerBase);
  const [ingredientsAdd, setIngredientsAdd] = useState([]);
  const [precio, setPrecio] = useState(0);

  const itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    dispatch(getBurgerBase());
    dispatch(getIngredients());

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

  const crearBurguer = function (setPrecio, ingredientes, setIngredientsAdd) {
    setPrecio(0.0);
    Swal.fire({
      customClass: {
        confirmButton: 'confirmBtnSwal',
      },
      title: 'Hamburguesa añadida al carrito',
      text: 'Pronto estarás disfrutando tu pedido',
      imageUrl:
        'https://res.cloudinary.com/henrysburgers/image/upload/v1659288361/logo-henrys-20x20_ftnamq.png',
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: 'Logo henrys',
    });

    const burgerCustom = {
      id: uuidv4(),
      name: 'Burger custom ' + randomNum(6),
      cantidad: 1,
      isVeggie: false,
      price: getTotal(burgerBase.price, precio),
      ingredients: ingredientsAdd,
    };
    setIngredientsAdd((ingredientes = []));
    addToCart(burgerCustom);
  };

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const addToCart = (burgerCustom) => {
    dispatch(addCartProductCustom(burgerCustom));
  };

  const randomNum = (length) => {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  };

  function getTotal(priceBase, priceIngredients) {
    return parseFloat(priceBase) + parseFloat(priceIngredients);
  }

  function ingredientsNotSelect() {
    if (!ingredientsAdd || !ingredientsAdd.length) {
      return ingredients;
    }

    const notSelect = ingredients.map((e) => e);

    for (let j = 0; j < notSelect.length; j++) {
      const all = notSelect[j];

      for (let i = 0; i < ingredientsAdd.length; i++) {
        const add = ingredientsAdd[i];

        if (all === add) {
          notSelect.splice(j, 1);
          j--;
        }
      }
    }
    return notSelect;
  }

  return (
    <div className="addBurger__motherContainer">
      <h1 className="addBurger__mainTitle">Arma tu Hamburguesa</h1>
      <Container>
        <hr />
        <div className="addBurger__mainContainer">
          <div>
            <div className="addBurger__selectContainer">
              <div className="burgerBase__select">
                <span>Hamburguesa base:</span>
                <select name="burgerBase" className="addBurger__select">

                <option disabled="" defaultValue>
                    Escoge tu hamburguesa
                  </option>
                    {burgerBase && burgerBase.length > 0 && burgerBase?.map(burger => 
                        
                        <option key={burger.id} className="addBurger__option">{burger.name}</option>
                        
                        )}

                </select>
              </div>
              <div className="ingredients__select">
                <span>Ingredientes:</span>
                <select
                  name="ingredientes"
                  className="addBurger__select"
                  onChange={(e) =>
                    añadirIngredientes(
                      e,
                      ingredientsAdd,
                      setIngredientsAdd,
                      ingredients,
                      precio,
                      setPrecio
                    )
                  }
                  value={'default'}
                >
                  <option key={1000} disabled="" defaultValue>
                    Escoge tus ingredientes
                  </option>
                  {ingredientsNotSelect().length > 0 &&
                    ingredientsNotSelect()?.map((i) => (
                      <option
                        key={i.id}
                        value={i.name}
                        className="addBurger__option"
                      >
                        {i.name + ' - $' + i.price}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div>
              <ul className="addBurger__ul">
                {ingredientsAdd.map((i) => (
                  <div className="addBurger__ul__liContainer" key={i.id}>
                    <button
                      className="addBurger__ul__closeButton"
                      onClick={() =>
                        modificarIngredientes(
                          i.id,
                          ingredientsAdd,
                          setIngredientsAdd,
                          precio,
                          setPrecio
                        )
                      }
                    >
                      X
                    </button>

                    <li className="addBurger__ul__li" key={i.id}>
                      {i.name + ' - $' + i.price + ' c/u'}
                    </li>

                    <button
                      name="menos"
                      className="addBurger__ul__plusAndMinus"
                      onClick={(e) =>
                        cambiarCantidad(
                          e,
                          i.id,
                          ingredientsAdd,
                          setIngredientsAdd,
                          precio,
                          setPrecio
                        )
                      }
                    >
                      -
                    </button>

                    <span className="addBurger__ul__cantidad">
                      {' '}
                      {i.cantidad}
                    </span>
                    <button
                      name="mas"
                      className="addBurger__ul__plusAndMinus"
                      onClick={(e) =>
                        cambiarCantidad(
                          e,
                          i.id,
                          ingredientsAdd,
                          setIngredientsAdd,
                          precio,
                          setPrecio
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                ))}
              </ul>
            </div>
            <p className="addBurger__descriptionText">
              * Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis mollitia libero modi omnis quam deleniti.
            </p>
          </div>
          <div>
            <img
              src={imgAddBurger}
              alt=""
              className="addBurger__image img-fluid"
            />
          </div>
        </div>

        <div className="addBurger__bottom">
          <p className="addBurger__bottom__p">
            <span className="addBurger__bottom__span">Hamburguesa base:</span> $
            {burgerBase.price}
          </p>
          <p className="addBurger__bottom__p">
            <span className="addBurger__bottom__span">Ingredientes:</span> $
            {precio}
          </p>
          <p className="addBurger__bottom__p">
            <span className="addBurger__bottom__span">Costo total:</span> $
            {getTotal(burgerBase.price, precio)}
          </p>
          <Button
            onClick={() =>
              crearBurguer(setPrecio, ingredientsAdd, setIngredientsAdd)
            }
          >
            Crear Hamburguesa
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default AddBurger;
