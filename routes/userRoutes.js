const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createStaff,
  createPatient,
  createDoctor,
  getPatients,
  getDoctors,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { loginUser } = require("../controllers/authController");
const {
  LOGIN,
  STAFFS,
  PATIENT,
  DOCTOR,
} = require("../utilconstants/PathConstant");
const { LAB_ASSISTANT } = require("../utilconstants/rolesConstants");
const router = express.Router();

// router.use(authenticate);

router.route("/" + LOGIN).post(loginUser);

// router.route('/').get(authenticate, roleMiddleware(['user']) ,getUsers)
//     .post(authenticate, roleMiddleware(['user']), createUser);
router
  .route("/")
  .get(authenticate, roleMiddleware(["ADMIN"]), getUsers)
  .post(createUser);

router
  .route("/" + STAFFS)
  .post(authenticate, roleMiddleware(["ADMIN"]), createStaff);

router
  .route("/" + PATIENT)
  .get(authenticate, roleMiddleware(["STAFF"]), getPatients)
  .post(authenticate, roleMiddleware(["STAFF"]), createPatient);

router
  .route("/" + DOCTOR)
  .get(authenticate, roleMiddleware(["ADMIN", "STAFF"]), getDoctors)
  .post(authenticate, roleMiddleware(["ADMIN"]), createDoctor);

router
  .route("/" + LAB_ASSISTANT)
  .get(authenticate, roleMiddleware(["ADMIN", "STAFF"]), getDoctors)
  .post(authenticate, roleMiddleware(["ADMIN"]), createDoctor);

// labassistant create garna xa
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
