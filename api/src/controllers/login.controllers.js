const userRepositories = require("../repositories/user.repositories");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const user = await userRepositories.getByEmail(req.body.email);
    if (!user) {
      return res.status(404).json({ error: "Invalid credential" });
    }

    if (!user.isConfirmed)
      return res.status(400).json({ error: "Account was not activated" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid credential" });
    }

    const token = jwt.sign(
      {
        name: user.firstName,
        id: user.id,
      },
      process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).json({
      error: null,
      name: user.firstName,
      data: { token },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
