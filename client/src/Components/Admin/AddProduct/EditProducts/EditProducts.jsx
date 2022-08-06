import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getBurgerBase,
  getProductById,
} from '../../../../Redux/actions/actions';
import CreateOrEditBeverage from '../AddProductViews/CreateOrEditBeverage/CreateOrEditBeverage';
import CreateOrEditBurger from '../AddProductViews/CreateOrEditBurger/CreateOrEditBurger';
import CreateOrEditBurgerBase from '../AddProductViews/CreateOrEditBurgerBase/CreateOrEditBurgerBase';
import CreateOrEditCombo from '../AddProductViews/CreateOrEditCombo/CreateOrEditCombo';
import CreateOrEditFries from '../AddProductViews/CreateOrEditFries/CreateOrEditFries';

function EditProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);
  const burgerBase = useSelector((state) => state.burgerBase);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getBurgerBase());
  }, [dispatch, id]);

  console.log(product);

  return (
    <div>
      {product.type === 'burger' && <CreateOrEditBurger data={product} />}
      {product.type === 'fries' && <CreateOrEditFries data={product} />}
      {product.type === 'beverage' && <CreateOrEditBeverage data={product} />}
      {product.type === 'combo' && <CreateOrEditCombo data={product} />}
      {<CreateOrEditBurgerBase data={burgerBase} />}
    </div>
  );
}

export default EditProducts;
