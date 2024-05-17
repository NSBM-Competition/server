const express = require("express");
const { AddUserController } = require("../../controller/AddUserController/AddUserController");
const router = express.Router();


// PASS LOGIN CREDENTIAL || POST
router.post("/createUser",AddUserController)




module.exports = router