import React, { useState, useEffect } from 'react';
import { getProduct } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import CardCupponHome from '../CardCuponHome/CardCuponHome';

function CouponUpdate() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const [btnSubmit, setBtnSubmit] = useState(false);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(getProduct());
    }
  }, [dispatch, products]);

  const [coupon, setCoupon] = useState({
    code: 'Codigo del cupon',
    title: 'Titulo del cupon',
    expirationDate: 'Fecha de vencimiento',
    imgUri: null,
    discountPorcentage: 'Descuento',
    products: [],
  });

  const [couponError, setCouponError] = useState({
    code: true,
    title: true,
    expirationDate: true,
    imgUri: false, // cambiar a true cuando se implemente la imagen
    discountPorcentage: true,
    products: true,
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

    if (isNaN(value) || value < 0 || value > 100 || value.length > 5) {
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

  useEffect(() => {
    const { code, title, expirationDate, imgUri, discountPorcentage } =
      couponError;
    if (code || title || expirationDate || imgUri || discountPorcentage) {
      return setBtnSubmit(false);
    }
    return setBtnSubmit(true);
  }, [couponError]);

  function handleProducts(e) {
    const { value } = e.target;
    const product = products?.find((p) => p.name === value);
    e.target.value = '';

    if (!coupon.products?.find((d) => d.name === value)) {
      if (typeof product?.name === 'string') {
        setCouponError({ ...couponError, products: false });
        return setCoupon({
          ...coupon,
          products: coupon.products.concat(product),
        });
      }
    } else {
      return null;
    }
  }

  const handleRemoveProduct = (e, productId) => {
    e.preventDefault();

    setCoupon({
      ...coupon,
      products: coupon.products.filter((d) => d.id !== productId),
    });

    if (coupon.products.length === 1) {
      return setCouponError({ ...couponError, products: true });
    }

    return setCouponError({ ...couponError, products: false });
  };

  function handleCreateNewCoupon(e) {
    e.preventDefault();
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
              Ingrese un numero entre 0 y 100.
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
          <label htmlFor="productOfCoupon">
            <select
              name="productOfCoupon"
              id="productOfCoupon"
              onClick={handleProducts}
            >
              <option value="Elige un producto" />
              {products?.map((p) => (
                <option value={p.name} key={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <div>
              {coupon.products?.map((p) => (
                <div key={p.id}>
                  {p.name}
                  <button
                    type="button"
                    onClick={(e) => handleRemoveProduct(e, p.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </label>
          <button disabled={!btnSubmit} onClick={handleCreateNewCoupon}>
            CREAR CUPON
          </button>
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
