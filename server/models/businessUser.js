const mongoose = require("mongoose");


//Room Schema
const roomSchemaSmall = new mongoose.Schema({
smallPrice:{
    type: String,
    required: true,
  },
smallPic:{
    type: String,
    required: true,
  },
smallCapacity:{
    type: String,
    required: true,
  }
})

const roomSchemaMedium = new mongoose.Schema({
  mediumPrice:{
      type: String,
      required: true,
    },
  mediumPic:{
      type: String,
      required: true,
    },
  mediumCapacity:{
      type: String,
      required: true,
    }
  })

  const roomSchemaLarge = new mongoose.Schema({
    largePrice:{
        type: String,
        required: true,
      },
    largePic:{
        type: [String],
        required: true,
      },
    largeCapacity:{
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
