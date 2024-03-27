const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    require: true,
  },
});
const Food = new mongoose.model("Food", FoodSchema);
module.exports = Food;
