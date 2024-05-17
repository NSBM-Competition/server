const bcrypt = require('bcrypt');
const RegistrationModel = require('../../model/RegistrationModel/RegistrationModel');

// Handle the user login
const loginController = async (req, res) => {
      console.log(req.body);
        try {
          const user = await RegistrationModel.findOne({ email: req.body.email });
          if (!user) {
                  return res.status(200).send({
                          message: "user not found",
                          success: false
                  });
          }
      
          // compare the password and hashedpassword
          const isMatch = await bcrypt.compare(req.body.password, user.password);
      
          // check the passwords are match or not
          if (!isMatch) {
                  return res.status(200).send({
                          message: "Invlid Email or Password",
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