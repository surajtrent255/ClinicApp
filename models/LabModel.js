const mongoose = require("mongoose");

const labSchema = new mongoose.Schema(
  {
    testDetails: {
      type: String,
      required: true,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient", // Reference to the Patient model
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Lab", labSchema);
