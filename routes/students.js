const router = require("express").Router();
const mongoose = require("mongoose");



const studentController = require("../controller/students");

router.get("/getAllStudent", studentController.getAllStudent);

router.post("/addStudent", studentController.addStudent);

router.get(
  "/getAnStudent/:studentId",
  studentController.getAnStudent
);

router.put(
  "/u/:studentId",
  studentController.updateAnStudent
);

router.delete(
  "/deleteAnStudent/:studentId",
  studentController.deleteAnStudent
);

module.exports = router;
