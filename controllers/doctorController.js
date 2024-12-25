const expressAsyncHandler = require("express-async-handler");

const {
  patientInfoCreateRequestValidator,
} = require("../dto/request/validator/DoctorRequestValidator");
const { createPatientInfo } = require("../service/DoctorService");

const patientInfoCreate = expressAsyncHandler(async (req, res, next) => {
  //  1.validating the request
  const createPatientInfoCommand = await patientInfoCreateRequestValidator(
    req,
    res,
    next
  );

  //  2.performing actual operation
  const patientInfo = await createPatientInfo(
    createPatientInfoCommand,
    req,
    res,
    next
  );

  return res.status(200).json({
    data: patientInfo,
    message: "PatientInfo is created successfully ",
  });
});

module.exports = {
  patientInfoCreate,
};
