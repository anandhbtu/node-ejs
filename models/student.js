//USER.JS in MODELS/USER.JS
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
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
  },
  city: {
      type: String,
    },
    state: {
      type: String,
    },
    pin: {
    type: String,
    required: true,
   
  },
  phoneNo:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  classs:{
    type: String,
    required: false,
  },
  marks: {
      type: String,
    },
    dateEnrolled: {
    type: Date,
    default: Date.now,
  },
},
  {
    timestamps: true,
    //note: isko schema k bahar likhenge
  }
);
const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
