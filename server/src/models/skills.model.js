import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const skillsSchema = new Schema({

   title: {
      type: String,
      required: true,
   },

   skills: [{

      name: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      
   }]


}, { timestamps: true });



export const Skills = mongoose.model('Skills', skillsSchema);