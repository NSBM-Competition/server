const express = require('express');
const { GenerateQRController } = require('../../controller/GenerateQRController/GenerateQRController');
const router = express.Router();


// pass qr code data
router.post("/qr",GenerateQRController)


module.exports = router