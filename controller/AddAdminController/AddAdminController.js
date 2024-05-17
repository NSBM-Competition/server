const AddAdminModel = require("../../model/AddAdminModel/AddAdminModel")
const bcrypt = require('bcrypt');


const AddAdminController = async(req,res)=>{
   try {
        console.log(req.body)
  
        // bcrypt the userPassword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
  
        const addUserResponse = new AddAdminModel(req.body)
  
        await addUserResponse.save()
  
        res.status(200).send({
           success: true,
           message: "Admin Created Successfully",
           data: addUserResponse,
        })
   } catch (error) {
       res.status(400).send({
          success:false,
          message:"Failed to add admin",
          error
       }) 
   }
}

module.exports = {AddAdminController}