const express = require("express");
const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running ");
});

// server start
app.listen(5001, () => {
  console.log("Server running on port 5001");
});
