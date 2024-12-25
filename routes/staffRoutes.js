const express = require("express");
const {
  appointmentCreate,
  patientInfoRetrive,
  patientInfoApprove,
} = require("../controllers/staffController");
const {
  APPOINTMENT,
  CREATE,
  PATIENT_INFO,
  APPROVE,
} = require("../utilconstants/PathConstant");

const router = express.Router();

router.route("/" + APPOINTMENT + "/" + CREATE).post(appointmentCreate);
router.route("/" + PATIENT_INFO).post(patientInfoRetrive);
router.route("/" + PATIENT_INFO + "/" + APPROVE).post(patientInfoApprove);

module.exports = router;
