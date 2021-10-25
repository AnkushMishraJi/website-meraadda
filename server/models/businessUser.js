const mongoose = require("mongoose");


//Room Schema
const roomSchema = new mongoose.Schema({
price:{
    type: String,
    required: true,
  },
pic:{
    type: [String],
    required: true,
  },
capacity:{
    type: String,
    required: true,
  }
})


//Business User Schema
const businessUserSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  girlsWithBoys :{
    type: Boolean,
    required: true,
  },
  isVerified:{
    type: Boolean,
    required: false,
  },
  roomSmall:{
      type:roomSchema,
      required:false
  },
  roomMedium:{
      type:roomSchema,
      required:false
  },
  roomLarge:{
      type:roomSchema,
      required:false
  }
})





module.exports = businessUserSchema;
