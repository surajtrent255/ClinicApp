// Insert documents into the `labtesttypes` collection
db.labtesttypes.insertMany([
// Hematology Test List (Parent: null)
{
"name": "HEMATOLOGY_TEST_LIST",
"label": "Blood Cell Analysis",
"description": "Tests related to blood cell analysis such as CBC, Hemoglobin, Hematocrit, etc.",
"parent": null, // Top-level category, no parent
},
// Complete Blood Count (CBC) (Parent: HEMATOLOGY_TEST_LIST)
{
"name": "COMPLETE_BLOOD_COUNT_CBC",
"label": "Blood Cell Count",
"description": "Includes tests like Hemoglobin, Hematocrit, WBC, RBC, Platelets, etc.",
"parent": "HEMATOLOGY_TEST_LIST", // Parent is HEMATOLOGY_TEST_LIST
},
// Hemoglobin (HGB) (Parent: COMPLETE_BLOOD_COUNT_CBC)
{
"name": "HEMOGLOBIN_HGB",
"label": "Hemoglobin Measurement",
"description": "Measurement of hemoglobin concentration in the blood.",
"parent": "COMPLETE_BLOOD_COUNT_CBC", // Parent is COMPLETE_BLOOD_COUNT_CBC
},
// Hematocrit (HCT) (Parent: COMPLETE_BLOOD_COUNT_CBC)
{
"name": "HEMATOCRIT_HCT",
"label": "Hematocrit Measurement",
"description": "Percentage of red blood cells in a blood sample.",
"parent": "COMPLETE_BLOOD_COUNT_CBC",
},
// White Blood Cell (WBC) Count (Parent: COMPLETE_BLOOD_COUNT_CBC)
{
"name": "WHITE_BLOOD_CELL_WBC_COUNT",
"label": "White Blood Cell Count",
"description": "Count of white blood cells in the blood.",
"parent": "COMPLETE_BLOOD_COUNT_CBC",
},
// Red Blood Cell (RBC) Count (Parent: COMPLETE_BLOOD_COUNT_CBC)
{
"name": "RED_BLOOD_CELL_RBC_COUNT",
"label": "Red Blood Cell Count",
"description": "Count of red blood cells in the blood.",
"parent": "COMPLETE_BLOOD_COUNT_CBC",
},
// Platelet Count (Parent: COMPLETE_BLOOD_COUNT_CBC)
{
"name": "PLATELET_COUNT",
"label": "Platelet Count",
"description": "Count of platelets in the blood.",
"parent": "COMPLETE_BLOOD_COUNT_CBC",
},
// Reticulocyte Count (Parent: HEMATOLOGY_TEST_LIST)
{
"name": "RETICULOCYTE_COUNT",
"label": "Reticulocyte Measurement",
"description": "Count of reticulocytes in the blood.",
"parent": "HEMATOLOGY_TEST_LIST",
},
// Peripheral Blood Smear (Parent: HEMATOLOGY_TEST_LIST)
{
"name": "PERIPHERAL_BLOOD_SMear",
"label": "Blood Smear Test",
"description": "A slide is examined under a microscope to detect abnormalities in blood cells.",
"parent": "HEMATOLOGY_TEST_LIST",
},
// Erythrocyte Sedimentation Rate (ESR) (Parent: HEMATOLOGY_TEST_LIST)
{
"name": "ERYTHROCYTE_SEDIMENTATION_RATE_ESR",
"label": "ESR Test",
"description": "Measurement of the rate at which red blood cells settle in a test tube.",
"parent": "HEMATOLOGY_TEST_LIST",
},

// Biochemistry Test List (Parent: null)
{
"name": "BIOCHEMISTRY_TEST_LIST",
"label": "Metabolic Function Testing",
"description": "Tests to evaluate the body's metabolic function.",
"parent": null,
},
// Basic Metabolic Panel (BMP) (Parent: BIOCHEMISTRY_TEST_LIST)
{
"name": "BASIC_METABOLIC_PANEL_BMP",
"label": "Basic Metabolic Tests",
"description": "Includes tests like Sodium, Potassium, Chloride, Glucose, etc.",
"parent": "BIOCHEMISTRY_TEST_LIST",
},
// Comprehensive Metabolic Panel (CMP) (Parent: BIOCHEMISTRY_TEST_LIST)
{
"name": "COMPREHENSIVE_METABOLIC_PANEL_CMP",
"label": "Comprehensive Metabolic Panel",
"description": "Includes tests like Glucose, Calcium, Electrolytes, etc.",
"parent": "BIOCHEMISTRY_TEST_LIST",
},
// Lipid Panel (Parent: BIOCHEMISTRY_TEST_LIST)
{
"name": "LIPID_PANEL",
"label": "Lipid Profile",
"description": "Tests for cholesterol and triglyceride levels in the blood.",
"parent": "BIOCHEMISTRY_TEST_LIST",
},
// Electrolyte Panel (Parent: BIOCHEMISTRY_TEST_LIST)
{
"name": "ELECTROLYTE_PANEL",
"label": "Electrolyte Testing",
"description": "Tests levels of sodium, potassium, chloride, and bicarbonate.",
"parent": "BIOCHEMISTRY_TEST_LIST",
},

// Clinical Pathology Test List (Parent: null)
{
"name": "CLINICAL_PATHOLOGY_TEST_LIST",
"label": "Clinical Pathology Tests",
"description": "Tests related to various bodily fluids such as urine and other fluids.",
"parent": null,
},
// Urinalysis (Parent: CLINICAL_PATHOLOGY_TEST_LIST)
{
"name": "URINALYSIS",
"label": "Urine Analysis",
"description": "Test to evaluate the composition of urine, including pH, specific gravity, and others.",
"parent": "CLINICAL_PATHOLOGY_TEST_LIST",
},
// Thyroid Function Tests (Parent: CLINICAL_PATHOLOGY_TEST_LIST)
{
"name": "THYROID_FUNCTION_TESTS",
"label": "Thyroid Function Tests",
"description": "Tests like TSH, Free T4, Free T3 to assess thyroid function.",
"parent": "CLINICAL_PATHOLOGY_TEST_LIST",
},
// Liver Function Tests (Parent: CLINICAL_PATHOLOGY_TEST_LIST)
{
"name": "LIVER_FUNCTION_TESTS",
"label": "Liver Function Tests",
"description": "Includes tests like ALT, AST, Bilirubin, Alkaline Phosphatase.",
"parent": "CLINICAL_PATHOLOGY_TEST_LIST",
},
// Renal Function Tests (Parent: CLINICAL_PATHOLOGY_TEST_LIST)
{
"name": "RENAL_FUNCTION_TESTS",
"label": "Kidney Function Tests",
"description": "Includes tests like Creatinine, Urea, GFR.",
"parent": "CLINICAL_PATHOLOGY_TEST_LIST",
},

// Immunology and Serology Test List (Parent: null)
{
"name": "IMMUNOLOGY_AND_SEROLOGY_TEST_LIST",
"label": "Immunology and Serology",
"description": "Tests to evaluate immune response and the presence of antibodies.",
"parent": null,
},
// Antinuclear Antibody (ANA) (Parent: IMMUNOLOGY_AND_SEROLOGY_TEST_LIST)
{
"name": "ANTINUCLEAR_ANTIBODY_ANA",
"label": "ANA Test",
"description": "Test for the presence of antinuclear antibodies.",
"parent": "IMMUNOLOGY_AND_SEROLOGY_TEST_LIST",
},
// Rheumatoid Factor (RF) (Parent: IMMUNOLOGY_AND_SEROLOGY_TEST_LIST)
{
"name": "RHEUMATOID_FACTOR_RF",
"label": "RF Test",
"description": "Test to detect rheumatoid factor, an indicator of rheumatoid arthritis.",
"parent": "IMMUNOLOGY_AND_SEROLOGY_TEST_LIST",
},

// Tumor Markers Test List (Parent: null)
{
"name": "TUMOR_MARKERS_TEST_LIST",
"label": "Cancer Markers",
"description": "Tests to detect markers related to cancer.",
"parent": null,
},
// Prostate-Specific Antigen (PSA) (Parent: TUMOR_MARKERS_TEST_LIST)
{
"name": "PROSTATE_SPECIFIC_ANTIGEN_PSA",
"label": "PSA Test",
"description": "Test to measure prostate-specific antigen levels in the blood.",
"parent": "TUMOR_MARKERS_TEST_LIST",
}
]);
================

// Insert reference ranges for different tests into `test_reference_range` collection
db.test_reference_range.insertMany([
// **HEMATOLOGY_TEST_LIST** (General test category)
// Hemoglobin Reference Range
{
"Agroup_Group": "ADULTS",
"value": "13.8-17.2 g/dL",
"test_type_name": "HEMOGLOBIN_HGB"
},
{
"Agroup_Group": "FEMALE",
"value": "12.1-15.1 g/dL",
"test_type_name": "HEMOGLOBIN_HGB"
},
{
"Agroup_Group": "CHILDREN",
"value": "11-16 g/dL (varies by age)",
"test_type_name": "HEMOGLOBIN_HGB"
},

// **COMPLETE_BLOOD_COUNT_CBC** (Complete Blood Count)
// White Blood Cell (WBC) Count Reference Range
{
"Agroup_Group": "ADULTS",
"value": "4,000-11,000 cells/μL",
"test_type_name": "WHITE_BLOOD_CELL_WBC_COUNT"
},

// Red Blood Cell (RBC) Count Reference Range
{
"Agroup_Group": "ADULTS",
"value": "4.7-6.1 million cells/μL (Male), 4.2-5.4 million cells/μL (Female)",
"test_type_name": "RED_BLOOD_CELL_RBC_COUNT"
},

// Platelet Count Reference Range
{
"Agroup_Group": "ADULTS",
"value": "150,000-450,000 platelets/μL",
"test_type_name": "PLATELET_COUNT"
},

// Hematocrit (HCT) Reference Range
{
"Agroup_Group": "MALE",
"value": "40.7-50.3%",
"test_type_name": "HEMATOCRIT_HCT"
},
{
"Agroup_Group": "FEMALE",
"value": "36.1-44.3%",
"test_type_name": "HEMATOCRIT_HCT"
},

// **RETICULOCYTE_COUNT** (Reticulocyte Count)
{
"Agroup_Group": "ADULTS",
"value": "0.5-2.5% of total red blood cells",
"test_type_name": "RETICULOCYTE_COUNT"
},

// **PERIPHERAL_BLOOD_SMear** (Peripheral Blood Smear)
{
"Agroup_Group": "ADULTS",
"value": "No abnormal cells present",
"test_type_name": "PERIPHERAL_BLOOD_SMear"
},

// **ERYTHROCYTE_SEDIMENTATION_RATE_ESR** (ESR Test)
{
"Agroup_Group": "ADULTS",
"value": "Male: 0-15 mm/hr, Female: 0-20 mm/hr",
"test_type_name": "ERYTHROCYTE_SEDIMENTATION_RATE_ESR"
},

// **BIOCHEMISTRY_TEST_LIST** (General test category)
// **BASIC_METABOLIC_PANEL_BMP** (Basic Metabolic Panel)
{
"Agroup_Group": "ADULTS",
"value": "Sodium: 135-145 mEq/L, Potassium: 3.5-5.0 mEq/L, Chloride: 96-106 mEq/L, Glucose: 70-99 mg/dL (fasting)",
"test_type_name": "BASIC_METABOLIC_PANEL_BMP"
},

// **COMPREHENSIVE_METABOLIC_PANEL_CMP** (Comprehensive Metabolic Panel)
{
"Agroup_Group": "ADULTS",
"value": "Glucose: 70-100 mg/dL, Calcium: 8.5-10.2 mg/dL, Sodium: 135-145 mEq/L, Potassium: 3.5-5.0 mEq/L",
"test_type_name": "COMPREHENSIVE_METABOLIC_PANEL_CMP"
},

// **LIPID_PANEL** (Lipid Profile)
{
"Agroup_Group": "ADULTS",
"value": "Total Cholesterol: <200 mg/dL, HDL: >40 mg/dL, LDL: <100 mg/dL, Triglycerides: <150 mg/dL",
"test_type_name": "LIPID_PANEL"
},

// **ELECTROLYTE_PANEL** (Electrolyte Panel)
{
"Agroup_Group": "ADULTS",
"value": "Sodium: 135-145 mEq/L, Potassium: 3.5-5.0 mEq/L, Chloride: 96-106 mEq/L, Bicarbonate: 22-28 mEq/L",
"test_type_name": "ELECTROLYTE_PANEL"
},

// **CLINICAL_PATHOLOGY_TEST_LIST** (General test category)
// **URINALYSIS** (Urine Analysis)
{
"Agroup_Group": "ADULTS",
"value": "pH: 4.5-8.0, Specific Gravity: 1.005-1.030, Glucose: Negative, Protein: Negative",
"test_type_name": "URINALYSIS"
},

// **THYROID_FUNCTION_TESTS** (Thyroid Function Tests)
{
"Agroup_Group": "ADULTS",
"value": "TSH: 0.4-4.0 mIU/L, Free T4: 0.8-1.8 ng/dL, Free T3: 2.3-4.2 pg/mL",
"test_type_name": "THYROID_FUNCTION_TESTS"
},

// **LIVER_FUNCTION_TESTS** (Liver Function Tests)
{
"Agroup_Group": "ADULTS",
"value": "ALT: 7-56 U/L, AST: 10-40 U/L, Bilirubin: 0.1-1.2 mg/dL, Alkaline Phosphatase: 44-147 IU/L",
"test_type_name": "LIVER_FUNCTION_TESTS"
},

// **RENAL_FUNCTION_TESTS** (Renal Function Tests)
{
"Agroup_Group": "ADULTS",
"value": "Creatinine: 0.6-1.2 mg/dL, BUN: 7-20 mg/dL, GFR: >90 mL/min/1.73 m²",
"test_type_name": "RENAL_FUNCTION_TESTS"
},

// **IMMUNOLOGY_AND_SEROLOGY_TEST_LIST** (Immunology & Serology)
// **ANTINUCLEAR_ANTIBODY_ANA** (ANA Test)
{
"Agroup_Group": "ADULTS",
"value": "Negative",
"test_type_name": "ANTINUCLEAR_ANTIBODY_ANA"
},

// **RHEUMATOID_FACTOR_RF** (Rheumatoid Factor Test)
{
"Agroup_Group": "ADULTS",
"value": "<20 IU/mL",
"test_type_name": "RHEUMATOID_FACTOR_RF"
},

// **TUMOR_MARKERS_TEST_LIST** (Tumor Markers)
// **PROSTATE_SPECIFIC_ANTIGEN_PSA** (PSA Test)
{
"Agroup_Group": "ADULTS_MALE",
"value": "<4.0 ng/mL",
"test_type_name": "PROSTATE_SPECIFIC_ANTIGEN_PSA"
}
]);
