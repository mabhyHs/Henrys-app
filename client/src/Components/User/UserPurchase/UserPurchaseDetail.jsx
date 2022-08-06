import React from 'react';
import { useParams } from 'react-router-dom';

function UserPurchaseDetail() {
  const { id } = useParams();
  console.log(id);
  return <div>UserPurchaseDetail</div>;
}

export default UserPurchaseDetail;
