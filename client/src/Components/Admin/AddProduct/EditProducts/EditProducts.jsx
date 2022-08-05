import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../../Redux/actions/actions';

function EditProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  console.log(product);

  return <div>EditProducts</div>;
}

export default EditProducts;
