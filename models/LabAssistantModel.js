const mongoose = require("mongoose");

const labAssistantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    gender: {
      type: String,
      required: [true, "Please provide gender "],
    },
    age: {
      type: String,
      required: [true, "Please provide age"],
    },
    maritialStatus: {
      type: String,
      required: [true, "please provide your maritialStatus status."],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    dob: {
      type: Date,
      required: [true, "Please add a date of birth"],
    },
    citizenship: {
      type: String,
      required: [true, "Please add citizenship"],
    },
    experience: {
      type: String,
      required: [true, "please provide experience"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("labAssistant", labAssistantSchema);
