const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( { 
  title:
   {
       type : String, 
       required : [true , "Please , enter title"], 
       unique : true,
       trim : true
    },
  excerpt: {
      type : String, 
      required : [true , "Please , enter excerpt"],
      trim : true 
    }, 
  userId: {
      type : ObjectId, 
      ref : "user" ,
      required : [true , "Please , enter userId"],
      trim : true
    },
  ISBN: {
      type : String, 
      required : [true , "Please , enter ISBN"] , 
      unique : true ,
      trim : true
    },
  category: {
      type : String, 
      required : [true , "Please , enter category"],
      trim : true
    },
  subcategory: {
      type : [String] , 
      required : [true , "Please , enter subcategory"],
      trim : true
    },
  reviews: {
      type : Number, 
      default: 0,
      trim : true
    },
  deletedAt: {
      type : Date,
      default : "",
      trim : true
    }, 
  isDeleted: {
      type : Boolean, 
      default: false,
      trim : true
},
  releasedAt: {
      type: Date, 
      required : true , 
      format : ("YYYY-MM-DD") ,
      trim : true
}} , { timestamps: true });

module.exports = mongoose.model('book', bookSchema)