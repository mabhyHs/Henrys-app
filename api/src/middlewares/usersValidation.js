const { body } = require("express-validator");
const userRepositories = require("../repositories/user.repositories");
const { usersRoles, authRoute } = require("../utils/routesRoles");

const roleValid = body("user")
  .custom(async (user) => {
    const myUser = await userRepositories.getById(user.id);
    const hasRole = authRoute(usersRoles, myUser.role);

    if (!hasRole) {
      throw new Error("This user is unauthorized");
    }
  })
  .withMessage("This user is unauthorized");

const roleValidator = [roleValid];

module.exports = {
  roleValidator,
};
