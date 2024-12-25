const mongoose = require("mongoose");

// Define the LabTestType schema
const labTestTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Name of the lab test
    label: { type: String }, // Label for the lab test
    description: { type: String }, // Description of the lab test
    parent: { type: String },
    // Parent lab test type (optional self-referencing)
  },
  { timestamps: true }
);

// Create and export the LabTestType model
const LabTestType = mongoose.model("LabTestType", labTestTypeSchema);
module.exports = LabTestType;
