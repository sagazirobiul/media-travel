const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
  image_id: {
    type: String,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;