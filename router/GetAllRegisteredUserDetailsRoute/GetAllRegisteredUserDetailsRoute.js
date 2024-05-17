const express = require("express");
const { GetAllRegisteredUserDetailsController } = require("../../controller/GetAllRegisteredUserDetailsController/GetAllRegisteredUserDetailsController");
const router = express.Router();


// PASS LOGIN CREDENTIAL || POST
router.get("/details",GetAllRegisteredUserDetailsController)




module.exports = router