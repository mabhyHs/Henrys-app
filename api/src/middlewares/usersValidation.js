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

const userValid = body("user")
  .custom(async (user, { req }) => {
    const currentUser = await userRepositories.getById(user.id);
    if (currentUser.role === "admin" && user.id === req.params.id) {
      throw new Error("El admin no puede desactivar su propia cuenta");
    }
  })
  .withMessage("El admin no puede desactivar su propia cuenta");

const changeRoleValid = body("user")
  .custom(async (user, { req }) => {
    console.log(user.id);
    const currentUser = await userRepositories.getById(user.id);
    console.log(req.body.id);

    if (currentUser.role === "admin" && user.id === req.body.id) {
      throw new Error("El admin no puede cambiar el rol de su propia cuenta");
    }
  })
  .withMessage("El admin no puede cambiar el rol de su propia cuenta");

const roleValidator = [roleValid];
const deleteValidator = [userValid];
const putValidator = [changeRoleValid];

module.exports = {
  roleValidator,
  deleteValidator,
  putValidator,
};
