const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true,
    unique:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    min:6
  },
  
},{timestamps:true})

module.exports = mongoose.model("User",userSchema)