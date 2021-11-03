const mongoose = require("mongoose");


//Room Schema
const roomSchemaSmall = new mongoose.Schema({
smallPrice:{
    type: String,
    
  },
smallPic:{
    type: String,
    
  },
smallCapacity:{
    type: Number,
    
  }
})

const roomSchemaMedium = new mongoose.Schema({
  mediumPrice:{
      type: String,
          },
  mediumPic:{
      type: String,
          },
  mediumCapacity:{
      type: Number,
          }
  })

  const roomSchemaLarge = new mongoose.Schema({
    largePrice:{
        type: String,
              },
    largePic:{
        type: String,
              },
    largeCapacity:{
        type: Number,
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
  address:{
    type: String,
    required: true,
  },
  isNightPartyAllowed:{
    type:Boolean,
    required: true,
  },
  isBlockedOn:{type:Object},
  girlsWithBoys :{
    type: Boolean,
    required:false
  },
  isVerified:{
    type: Boolean,
    required: false,
  },
  
  roomSmallData:{
      type:roomSchemaSmall,
      required:false
  },
  roomMediumData:{
      type:roomSchemaMedium,
      required:false
  },
  roomLargeData:{
      type:roomSchemaLarge,
      required:false
  }
})





module.exports = businessUserSchema;
