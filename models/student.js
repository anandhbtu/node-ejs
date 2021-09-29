//USER.JS in MODELS/USER.JS
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required:false,
    },
    city: {
      type: String,
      required:false,
    },
    state: {
      type: String,
      required:false,
    },
    pin: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    classs: {
      type: String,
      required: false,
    },
    marks: {
      type: String,
      required:false,
    },
    dateEnrolled: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    
  }
);
const student = mongoose.model("enroll", studentSchema);

module.exports = student;
