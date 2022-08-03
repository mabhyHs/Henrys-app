const {
  Ingredient,
  Burger,
  Fries,
  Beverage,
  Combo,
  User,
  BurgerBase,
  Coupon,
} = require("../models");
const bcrypt = require("bcrypt");

const { addDataDB } = require("../utils/addDataDB");

async function precharge() {
  try {
    const data = addDataDB();

    if (!data) return;

    if (data.ingredients.length) {
      await Ingredient.bulkCreate(data.ingredients, {
        ignoreDuplicates: true,
      });
    }

    if (data.burgers.length) {
      for (const burger of data.burgers) {
        const find = await Burger.findByPk(burger.id);
        if (!find) {
          const newBurger = await Burger.create(burger);
          await newBurger.addIngredient(burger.ingredients);
        }
      }
    }

    if (data.fries.length) {
      await Fries.bulkCreate(data.fries, {
        ignoreDuplicates: true,
      });
    }

    if (data.beverages.length) {
      await Beverage.bulkCreate(data.beverages, {
        ignoreDuplicates: true,
      });
    }

    if (data.combos.length) {
      for (const combo of data.combos) {
        const find = await Combo.findByPk(combo.id);
        if (!find) {
          const newCombo = await Combo.create(combo);
          await newCombo.addBeverage(combo.beverages);
          await newCombo.addFries(combo.fries);
          await newCombo.addBurger(combo.burgers);
        }
      }
    }

    await User.bulkCreate(
      [
        {
          firstName: "Henry",
          lastName: "Burger",
          email: "henrysburgers@admin.com",
          password: await bcrypt.hash("admin@", 10),
          role: "admin",
          isConfirmed: true,
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    await BurgerBase.bulkCreate(
      [
        {
          name: "Base",
          price: 250,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368855/Hamburguesas/Hamburguesa-con-Queso_nhyhcd.png",
          description: "Incluye pan y 1 medallón de carne",
        },
        {
          name: "Base vegetariana",
          price: 370,
          isVeggie: true,
          imgUri:
            "https://res.cloudinary.com/henrysburgers/image/upload/v1659368859/Hamburguesas/King-de-vegetal_ljh5ot.png",
          description: "Incluye pan con sésamo y 1 medallón vegetal",
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    await Coupon.bulkCreate(
      [
        {
          code: "XLXR567",
          title: "Fries Day",
          expirationDate: "2022-08-04",
          imgUri:
            "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
          discountPorcentage: 15,
          productsId: [
            "f3a181c0-1f95-4788-bbb4-fd38d4c6634a",
            "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
          ],
        },
        {
          code: "RTTAS87",
          title: "CheckPoint Day",
          expirationDate: "2022-08-06",
          imgUri:
            "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar",
          discountPorcentage: 15,
          productsId: [
            "f3a181c0-1f95-4788-bbb4-fd38d4c6634a",
            "9718ab58-b7e6-4fbb-917a-f7f1d7172111",
          ],
        },
      ],
      {
        ignoreDuplicates: true,
      }
    );

    console.log("models precharged successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  precharge,
};
