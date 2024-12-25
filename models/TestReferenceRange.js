const mongoose = require("mongoose");

// Define the TestReferenceRange schema
const testReferenceRangeSchema = new mongoose.Schema(
  {
    // The unique identifier for the reference range
    agroup_Group: { type: String, required: true },

    // The reference value or the normal range value for the test type (e.g., "Normal range: 70-100 mg/dL")
    value: { type: String, required: true },

    // The name of the associated test type (can reference the lab_test_types model if needed)
    test_type_name: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create and export the TestReferenceRange model
const TestReferenceRange = mongoose.model(
  "TestReferenceRange",
  testReferenceRangeSchema
);
module.exports = TestReferenceRange;
