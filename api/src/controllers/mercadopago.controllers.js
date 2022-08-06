const userRepository = require("../repositories/user.repositories");
const mercadopagoRepository = require("../repositories/mercadopago.repositories");
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

async function check(req, res, next) {
  try {
    const user = await userRepository.getById(req.body.user.id);
    if (!user)
      return res.status(404).json({ error: "There is no user with this id" });

    const preference = {
      items: req.body.items,
      back_urls: {
        success: process.env.HOST + "/pay/", // modificar por rutas del front
        failure: process.env.HOST + "/pay/",
        pending: process.env.HOST + "/pay/",
      },
      auto_return: "approved",
      statement_descriptor: "Henry Burgers",
      payer: {
        name: user.firstName,
        surname: user.lastName,
        email: user.email,
      },
    };

    const mp = await mercadopago.preferences.create(preference);
    return res.status(200).json({
      id: mp.body.id,
      coupons: req.body.coupons,
      items: req.body.items,
    });
  } catch (error) {
    next(error);
  }
}

async function getPaymentById(req, res, next) {
  try {
    const { id } = req.params;
    const payment = await mercadopagoRepository.getPaymentById(id);
    res.status(200).json(payment);
  } catch (error) {
    next(error);
  }
}

module.exports = { check, getPaymentById };
