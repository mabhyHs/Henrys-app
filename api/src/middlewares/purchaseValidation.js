const productRepository = require("../repositories/product.repositories");
const ingredientRepository = require("../repositories/ingredient.repositories");
const burgerBaseRepository = require("../repositories/burgerBase.repositories");

async function validateDbProduct(id, quantity) {
  const product = await productRepository.getById(id);

  if (!product) {
    return res.status(404).json({
      error: `There is no product with this id: ${id}`,
    });
  }

  return {
    id,
    title: product.name,
    currency_id: process.env.CURRENCY_ID,
    picture_url: product.imgUri,
    quantity,
    unit_price: product.price,
  };
}

async function validateCreatedBurger(
  id,
  quantity,
  ingredients,
  title,
  picture_url
) {
  if (ingredients.length > 6)
    return res.status(400).json({
      error: "The customized hamburger cannot have more than six ingredients.",
    });

  const burgerBase = await burgerBaseRepository.getFirst();
  if (!burgerBase || burgerBase < 1)
    return res.status(400).json({ error: "Error with burgerBase" });

  let totalPrice = burgerBase.price;

  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = await ingredientRepository.getById(ingredients[i].id);
    if (!ingredient) {
      return res.status(404).json({
        error: `There is no ingredient with this id: ${id}`,
      });
    }

    totalPrice += ingredient.price * ingredients[i].cantidad;
  }

  return {
    id,
    title,
    currency_id: process.env.CURRENCY_ID,
    picture_url,
    quantity,
    unit_price: totalPrice,
  };
}

async function validatePurchase(req, res, next) {
  const items = [];
  const { cart } = req.body;

  if (cart.length < 1) {
    return res.status(400).json({ error: "The cart is empty" });
  }

  for (let i = 0; i < cart.length; i++) {
    const { id, ingredients, createdAt, cantidad, name, imgUri } = cart[i];

    if (createdAt) {
      items.push(await validateDbProduct(id, cantidad));
    } else {
      items.push(
        await validateCreatedBurger(id, cantidad, ingredients, name, imgUri)
      );
    }
  }
  req.body.items = items;
  next();
}

module.exports = { validatePurchase };
