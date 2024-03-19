const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// router.post(
//   "/createuser",
//   [
//     body("email").isEmail(),
//     body("name").isLength({ min: 5 }),
//     body("password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const newUser = new User(req.body);
//       await newUser.save();
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

router.post("/createuser", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;
