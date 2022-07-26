const { User } = require("../models");

async function create(data) {
  const user = await User.create(data);
  return user;
}

async function getByEmail(email) {
  const user = await User.findOne({ where: { email: email } });
  return user;
}

module.exports = {
  create,
  getByEmail,
};
