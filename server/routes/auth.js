const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const businessUserSchema = require("../models/businessUser");
const businessUser = mongoose.model("BusinessUser", businessUserSchema);
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");

const userSchema = require("../models/user")
const clientUser = mongoose.model("ClientUser", userSchema);

const { JWT_SECRET } = require("../keys");

router.get("/", (req, res) => {
  res.send("Home page");
});

//bsignup completed
router.post("/bsignup", (req, res) => {
  const { hotelName, email, password, location, girlsWithBoys, roomSmallData, roomMediumData, roomLargeData } = req.body;
  if (!email || !password || !hotelName || !location ) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  businessUser.findOne({ email: email }).then((savedBusinessUser) => {
    if (savedBusinessUser) {
      return res.status(422).json({ error: "user already exists with email" });
    }
    bcrypt.hash(password, 12).then((hashedpassword) => {
      const BusinessUser = new businessUser({
        email,
        password: hashedpassword,
        hotelName,
        location,
        girlsWithBoys,
        roomSmallData,
        roomMediumData,
        roomLargeData
      });
      BusinessUser
        .save()
        .then((BusinessUser) => {
          res.json({ message: "User saved successfuly." });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});

//bsignin completed
router.post("/bsignin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please provide email & password" });
  }
  businessUser.findOne({ email: email }).then((savedBusinessUser) => {
    if (!savedBusinessUser) {
      return res.status(402).json({ error: "Invalid Email or Password" });
    }
    bcrypt.compare(password, savedBusinessUser.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: savedBusinessUser._id }, JWT_SECRET);
        const { _id, hotelName, email } = savedBusinessUser;
        res.json({ token, user: { _id, hotelName, email } });
      } else {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
    });
  });
});

router.post("/checknum", (req, res) => {
  const { phoneNumber } = req.body;
    clientUser.findOne({ phoneNumber: phoneNumber }).then((savedClientUser) => {
    if (savedClientUser) {
      console.log("User already exists")
      return res.status(202).json({isUser:true,phoneNumber:phoneNumber})
      }
    else {
        const ClientUser = new clientUser({
        phoneNumber
      });
      ClientUser
      .save()
      .then((ClientUser)=>{
        res.json({isUser:false,message:"Hello new user"});
        console.log(User)
      })

    }
    
  });
});

module.exports = router;
