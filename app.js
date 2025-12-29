const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
const studentRoutes = require("./routes/student.routes");
app.use("/api/students", studentRoutes);

// root route
app.get("/", (req, res) => {
  res.send("Student API is running");
});

module.exports = app;
