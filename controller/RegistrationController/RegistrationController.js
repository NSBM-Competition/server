
const bcrypt = require('bcrypt');
const RegistrationModel = require('../../model/RegistrationModel/RegistrationModel');
const jwt = require("jsonwebtoken");
const { sendEmail } = require('../../service/emailServices');


// Handle the user Registration
const registerController = async (req, res) => {
        console.log(req.body);

        try {
                const password = req.body.password;

                // check if the user already exist
                const userExist = await RegistrationModel.findOne({
                        email: req.body.email,
                })

                if (userExist) {
                        return res.status(401).send({
                                message: "User Already Exist",
                                success: false,
                        });
                }

                // bcrypt the userPassword
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                req.body.password = hashedPassword;

                const DTCNumber = Math.floor(1000 + Math.random() * 9000).toString();
                console.log(DTCNumber);

                // Send the reset code to the user's email
                await sendEmail(req.body.email, DTCNumber);

                //     req.body.resetCode = resetCode;

                // save new details in the database
                const newUser = new RegistrationModel({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email:req.body.email,
                        username: req.body.username,
                        mobileNumber: req.body.mobileNumber,
                        password: req.body.password,
                        confirmedPassword: req.body.confirmedPassword,
                        agreeTerms: req.body.agreeTerms,
                        DTCNumber: DTCNumber,
                });

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