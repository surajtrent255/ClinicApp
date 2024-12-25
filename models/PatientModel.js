const mongoose = require("mongoose");
const userModel = require("./UserModel");

const patientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  gender: String,
  phoneNumber: String,
  dob: Date,
  age: Number,
  maritalStatus: String,
  address: String,
  bloodGroup: String,
  bloodPressure: String,
});

module.exports = mongoose.model("Patient", patientSchema);
