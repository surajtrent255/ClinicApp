const PatientInfoSchema = require("../../../models/PatientInfoModel");

const approvedPatientInfoRetriveRequestValidator = async (req, res, next) => {
  const { searchBy, sortBy, offset, limit } = req.body;
  let filter = {};
  filter[searchBy.key] =
    // mongoose.Types.ObjectId.isValid(searchBy.value)
    //   ? new mongoose.Types.ObjectId(searchBy.value)
    //   :
    searchBy.value;
  filter["approved_by_staff"] = true;

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

module.exports = {
  approvedPatientInfoRetriveRequestValidator,
};
