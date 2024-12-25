const expressAsyncHandler = require("express-async-handler");

const {
  appointmentCreateRequestValidator,
  patientInfoRetriveRequestValidator,
  patientInfoApproveRequestValidator,
} = require("../dto/request/validator/StaffRequestValidator");
const {
  createAppointment,
  approvePatientInfo,
} = require("../service/StaffService");

const appointmentCreate = expressAsyncHandler(async (req, res, next) => {
  //  1.validating the request
  const createAppointmentCommand = await appointmentCreateRequestValidator(
    req,
    res,
    next
  );

  //  2.performing actual operation
  const appointment = await createAppointment(
    createAppointmentCommand,
    req,
    res,
    next
  );

  return res.status(200).json({
    data: appointment,
    message: "Appointment is created successfully ",
  });
});

const patientInfoRetrive = expressAsyncHandler(async (req, res, next) => {
  const retrivePatientInfoCommand = await patientInfoRetriveRequestValidator(
    req,
    res,
    next
  );
  return res.status(200).json({
    data: retrivePatientInfoCommand.patientInfos,
    messege: "patient info retrieved successfully",
  });
});

const patientInfoApprove = expressAsyncHandler(async (req, res, next) => {
  const approvePatientInfoCommand = await patientInfoApproveRequestValidator(
    req,
    res,
    next
  );
  const approvedPatientInfo = await approvePatientInfo(
    approvePatientInfoCommand,
    req,
    res,
    next
  );
  return res.status(200).json({
    data: approvedPatientInfo.patientInfo,
    message: "patient info approved successfully",
  });
});

module.exports = {
  appointmentCreate,
  patientInfoRetrive,
  patientInfoApprove,
};
