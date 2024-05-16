
const bcrypt = require('bcrypt');
const RegistrationModel = require('../../model/RegistrationModel/RegistrationModel');
const jwt = require("jsonwebtoken");

// Handle the user Registration
const registerController = async (req, res) => {

  try {
//     
    const exisitingUser = await RegistrationModel.findOne({ email: req.body.email });

    if (exisitingUser) {
            return res.status(200).send({
                    message: "User Already Exist",
                    success: false
            });
    }

    const password = req.body.password;

    // bcrypt the userPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    // save new details in the database
    const newUser = new RegistrationModel(req.body);
    await newUser.save();

    // handle successfull message
    res.status(201).send({
            message: "Register Sucessfully",
            success: true,

    });

} catch (error) {
    console.log(error);
    res.status(500).send({
            success: false,
            message: `Register Controller ${error.message}`,

    });
}
};

module.exports = { registerController };