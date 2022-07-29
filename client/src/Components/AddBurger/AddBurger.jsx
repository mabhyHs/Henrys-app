import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients, getBurgerBase } from '../../Redux/actions/actions';
import Button from 'react-bootstrap/Button';
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
        icon: 'error',
        title: 'Oops...',
        text: 'Sólo puedes seleccionar hasta 6 Ingredientes',
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
const crearBurguer = function (setPrecio, ingredientes, setIngredientsAdd) {
  setIngredientsAdd((ingredientes = []));
  setPrecio(0.0);
  Swal.fire({
    title: 'Hamburguesa creada exitosamente',
    text: 'Pronto estarás disfrutando tu pedido',
    imageUrl: 'https://i.postimg.cc/Y0T86N5w/logo-henrys300px.png',
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: 'Logo henrys',
  });
};

function AddBurger() {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);
  const precioBase = useSelector((state) => state.burgerBase.price);
  const [ingredientsAdd, setIngredientsAdd] = useState([]);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getBurgerBase());
  }, [dispatch]);

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
      <div className="addBurger__mainContainer">
        <div>
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
                <option key={i.id} value={i.name}>
                  {i.name + " - $" + i.price}
                </option>
              ))}
          </select>

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
                    {i.name + " - $" + i.price + " c/u"}
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

                  <span className="addBurger__ul__cantidad"> {i.cantidad}</span>
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
        </div>
        <div className="addBurger__image"></div>
      </div>

      <div className="addBurger__bottom">
        <p className="addBurger__bottom__p">
          <span className="addBurger__bottom__span">Hamburguesa base:</span> $
          {precioBase}
        </p>
        <p className="addBurger__bottom__p">
          <span className="addBurger__bottom__span">Ingredientes:</span> $
          {precio}
        </p>
        <p className="addBurger__bottom__p">
          <span className="addBurger__bottom__span">Costo total:</span> $
          {getTotal(precioBase, precio)}
        </p>
        <Button
          onClick={() =>
            crearBurguer(setPrecio, ingredientsAdd, setIngredientsAdd)
          }
        >
          Crear Hamburguesa
        </Button>
      </div>
    </div>
  );
}

export default AddBurger;
