const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Staff", staffSchema);
