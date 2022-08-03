const { Coupon } = require("../models");

async function createCoupon(data) {
  const coupon = await Coupon.create(data);

  return coupon;
}

async function getAll() {
  const coupons = await Coupon.findAll();

  return coupons;
}

async function getById(code) {
  const coupon = await Coupon.findByPk(code);

  return coupon;
}

module.exports = {
  createCoupon,
  getAll,
  getById,
};
