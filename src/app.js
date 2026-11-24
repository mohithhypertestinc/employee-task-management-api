
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

const taskRoutes = require("./routes/taskRoutes");

// Middleware
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee Task Management API is running",
  });
});

// Task API routes
app.use("/api/tasks", taskRoutes);

module.exports = app;
