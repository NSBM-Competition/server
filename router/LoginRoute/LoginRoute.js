const express = require("express");
const { loginController } = require("../../controller/LoginController/LoginController");
const router = express.Router();


// PASS LOGIN CREDENTIAL || POST
router.post("/login",loginController)



module.exports = router