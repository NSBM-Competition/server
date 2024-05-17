const express = require("express");
const { AddUserController } = require("../../controller/AddUserController/AddUserController");
const { AddAdminController } = require("../../controller/AddAdminController/AddAdminController");
const router = express.Router();


// PASS LOGIN CREDENTIAL || POST
router.post("/add_admin",AddAdminController)




module.exports = router