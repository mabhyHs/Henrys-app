const beverageRepository = require("../repositories/beverage.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newBeverage = await beverageRepository.create(data);
    return res.status(201).json(newBeverage);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const beverage = await beverageRepository.destroy(id);
    beverage
      ? res.status(200).json({ message: "Product deleted successfully" })
      : res
          .status(404)
          .json({ error: "There is no product to be deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;

    const beverage = await beverageRepository.restore(id);
    beverage
      ? res.status(200).json({ message: "Product restored successfully" })
      : res
          .status(404)
          .json({ error: "There is no product deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const id = req.body.id;
    const data = req.body;
    const beverage = await beverageRepository.update(id, data);
    res.status(201).json({ message: "Beverage updated" });
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
