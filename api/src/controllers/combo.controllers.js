const comboRepository = require("../repositories/combo.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newCombo = await comboRepository.create(data);
    return res.status(201).json(newCombo);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deletedCombo = await comboRepository.destroy(id);

    if (deletedCombo) return res.status(200).json("Combo deleted successfully");

    return res
      .status(404)
      .json({ error: "There is no Combo to be deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;
    const restoredCombo = await comboRepository.restore(id);

    if (restoredCombo)
      return res.status(200).json({ message: "Combo restored successfully" });

    return res
      .status(404)
      .json({ error: "There is no Combo deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const data = req.body;
    const updatedCombo = await comboRepository.update(data);
    return res.status(200).json({ message: "Combo updated" });
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
