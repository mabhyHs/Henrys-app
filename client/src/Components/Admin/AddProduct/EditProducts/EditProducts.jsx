import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  clearState,
  getBurgerBase,
  getProductById,
} from '../../../../Redux/actions/actions';
import CreateOrEditBeverage from '../AddProductViews/CreateOrEditBeverage/CreateOrEditBeverage';
import CreateOrEditBurger from '../AddProductViews/CreateOrEditBurger/CreateOrEditBurger';
import CreateOrEditBurgerBase from '../AddProductViews/CreateOrEditBurgerBase/CreateOrEditBurgerBase';
import CreateOrEditCombo from '../AddProductViews/CreateOrEditCombo/CreateOrEditCombo';
import CreateOrEditFries from '../AddProductViews/CreateOrEditFries/CreateOrEditFries';

function EditProducts() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getBurgerBase());
    return () => {
      dispatch(clearState());
    };
  }, [dispatch, id]);

  return (
    <div>
      {product.type === 'burger' && <CreateOrEditBurger data={product} />}
      {product.type === 'fries' && <CreateOrEditFries data={product} />}
      {product.type === 'beverage' && <CreateOrEditBeverage data={product} />}
      {product.type === 'combo' && <CreateOrEditCombo data={product} />}
      {!product.type && <CreateOrEditBurgerBase data={product} />}
    </div>
  );
}

export default EditProducts;
