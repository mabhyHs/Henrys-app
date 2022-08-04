import React, { useEffect } from 'react';
import CardCupponHome from '../CardCuponHome/CardCuponHome';
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../../Redux/actions/actions';
import './CuponContainerHome.css';

function CuponContainerHome() {
  const { coupons } = useSelector((state) => state);
  const dispatch = useDispatch();
  const token = JSON.parse(window.localStorage.getItem('user'))?.token;

  useEffect(() => {
    if (!coupons && token) {
      dispatch(getCoupons(token));
    }
  }, [coupons, dispatch, token]);

  return (
    <div className="couponsHome">
      {coupons?.map((c) => (
        <CardCupponHome
          key={c.code}
          code={c.code}
          title={c.title}
          expirationDate={c.expirationDate}
          imgUri={c.imgUri}
          discountPorcentage={c.discountPorcentage}
        />
      ))}
    </div>
  );
}

export default CuponContainerHome;
