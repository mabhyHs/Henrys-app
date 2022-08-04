import React, { useState } from 'react';
import CardCupponHome from '../CardCuponHome/CardCuponHome';

function CouponUpdate() {
  const [coupon, setCoupon] = useState({
    code: 'Codigo del cupon',
    title: 'Titulo del cupon',
    expirationDate: 'Fecha de vencimiento',
    imgUri: null,
    discountPorcentage: 'Descuento',
  });

  const [couponError, setCouponError] = useState({
    code: true,
    title: true,
    expirationDate: true,
    imgUri: true,
    discountPorcentage: true,
  });

  function validateCode(e) {
    const value = e.target.value.trim();

    if (value === '') {
      setCouponError({ ...couponError, code: true });
      return setCoupon({ ...coupon, code: 'Codigo del cupon' });
    }

    if (value.length > 9) {
      return setCouponError({ ...couponError, code: true });
    }

    setCouponError({ ...couponError, code: false });
    return setCoupon({ ...coupon, code: value.toUpperCase() });
  }

  function validateTitle(e) {
    const value = e.target.value.trim();

    if (value === '') {
      setCouponError({ ...couponError, title: true });
      return setCoupon({ ...coupon, title: 'Titulo del cupon' });
    }

    if (value.length > 25) {
      return setCouponError({ ...couponError, title: true });
    }

    setCouponError({ ...couponError, title: false });
    return setCoupon({ ...coupon, title: value });
  }

  function validateDiscount(e) {
    const value = e.target.value.trim();

    if (value === '') {
      setCouponError({ ...couponError, discountPorcentage: true });
      return setCoupon({
        ...coupon,
        discountPorcentage: 'Codigo de descuento',
      });
    }

    if (isNaN(value) || value < 0 || value > 100) {
      return setCouponError({ ...couponError, discountPorcentage: true });
    }

    setCouponError({ ...couponError, discountPorcentage: false });
    return setCoupon({ ...coupon, discountPorcentage: value });
  }

  function validateExpirationDate(e) {
    const value = e.target.value.trim();

    if (value === '' || value.length !== 10) {
      setCouponError({ ...couponError, expirationDate: true });
      return setCoupon({
        ...coupon,
        expirationDate: 'Fecha de expiracion',
      });
    }

    const [year, month, day] = value.split('-', 3);
    const expDate = new Date(value);

    if (!year || !month || !day || !expDate) {
      setCouponError({ ...couponError, expirationDate: true });
      return setCoupon({
        ...coupon,
        expirationDate: 'Fecha de expiracion',
      });
    }

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const todayDate = new Date(`${yyyy}-${mm}-${dd}`);

    if (todayDate.getTime() > expDate.getTime()) {
      setCouponError({ ...couponError, expirationDate: true });
      return setCoupon({
        ...coupon,
        expirationDate: 'Fecha de expiracion',
      });
    }

    setCouponError({ ...couponError, expirationDate: false });
    return setCoupon({ ...coupon, expirationDate: value });
  }

  function handleCreateNewCoupon(e) {
    e.preventDefault();
    console.log('entro en el handle');
  }
  return (
    <div>
      <div>
        <form className="couponForm">
          <label htmlFor="code">
            <div className="codeLabel">
              Codigo: <span>*</span>
            </div>
            <input
              type="text"
              autoComplete="off"
              id="code"
              onChange={validateCode}
            />
            <small className={couponError.code ? 'statusWrong' : 'statusOk'}>
              No puede estar vacio
            </small>
          </label>

          <label htmlFor="title">
            <div className="titleLabel">
              Titulo: <span>*</span>
            </div>
            <input
              type="text"
              autoComplete="off"
              id="title"
              onChange={validateTitle}
            />
            <small className={couponError.title ? 'statusWrong' : 'statusOk'}>
              No puede estar vacio
            </small>
          </label>

          <label htmlFor="discount">
            <div className="discountLabel">
              Descuento: <span>*</span>
            </div>
            <input
              type="text"
              autoComplete="off"
              id="discount"
              onChange={validateDiscount}
            />
            <small
              className={
                couponError.discountPorcentage ? 'statusWrong' : 'statusOk'
              }
            >
              No puede estar vacio.
            </small>
          </label>

          <label htmlFor="expirationDate">
            <div className="expirationDateLabel">
              Fecha de vencimiento &#40; inclusive: &#41; <span>*</span>
            </div>
            <input
              type="text"
              autoComplete="off"
              id="expirationDate"
              onChange={validateExpirationDate}
              placeholder="aaaa-mm-dd"
            />
            <small
              className={
                couponError.expirationDatePorcentage
                  ? 'statusWrong'
                  : 'statusOk'
              }
            >
              Selecciona una fecha desde hoy en adelante.
            </small>
          </label>
          <button onClick={handleCreateNewCoupon}>CREAR CUPON</button>
        </form>
      </div>
      <div>
        <CardCupponHome
          key={coupon.code}
          code={coupon.code}
          title={coupon.title}
          expirationDate={coupon.expirationDate}
          imgUri={coupon.imgUri}
          discountPorcentage={coupon.discountPorcentage}
        />
      </div>
    </div>
  );
}

export default CouponUpdate;
