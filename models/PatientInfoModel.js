const mongoose = require("mongoose");

// Define the PatientInfo schema
const patientInfoSchema = new mongoose.Schema(
  {
    // The ID for the patient info entry
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient", // Assuming you have a Patient model
      required: true,
    },

    // Medical history of the patient
    history: { type: String, required: true },

    // Prescription for the patient
    prescription: { type: String, required: true },

    // List of lab test names (from the LabTestType collection)
    inspectful_reports: [
      {
        type: String, // You could use ObjectId if you prefer to reference LabTestType by _id
      },
    ],
    approved_by_staff: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the PatientInfo model
const PatientInfoSchema = mongoose.model("PatientInfo", patientInfoSchema);
module.exports = PatientInfoSchema;
