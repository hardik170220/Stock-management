import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
 Fname:{
   type:String,
   required:true,
 } ,
 Lname:{
  type:String,
  required:true,
} ,
email: {
    type:String,
    required:true,
   
 },
password:{
    type:String,
    required:true
 },
//  about:{
//    type:String,
//    required:true
//  },



});

  export const User=  mongoose.models.user|| mongoose.model("user", userSchema);


  