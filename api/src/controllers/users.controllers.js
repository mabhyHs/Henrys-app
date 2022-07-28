const userRepositories = require("../repositories/user.repositories");
const bcrypt = require("bcrypt");
const { transporter } = require("../config/emailTransporter");

/* las cuentas que crea el admincreate */
async function create(req, res, next) {
    try {
        /* hay que validar que tenga el rol de admin */
      const data = req.body;
      const findUser = await userRepositories.getByEmail(data.email);
  
      if (findUser)
        return res.status(400).json({ error: "A user with this email already exists" });
  
      data.password = await bcrypt.hash(data.password, 10);
      const newUser = await userRepositories.create(data);
  
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
}

/* registro */
async function register(req, res, next) {
    try {
      const data = req.body;
      const findUser = await userRepositories.getByEmail(data.email);
  
      if (findUser)
        return res.status(400).json({ error: "A user with this email already exists" });
  
      data.password = await bcrypt.hash(data.password, 10);
      const newUser = await userRepositories.create(data);
  
      console.log(process.env.ACTIVATE_ACCOUNT);
  
      await transporter.sendMail({
        from: '"Confirm account" <henrysBurger2022@gmail.com',
        to: data.email,
        subject: "Confirm account",
        html: `
              <h1>Please click the link below to activate your account on Henry's Burgers</h1>
              <a href="${process.env.ACTIVATE_ACCOUNT}/activateAccount/${newUser.id}">AQUI</a>
        `,
      });
  
      return res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
}

module.exports = { 
    create,
    register
};
