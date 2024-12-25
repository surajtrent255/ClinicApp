const expressAsyncHandler = require("express-async-handler");
const {
  approvedPatientInfoRetriveRequestValidator,
} = require("../dto/request/validator/LabAssistantRequestValidator");

const approvedPatientInfoRetrive = expressAsyncHandler(
  async (req, res, next) => {
    const retrivePatientInfoCommand =
      await approvedPatientInfoRetriveRequestValidator(req, res, next);
    return res.status(200).json({
      data: retrivePatientInfoCommand.patientInfos,
      messege: "patient info retrieved successfully",
    });
  }
);

module.exports = {
  approvedPatientInfoRetrive,
};
