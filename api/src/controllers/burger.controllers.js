const burgerRepository = require("../repositories/burger.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newBurger = await burgerRepository.create(data);
    return res.status(201).json(newBurger);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deletedBurger = await burgerRepository.destroy(id);

    if (deletedBurger)
      return res.status(200).json({ message: "Product deleted successfully" });

    return res
      .status(404)
      .json({ error: "There is no product to be deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;
    const restoredBurger = await burgerRepository.restore(id);

    if (restoredBurger)
      return res.status(200).json({ message: "Product restored successfully" });

    return res
      .status(404)
      .json({ error: "There is no product deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const data = req.body;
    const updatedBurger = await burgerRepository.update(data);
    return res.status(200).json({ message: "Burger updated" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  destroy,
  restore,
  update,
};
