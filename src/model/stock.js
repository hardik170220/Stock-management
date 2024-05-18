import mongoose, { Schema } from "mongoose";
const stockSchema = new Schema({
 sname:{
   type:String,
   required:true,
 } ,
quantity: {
    type:Number,
    required:true,
   
 },
price:{
    type:Number,
    required:true
 },
 userId:{
  type:mongoose.ObjectId,
    required:true
 }
//  about:{
//    type:String,
//    required:true
//  },



});

  export const Stock =  mongoose.models.stock|| mongoose.model("stock", stockSchema);


  