const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const RegistrationModel = require('../../model/RegistrationModel/RegistrationModel');

// Handle the user login
const loginController = async (req, res) => {
      console.log(req.body);
        try {
          const user = await RegistrationModel.findOne({ DTCNumber: req.body.DTPCode });
          if (!user) {
                  return res.status(200).send({
                          message: "user not found",
                          success: false
                  });
          }
      
          // compare the password and hashedpassword
        //   const isMatch = await bcrypt.compare(req.body.password, user.password);
        const isMatch = await bcrypt.compare(req.body.Password, user.password);
        // console.log(isMatch);
      
          // check the passwords are match or not
          if (!isMatch) {
                  return res.status(200).send({
                          message: "Invalid Email or Password",
                          success: false
                  });
          }

          if(req.body.DTPCode !== user.DTCNumber){
                return res.status(200).send({
                        message: "Invalid DCP Number",
                        success: false
                });
          }

      
          // Generate a JWT token after user creation
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                  expiresIn: '1d',
          });
      
          // handle successfull message
          res.status(200).send({
                  message: "Login Success",
                  success: true,
                  token,
                  user
      
          });
      
      } catch (error) {
          console.log(error);
          res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
      }
           
      };


module.exports = {loginController}