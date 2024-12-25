const express = require("express");
const {
  approvedPatientInfoRetrive,
} = require("../controllers/labAssistantController");
const { PATIENT_INFO } = require("../utilconstants/PathConstant");
const router = express.Router();

router.route("/" + PATIENT_INFO).post(approvedPatientInfoRetrive);
module.exports = router;
