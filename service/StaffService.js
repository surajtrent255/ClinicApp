const appointmentSchema = require("../models/AppointmentModel");
const PatientInfoSchema = require("../models/PatientInfoModel");

const createAppointment = async (createAppointmentCommand, req, res, next) => {
  const newAppointMent = new appointmentSchema({
    doctor: createAppointmentCommand.doctor,
    patient: createAppointmentCommand.patient,
    appointmentDate: createAppointmentCommand.appointmentDate,
    status: createAppointmentCommand.status,
  });
  const savedNewAppointment = await newAppointMent.save();
  return savedNewAppointment;
};

const approvePatientInfo = async (
  approvePatientInfoCommand,
  req,
  res,
  next
) => {
  const patientInfo = approvePatientInfoCommand.patientInfo;
  patientInfo.approved_by_staff = true;
  const savedPatientInfo = await patientInfo.save();
  return { patientInfo: savedPatientInfo };
};

module.exports = {
  createAppointment,
  approvePatientInfo,
};
