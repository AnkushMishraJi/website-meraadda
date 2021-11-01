const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
      },
  boys: {
    type: String,
    required:false
      },
  girls: {
    type: String,
    required:false
      },
  checkIn: {
    type: String,
    required:true
      },
  slot: {
    type: String,
    required:true
      },
  hotelEmail: {
    type: String,
    required:true
      },
  totalBill: {
    type: String,
    required:true
      },
    
});

module.exports = bookingSchema;