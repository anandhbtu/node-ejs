const router = require("express").Router();

const enrolleController = require("../controller/enroll");

router.get("/a", enrolleController.EnrollSt);

router.post("/", enrolleController.Enroll);

module.exports = router;
