import express from 'express';
import { upload } from '../middlewares/multer.middleware.js';
import { uploadfile } from '../controllers/skills.controller.js';

const skillsRouter = express.Router();



skillsRouter.route('/addSkills').post(

   upload.single('data'),
   uploadfile
)


export {skillsRouter};