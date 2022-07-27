const userRepository = require("../repositories/user.repositories");

async function activateAccount(req, res, next) {
  try {
    const user = await userRepository.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await userRepository.activateAccount(user.id);
    return res.status(200).json("Account has been confirmed");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  activateAccount,
};
