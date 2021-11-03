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

const bookingSchema = require("../models/booking")
const booking = mongoose.model("Booking",bookingSchema)

const { JWT_SECRET } = require("../keys");

router.get("/", (req, res) => {
  res.send("Home page");
});

//bsignup completed
router.post("/bsignup", (req, res) => {
  const { hotelName, email, password, location, address, girlsWithBoys, isNightPartyAllowed, roomSmallData, roomMediumData, roomLargeData } = req.body;
  if (!email || !password || !hotelName || !location ) {
    return res.status(400).json({
      "error":"Please enter all fields"
      });
  }
  businessUser.findOne({ email: email }).then((savedBusinessUser) => {
    if (savedBusinessUser) {
      return res.status(409).json({
        "error":"The hotel user already exists"
        });
    }
    bcrypt.hash(password, 12).then((hashedpassword) => {
      const BusinessUser = new businessUser({
        email,
        password: hashedpassword,
        hotelName,
        location,
        address,
        girlsWithBoys,
        isNightPartyAllowed,
        roomSmallData,
        roomMediumData,
        roomLargeData
      });
      BusinessUser
        .save()
        .then((BusinessUser) => {
          res.status(201).json({
            "message":"New hotel user has been created"
            });
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
    return res.status(400).json({
      "error":"Please enter all fields"
      });
  }
  businessUser.findOne({ email: email }).then((savedBusinessUser) => {
    if (!savedBusinessUser) {
      return res.status(422).json({
        "error": "Invalid Email or Password"
    });
    }
    bcrypt.compare(password, savedBusinessUser.password).then((doMatch) => {
      if (doMatch) {
        const token = jwt.sign({ _id: savedBusinessUser._id }, JWT_SECRET);
        const { _id, hotelName, email } = savedBusinessUser;
        res.status(201).json({ token, user: { _id, hotelName, email } });
      } else {
        return res.status(422).json({ error: "Invalid Email or Password" });
      }
    });
  });
});

//checknum complete
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
              })

    }
    
  });
});

//user signup complete
router.put("/usignup", (req, res) => {
  const { name,email,dob, phoneNumber } = req.body;
  // if (!email || !name || !dob ) {
  //   return res.status(400).json({
  //     "error":"Please enter all fields"
  //     });
  // }
  clientUser.findOneAndUpdate({phoneNumber:phoneNumber},{$set:{name:name,email:email,dob:dob}},
    function(err){
      if (err){
        return console.log(err)
      }
      else {
      res.json("Saved User")
      console.log("Saved USer")
    }
    }
    
  );
});

//booking completed
router.post("/booking", (req,res) => {
  const { name, boys, girls, checkIn, slot, hotelEmail, roomtype, totalBill } = req.body;
  const Booking = new booking({
    name,
    boys,
    girls,
    checkIn,
    slot,
    hotelEmail,
    roomtype,
    totalBill
  });
  Booking
  .save()
  .then((Booking) => {
          res.status(201).json({
            "message":"User Booking has been generatd"
            });
        })
        .catch((err) => {
          console.log(err);
        });
});

//hotel booking get completed
router.get("/hotelBooking", (req,res) =>{
  const {hotelEmail} = req.query;
  booking.find({hotelEmail:hotelEmail}).then((thisHotelBookings)=>{
    return res.status(200).json(thisHotelBookings)
  })
  .catch((err) => {
          console.log(err);
        });
}) 

//Incomplete
router.get("/hotelList", (req,res) =>{
  const {date, boys, girls, isNightParty} = req.body
  console.log(typeof date,typeof boys, typeof girls,typeof isNightParty)
  const totalPersons = boys + girls;
  console.log(totalPersons)
  var isGirlsWithBoys;
  if (boys>=1 && girls>=1){
    isGirlsWithBoys = true
  }else{
    isGirlsWithBoys = false
  } 
  businessUser.find(
    {isBlockedOn:{$ne:date}},
    // {girlsWithBoys:isGirlsWithBoys},
    {$or:[{roomSmallData:{smallCapacity:{$gte:totalPersons}}},{roomMediumData:{mediumCapacity:{$gte:totalPersons}}},{roomLargeData:{largeCapacity:{$gte:totalPersons}}}]},
    // {isNightPartyAllowed:isNightParty}
    
    ).then((toListHotels)=>{
    return (res.status(200).json(toListHotels))  
  })
  .catch((err)=>{
      console.log(err)
    })

})

//Incomplete
router.put("/blockUnblock", (req,res) =>{
  const {isBlockedOn,email} = req.body;
  businessUser.findOneAndUpdate({email:email},{
    $push:{isBlockedOn:isBlockedOn}
  },{
    new:true
  }).exec((err,result)=>{
    if (err){
    return res.status(422).json({error:err})
  }else{
    res.json(result)
    console.log(isBlockedOn)
  }
  })
})


module.exports = router;
