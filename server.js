const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const staffRoutes = require("./routes/staffRoutes");
const labAssistantRoutes = require("./routes/labAssistantRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const errorHandler = require("./middlewares/errorMiddleware");
const { swaggerUi, swaggerDocs } = require("./config/swagger");

const {
  API,
  USERS,
  STAFFS,
  API_DOCS,
  DOCTORS,
  LAB_ASSISTANT,
} = require("./utilconstants/PathConstant");

dotenv.config();

// Initialize express
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/" + API + "/" + USERS, userRoutes);
app.use("/" + API + "/" + STAFFS, staffRoutes);
app.use("/" + API + "/" + DOCTORS, doctorRoutes);
app.use("/" + API + "/" + LAB_ASSISTANT, labAssistantRoutes);

app.use("/" + API_DOCS, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
