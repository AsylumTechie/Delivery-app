const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Rohit:Rohitdev1000@billing.vjup8ip.mongodb.net/";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
    // const fetched_data = await mongoose.connection.db.collection("food_Item");
    // fetched_data.find({}).toArray(async (err, data) => {
    //   const foodCategory = await mongoose.connection.db.collection(
    //     "foodCategory"
    //   );
    //   foodCategory.find({}).toArray((err, catData) => {
    //     if (err) console.log("error");
    //     else {
    //       global.food_Item = data;
    //       global.foodCategory = catData;
    //     }
    //   });
    // });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDB;
