/* eslint-disable camelcase */
import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getPurchase } from '../../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function UserPurchaseDetail() {
  const dispatch = useDispatch();
  const { token } = JSON.parse(window.localStorage.getItem('user'));
  const { id } = useParams();
  const { purchaseInfo } = useSelector((state) => state);
  const {
    transaction_amount,
    status,
    additional_info,
    transaction_details,
    installments,
  } = purchaseInfo || '';

  useEffect(() => {
    if (!purchaseInfo) {
      dispatch(getPurchase(id, token));
    }
  }, [purchaseInfo, dispatch, id, token]);

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

          {/* Verifica si hay cuotas */}
          {installments && installments > 0 && (
            <div>
              <div>Precio base: {transaction_amount || ''}</div>
              {installments} cuotas de ${transaction_details.installment_amount}
            </div>
          )}

          <div>Precio final: {transaction_details.total_paid_amount || ''}</div>
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

export default UserPurchaseDetail;
