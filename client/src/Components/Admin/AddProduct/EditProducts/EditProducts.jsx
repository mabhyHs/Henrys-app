import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../../Redux/actions/actions';
import CreateOrEditBeverage from '../AddProductViews/CreateOrEditBeverage/CreateOrEditBeverage';
import CreateOrEditBurger from '../AddProductViews/CreateOrEditBurger/CreateOrEditBurger';
import CreateOrEditCombo from '../AddProductViews/CreateOrEditCombo/CreateOrEditCombo';
import CreateOrEditFries from '../AddProductViews/CreateOrEditFries/CreateOrEditFries';

function EditProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  console.log(product);

  return (
    <div>
      {product.type === 'burger' && <CreateOrEditBurger data={product} />}
      {product.type === 'fries' && <CreateOrEditFries data={product} />}
      {product.type === 'beverage' && <CreateOrEditBeverage data={product} />}
      {product.type === 'combo' && <CreateOrEditCombo data={product} />}
    </div>
  );
}

export default EditProducts;
