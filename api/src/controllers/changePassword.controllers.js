const userRepository = require("../repositories/user.repositories");
const bcrypt = require("bcrypt");

async function changePassword(req, res, next) {
  try {
    const { email, passwordOld, passwordNew, user } = req.body;

    if (!email || !passwordOld || !passwordNew)
      return res.status(400).json({ error: "Missing parameter" });

    if (passwordOld === passwordNew)
      return res
        .status(400)
        .json({ error: "The old and new password cant be equals" });

    if (email !== user.email)
      return res.status(400).json({ error: "Invalid credential" });

    const myUser = await userRepository.getByEmail(email);

    if (user.id !== myUser.id || user.email !== myUser.email)
      return res.status(400).json({ error: "Invalid credential" });

    const validPassword = await bcrypt.compare(passwordOld, myUser.password);

    if (!validPassword)
      return res.status(400).json({ error: "Invalid credential" });

    const password = await bcrypt.hash(passwordNew, 10);
    userRepository.updatePassword(email, password);

    return res.status(201).json({ message: "Password successfully updated" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  changePassword,
};
