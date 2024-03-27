const mongoose = require("mongoose");
// const { Schema } = mongoose;

const ItemSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  options: {
    type: Array,
  },
});
const food_Item = new mongoose.model("food_Item", ItemSchema);
module.exports = food_Item;
