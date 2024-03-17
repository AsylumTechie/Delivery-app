const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://Rohit:Rohitdev1000@billing.vjup8ip.mongodb.net/";

const mongoDB = () => {
  mongoose.connect(mongoURI, {
    dbName: "gofood",
  });
  console.log("Database connected successfully");
};

module.exports = mongoDB;
