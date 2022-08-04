import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../../Redux/actions/actions';

function EditCombos() {
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    getProduct('burgers');
  });

  return (
    <div>
      <h1>Editar Combos</h1>
      <button>CREAR</button>
      <form action="submit">
        <h3>Nombre</h3>
        <input type="text" name="nombre" />
        <h3>Precio</h3>
        <input type="text" name="nombre" />
        <h3>Imagen</h3>
        <input type="url" name="nombre" />
        <button>UPLOAD</button>
        <h3>Burger</h3>
        <select>
          {allProducts &&
            allProducts.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <h3>Bebidas</h3>
        <select>
          <option></option>
        </select>
        <h3>Fries</h3>
        <select>
          <option></option>
        </select>
        <h3>Vegetariano</h3>
        <select>
          <option>Si</option>
          <option>No</option>
        </select>
        <button>Confirmar</button>
      </form>
    </div>
  );
}

export default EditCombos;
