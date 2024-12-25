const express = require("express");
const { PATIENT_INFO, CREATE } = require("../utilconstants/PathConstant");
const { patientInfoCreate } = require("../controllers/doctorController");

const router = express.Router();

router.route("/" + PATIENT_INFO + "/" + CREATE).post(patientInfoCreate);

module.exports = router;
