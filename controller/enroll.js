const mongoose = require("mongoose");
const Enroll = mongoose.model("enroll");

exports.EnrollSt =async (req, res) => {
 let studentsList = await Enroll.find({},{srn:1, studentName:1,email:1,phoneNo:1,classs:1,marks:1,_id:0})
console.log('studentsList :>> ', studentsList);
  res.render("list", {newListItems: studentsList });
};

exports.Enroll = async (req, res, next) => {
console.log('req.body :>> ', req.body);

  var {
    studentName,
    fatherName,
    dob,
    address,
    city,
    state,
    pin,
    phoneNo,
    email,
    classs,
    marks,
  } = req.body;

  if (
    !studentName ||
    !fatherName ||
    !dob ||
    !address ||
    !city ||
    !state ||
    !pin ||
    !phoneNo ||
    !email||
    !classs ||
    !marks
  ) {
    res.redirect("http://localhost:8585/a" ,{message:"please fill all the require field!"});
    return
  }

  if (
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      String(email).toLowerCase()
    ) != true
  ) {
    res.send({ message: "Please enter valid email!" });
    return;
  }

 
    await Enroll.findOne({ email: email }, function (err, data) {
      if (data) {
        console.log("User Exists");
        err = "User Already Exists with this Email...";

        res.send({ message: err });
        return
      } })

      //  srn = await Enroll.find({}).sort({_id:-1}).limit(1)
      //  console.log('srn :>> ', srn);
      //   if(srn.length!=0){
      //     console.log('data :>> ', srn[0].srn);
      //     let data = srn[0].srn
      //     if (data!=undefined && data!="NaN") {
      //       srn =  Number(data)
      //       req.body.srn=++srn
      //     }
      //   }else{
      //     req.body.srn=1
      //   }
       

        

 await Enroll(req.body).save()
       
        res.redirect("http://localhost:8585/a");

};
