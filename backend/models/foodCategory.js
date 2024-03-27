const mongoose = require("mongoose");
// const { Schema } = mongoose;

const CategorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    require: true,
  },
});
const foodCategory = new mongoose.model("foodCategory", CategorySchema);
module.exports = foodCategory;
