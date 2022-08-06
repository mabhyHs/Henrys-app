/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchase, postPurchase } from '../../../Redux/actions/actions';

function UserPurchase() {
  const dispatch = useDispatch();
  const params = useLocation().search;
  const purchaseId = params.slice(params.indexOf('=') + 1, params.indexOf('&'));
  const { purchaseInfo } = useSelector((state) => state);
  const { token, id } = JSON.parse(window.localStorage.getItem('user'));
  const { transaction_amount, status, additional_info } = purchaseInfo || '';

  useEffect(() => {
    if (purchaseId) {
      dispatch(getPurchase(purchaseId, token));
      dispatch(postPurchase(purchaseId, token, id));
    }
  }, [dispatch, purchaseId, token, id]);

  return (
    <div>
      {purchaseInfo && (
        <div>
          <h1>
            {status === 'approved'
              ? 'Pago aprobado'
              : status === 'in_process'
              ? 'El pago esta en proceso'
              : 'El pago esta pendiente'}
          </h1>
          <div>Precio base: {transaction_amount || ''}</div>
          <div>
            <h2>Detalle:</h2>
            {additional_info.items.map((i) => (
              <div key={i.id}>
                <div>Producto: {i.title}</div>
                <div>Precio unitario: {i.unit_price}</div>
                <div>Cantidad: {i.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPurchase;
