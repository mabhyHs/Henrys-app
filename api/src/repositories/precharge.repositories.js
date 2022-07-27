const { Ingredient, Burger, Fries, Beverage, Combo } = require("../models");

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

    console.log("models precharged successfully!");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  precharge,
};
