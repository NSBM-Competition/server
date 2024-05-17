const addUserModel = require("../../model/AddUserModel/AddUserModel")
const bcrypt = require('bcrypt');
const { sendEmail } = require('../../service/emailServices');


const AddUserController = async (req, res) => {
   try {
      console.log(req.body);

      // if(req.body.password != req.body.confirmedPassword){
      //    res.status(400).send({
      //       success: false,
      //       message: "Password and Confirm Password does not match",
      //    })
   
      // }

      // bcrypt the userPassword
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;

      const addUserResponse = new addUserModel(req.body)

      await addUserResponse.save()

      res.status(200).send({
         success: true,
         message: "User Created Successfully",
         data: addUserResponse,
      })

   } catch (error) {
      res.status(400).send({
         success: false,
         message: "Failed to add user",
         error: error.message,
      })
   }
}


module.exports = { AddUserController }