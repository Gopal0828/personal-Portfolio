import { asyncHandler } from "../utils/asynchandler.js";


const addSkills = asyncHandler(async (req, res) => {

   const {title, skills} = req.body;

   try {

      
      
   } 
   catch (error) {
      
      return res.status(500)
      .json({success: false})
   }

})