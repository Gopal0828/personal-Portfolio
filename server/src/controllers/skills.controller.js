import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asynchandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";


const addSkills = asyncHandler(async (req, res) => {

   const {title, skills} = req.body;

   try {

      
      
   } 
   catch (error) {
      
      return res.status(500)
      .json({success: false})
   }

})


const uploadfile = asyncHandler(async (req, res) => {
   
   


   const response = await uploadOnCloudinary(req.file.path);

   console.log("response", response);

   return res.status(200)
   .json({success: true, response});
   
})

export {addSkills, uploadfile};