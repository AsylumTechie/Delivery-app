const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
  try {
    const newUser = new User({
      name: "Rohit",
      email: "rohit@gmail.com",
      password: "1234",
      location: "delhi",
    });
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router();
