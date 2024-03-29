const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carFrom: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  carTo: {
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

const Car = mongoose.model("Car", carSchema);

module.exports = Car;