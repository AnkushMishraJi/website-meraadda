const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const userSchema = require("../models/user");
// const User = mongoose.model("User", userSchema);
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const requireLogin = require("../middleware/requireLogin");

// const { JWT_SECRET } = require("../keys");

router.get("/", (req, res) => {
  res.send("Home page");
});

router.post("/bsignup", (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: "user already exists with email" });
    }
    bcrypt.hash(password, 12).then((hashedpassword) => {
      const user = new User({
        email,
        password: hashedpassword,
        name,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "User saved successfuly." });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});

router.post("/bsignin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please provide email & password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(402).json({ error: "Invalid Email or Password" });
    }
    bcrypt.compare(password, savedUser.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
        const { _id, name, email } = savedUser;
        res.json({ token, user: { _id, name, email } });
      } else {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
    });
  });
});

module.exports = router;
