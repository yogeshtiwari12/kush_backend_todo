import mongoose from "mongoose";
const userSchema = new  mongoose.Schema({
serialno:{
    type:Number,
    required:true,
    unique:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
startDate:{
    type:Date,
    required:true
},
endDate:{
    type:Date,
    required:true
}
})

export const User = mongoose.model("kush_todo",userSchema,"kush_todo");
 export default User;