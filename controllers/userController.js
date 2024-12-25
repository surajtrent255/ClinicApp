const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const StaffModel = require("../models/StaffModel");
const PatientModel = require("../models/PatientModel");
const DoctorModel = require("../models/DoctorModel");
const LabAssistantModel = require("../models/LabAssistantModel");
const ROLES = require("../utilconstants/rolesConstants");

// @desc    Get all users
// @route   GET /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  console.log("getting ------------------->");
  //  throw new Error("sdfds");
  const users = await User.find();
  res.json(users);
});

// @desc    Get a single user
// @route   GET /api/users/:id
// @access  Public
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json(user);
});

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, roles } = req.body;
  console.log("name: ", name);
  console.log("email: ", email);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    roles,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const createInitialUser = async (name, email, password, roles, res) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    roles,
  });
  return user;
};

const createStaff = asyncHandler(async (req, res) => {
  const { name, email, password, address, phoneNumber, dob, citizenship } =
    req.body;

  const user = await createInitialUser(name, email, password, ["STAFF"], res);

  const staff = await StaffModel.create({
    user,
    address,
    phoneNumber,
    dob,
    citizenship,
  });

  // return staff;
  return res.json({
    data: staff,
    message: "staff has been created successfully!!!. ",
  });
});

const createPatient = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    gender,
    age,
    maritalStatus,
    address,
    bloodGroup,
    bloodPressure,
    dob,
  } = req.body;

  const user = await createInitialUser(name, email, password, ["PATIENT"], res);

  const patient = await PatientModel.create({
    user,
    gender,
    age,
    maritalStatus,
    address,
    bloodGroup,
    bloodPressure,
    dob,
  });

  // return staff;
  return res.json({
    data: patient,
    message: "Patient has been created successfully!!!. ",
  });
});

const getPatients = asyncHandler(async (req, res) => {
  console.log("getting ------------------->");
  //  throw new Error("sdfds");
  const patients = await PatientModel.find().populate([
    { path: "user", select: "email name" },
  ]);
  res.json(patients);
});

//

const createLabAssistant = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    gender,
    age,
    experience,
    maritialStatus,
    address,
    dob,
    citizenship,
    phoneNumber,
  } = req.body;

  const user = await createInitialUser(
    name,
    email,
    password,
    [ROLES.LAB_ASSISTANT],
    res
  );

  const labassistant = await LabAssistantModel.create({
    name,
    email,
    password,
    gender,
    age,
    experience,
    maritialStatus,
    address,
    dob,
    citizenship,
    phoneNumber,
  });

  // return staff;
  return res.json({
    data: labassistant,
    message: "Lab Assistant has been created successfully!!!. ",
  });
});
//
const createDoctor = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    gender,
    age,
    experience,
    maritialStatus,
    address,
    dob,
    citizenship,
    phoneNumber,
  } = req.body;

  const user = await createInitialUser(name, email, password, ["DOCTOR"], res);

  const doctor = await DoctorModel.create({
    user,
    gender,
    age,
    experience,
    maritialStatus,
    address,
    dob,
    citizenship,
    phoneNumber,
  });

  // return staff;
  return res.json({
    data: doctor,
    message: "Doctor has been created successfully!!!. ",
  });
});

const getDoctors = asyncHandler(async (req, res) => {
  console.log("getting ------------------->");
  //  throw new Error("sdfds");
  const doctors = await DoctorModel.find().populate([
    { path: "user", select: "email name" },
  ]);
  res.json(doctors);
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Public
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.password = req.body.password || user.password;

  const updatedUser = await user.save();

  res.json(updatedUser);
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Public
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.remove();

  res.json({ message: "User removed" });
});

module.exports = {
  getUsers,
  getPatients,
  getDoctors,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createStaff,
  createPatient,
  createDoctor,
  createLabAssistant,
};
