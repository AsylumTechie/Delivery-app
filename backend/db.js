const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Rohit:Rohitdev1000@billing.vjup8ip.mongodb.net/";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
    const fetched_data = await mongoose.connection.db.collection("items");
    fetched_data.find({}).toArray((err, data) => {
      if (err) console.log("error");
      else console.log(data);
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = mongoDB;
