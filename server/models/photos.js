const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});

module.exports = photosSchema;
