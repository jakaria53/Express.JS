const express = require("express");
const app = express();

app.use(express.json());

const studentRoutes = require("./routes/student.routes");
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student API is running");
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
