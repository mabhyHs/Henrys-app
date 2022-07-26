const userRepositories = require("../repositories/user.repositories");
const bcrypt = require("bcrypt");

async function create(req, res, next) {
  try {
    const data = req.body;
    data.password = await bcrypt.hash(data.password, 10);
    const newUser = await userRepositories.create(data);
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

module.exports = { create };
