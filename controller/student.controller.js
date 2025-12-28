const students = require("../data/students.json");

// GET all students
exports.getAllStudents = (req, res) => {
  res.json(students);
};

// GET student by ID
exports.getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};

// ADD student
exports.addStudent = (req, res) => {
  const { name, department } = req.body;

  if (!name || !department) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    department
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
};

// DELETE student
exports.deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);
  res.json({ message: "Student deleted" });
};
