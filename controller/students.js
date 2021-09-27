
const mongoose = require("mongoose");
const Student = mongoose.model("Student");
var items =["Anand Bhardwaj","Rohit"]


exports.getAllStudent = async (req, res) => {
  const student = await Student.findOne({});
  //console.log('student :>>', res.send(student))
  console.log('student :>> ', student);
  res.render('list',{kindofdata:"student",newListItems:items})
  //  res.send("Featched following all students !\n"+student);
};

//add student
exports.addStudent = async (req, res) => {
  const student = new Student();
  student.studentName = req.body.studentName;
  student.fatherName = req.body.fatherName;
  student.dob = req.body.dob;
  student.address = req.body.address;
  student.city = req.body.city;
  student.state = req.body.state;
  student.pin = req.body.pin;
  student.phoneNo = req.body.phoneNo;
  student.email = req.body.email;
  student.classs = req.body.classs;
  student.marks = req.body.marks;

  await student.save();

  res.send("Added following student !\n"+student);
};

//gat a student
exports.getAnStudent = async (req, res) => {
  const student = await Student.findOne({ _id: req.params.studentId });
  res.send("Fetched following student !\n"+student);
};

//update an student
exports.updateAnStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    {
      _id: req.params.studentId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.send("Updated following student !\n"+student);
};
//delete an student
exports.deleteAnStudent = async (req, res) => {
  const student = await Student.findByIdAndRemove({
    _id: req.params.studentId,
  });
  res.send("Deleted following student !\n"+student);
};
