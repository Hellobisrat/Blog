const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Types.ObjectId,
    ref:'user',
    required:true
  },
  title:{
    type:String,
    required:true,
    min:4
  },
  desc:{
    type:String,
    required:true,
    min:12
  },
  photo:{
    type:String,
    required:true,

  },
  category:{
    type:String,
    required:true,

  },
  featured:{
    type:Boolean,
    default:false,

  },
  views:{
    type:Number,
    default:0

  },
  likes: {
    type:[String],
    default:[]
  }
},{timestamps:true})

module.exports = mongoose.model("Blog",blogSchema)