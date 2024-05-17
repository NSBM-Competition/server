const RegistrationModel = require('../../model/RegistrationModel/RegistrationModel');

const GetAllRegisteredUserDetailsController = async(req,res)=>{
  try {
    const registerUserDetails = await RegistrationModel.find({});
    res.status(200).send({
        success:true,
        message:"Data Fetch Successfully",
        registerUserDetails
    })

  } catch (error) {
        res.status(400).send({
            success:false,
            message:"error in get all registered user details",
            error
        })
  }
}

module.exports = {GetAllRegisteredUserDetailsController}