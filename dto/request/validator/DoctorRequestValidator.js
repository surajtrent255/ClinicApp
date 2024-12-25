const LabTestTypeSchema = require("../../../models/LabTestType");
const patientSchema = require("../../../models/PatientModel");

const patientInfoCreateRequestValidator = async (req, res, next) => {
  const { patient_id, history, prescription, inspectful_reports } = req.body;

  if (!patient_id) {
    res.status(400);
    throw new Error("please provide patient id");
  }

  const optPatient = await patientSchema.findById(patient_id);
  if (!optPatient) {
    res.status(400);
    throw new Error("Patient with id + " + patient_id + " not found. ");
  }

  //   todo : finding the inspectful_report names are available or not  ;
  // colum thapna xa staff approve ko lagi.
  const availableLabTestTypes = await LabTestTypeSchema.find({
    name: { $in: inspectful_reports },
  });
  if (inspectful_reports.length !== availableLabTestTypes.length) {
    const missingTests = inspectful_reports.filter(
      (inspectfulReport) =>
        !availableLabTestTypes.some(
          (availableTestType) => availableTestType.name === inspectfulReport
        )
    );
    res.status(400);
    throw new Error("some test types are not available => " + missingTests);
  }

  return { patient_id, history, prescription, inspectful_reports };
};

module.exports = {
  patientInfoCreateRequestValidator,
};
