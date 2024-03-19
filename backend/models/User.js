const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    Default: Date.now,
  },
});

module.exports = UserSchema;
