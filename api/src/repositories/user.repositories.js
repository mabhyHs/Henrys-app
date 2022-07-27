const { User } = require("../models");

async function create(data) {
  const user = await User.create(data);
  return user;
}

async function getByEmail(email) {
  const user = await User.findOne({ where: { email: email } });
  return user;
}

async function getById(id) {
  const user = await User.findByPk(id);
  return user;
}

async function activateAccount(id) {
  return await User.update(
    {
      isConfirmed: true,
    },
    { where: { id: id } }
  );
}

module.exports = {
  create,
  getByEmail,
  getById,
  activateAccount,
};