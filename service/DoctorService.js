const patientInfoSchema = require("../models/PatientInfoModel");

const createPatientInfo = async (createPatientInfoCommand, req, res, next) => {
  const patientInfo = new patientInfoSchema({
    patient_id: createPatientInfoCommand.patient_id,
    prescription: createPatientInfoCommand.prescription,
    history: createPatientInfoCommand.history,
    inspectful_reports: createPatientInfoCommand.inspectful_reports,
  });
  const patientInfoCreated = await patientInfo.save();
  return patientInfoCreated;
};

module.exports = {
  createPatientInfo,
};
