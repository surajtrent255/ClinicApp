const doctorSchema = require("../../../models/DoctorModel");
const PatientInfoSchema = require("../../../models/PatientInfoModel");
const patientSchema = require("../../../models/PatientModel");
const mongoose = require("mongoose");

const appointmentCreateRequestValidator = async (req, res, next) => {
  const { doctor, patient, appointmentDate, status } = req.body;

  if (!doctor || !patient || !appointmentDate) {
    return res
      .status(400)
      .json({ messege: "Doctor, patient, and appointment date are required." });
  }

  const optDoctor = await doctorSchema.findById(doctor);
  if (!optDoctor) {
    res.status(400);
    throw new Error("Doctor with id + " + doctor + " not found. ");
  }

  //   todo : filtering the available dates;

  const optPatient = await patientSchema.findById(patient);
  if (!optPatient) {
    res.status(400);
    throw new Error("Patient with id + " + patient + " not found. ");
  }

  return { doctor, patient, appointmentDate, status };
};

const patientInfoRetriveRequestValidator = async (req, res, next) => {
  const { searchBy, sortBy, offset, limit } = req.body;

  let filter = {};
  filter[searchBy.key] =
    // mongoose.Types.ObjectId.isValid(searchBy.value)
    //   ? new mongoose.Types.ObjectId(searchBy.value)
    //   :
    searchBy.value;

  let sort = {};
  const sortingOrder = sortBy?.startsWith("-") ? -1 : 1;
  const sortingKey = sortBy?.startsWith("-") ? sortBy.split("-")[1] : sortBy;
  sort[sortingKey] = sortingOrder;

  // pagination
  const pageOffset = parseInt(offset, 0) || 0;
  const pageLimit = parseInt(limit, 10) || 10;

  const patientInfos = await PatientInfoSchema.find(filter)
    .sort(sort)
    .skip(pageOffset)
    .limit(pageLimit);

  return { patientInfos };
};

const patientInfoApproveRequestValidator = async (req, res, next) => {
  const { patientInfoId } = req.body;
  const patientInfo = await PatientInfoSchema.findById(patientInfoId);
  if (!patientInfo) {
    res.status(400);
    throw new Error("Patient Info with id  not found. ");
  }

  return { patientInfo };
};

module.exports = {
  appointmentCreateRequestValidator,
  patientInfoRetriveRequestValidator,
  patientInfoApproveRequestValidator,
};
