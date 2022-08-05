import React, { useState } from 'react';
import './CouponAdmin.css';
import CuponContainerHome from '../CuponContainerHome/CuponContainerHome';
import CouponUpdate from '../CouponUpdate/CouponUpdate';

function CouponAdmin() {
  return (
    <div>
      <CouponUpdate />
      <CuponContainerHome />
    </div>
  );
}

export default CouponAdmin;
