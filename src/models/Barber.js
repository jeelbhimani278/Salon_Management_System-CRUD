const { string } = require("joi");
const mongoose = require("mongoose");

const barberSchema = new mongoose.Schema({
  user_id: {
    type: String,
    ref: "User",
    required: true,
    unique: true,
  },

  specialization: {
    type: String,
    default: "",
  },

  commission_percentage: {
    type: Number,
    required: true,
  },

  joining_date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Barber", barberSchema);
