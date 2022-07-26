const userRepositories = require("../repositories/user.repositories");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const user = await userRepositories.getByEmail(req.body.email);
    if (!user) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "contraseña no válida" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        id: user._id,
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
