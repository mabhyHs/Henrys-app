const userRepository = require("../repositories/user.repositories");
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
        success: "www.success.com", // modificar por rutas del front
        failure: "www.failure.com",
        pending: "www.pending.com",
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
    res.status(200).json({ id: mp.body.id, items: req.body.items });
  } catch (error) {
    next(error);
  }
}

module.exports = { check };
