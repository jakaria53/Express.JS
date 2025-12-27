const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  addStudent,
  deleteStudent
} = require("../controllers/student.controller");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
