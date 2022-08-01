const burgerBaseRepository = require("../repositories/burgerBase.repositories");

async function get(req, res, next) {
    try {
      const all = await burgerBaseRepository.get();
      return res.status(200).json(all);
    } catch (error) {
      next(error);
    }
}

async function getFirst(req, res, next) {
    try {
      const one = await burgerBaseRepository.getFirst();
      return res.status(200).json(one);
    } catch (error) {
      next(error);
    }
}

async function update(req, res, next) {
  try {
    const data = req.body;
    const updatedBurge = await burgerBaseRepository.update(data);
    return res.status(200).json({ message: "BurgerBase updated" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  get,
  getFirst,
  update,
};
