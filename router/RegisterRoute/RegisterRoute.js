const express = require("express");
const { registerController } = require("../../controller/RegistrationController/RegistrationController");
const router = express.Router();


// PASS LOGIN CREDENTIAL || POST
router.post("/register",registerController)



module.exports = router