// Assuming food_Item and foodCategory are defined somewhere in your codebase

const express = require("express");
const router = express.Router();
const Category = require("../models/foodCategory");
const Food = require("../models/Food");
// const itemName = require("../models/Item");

// router.get("/foodData", async (req, res) => {
//   try {
//     const categoryName = await Category.find({});
//     res.json(categoryName);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server error");
//   }
// });

router.post("/", async (req, res) => {
  try {
    console.log(req.body.Category);
    const foodItem = new Food({
      categoryName: req.body.Category,
    });
    console.log(foodItem);
    await foodItem.save();
    res.send("food item created", foodItem);
  } catch {
    res.status(404).send("error");
  }
});

module.exports = router;
