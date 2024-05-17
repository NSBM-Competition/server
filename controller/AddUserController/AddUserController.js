

const AddUserController = async(req,res)=>{
  try {
     console.log(req.body);   
  } catch (error) {
       res.status(400).send({
          success:false,
          message:"Failed to add user",
          error:error.message,
       }) 
  }
}


module.exports = {AddUserController}