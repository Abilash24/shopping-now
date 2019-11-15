const mongoose=require('mongoose');

const userschema= mongoose.Schema({

  name:{type:String,
  unique:true,
  required:true},
  username:{type:String,
  unique:true,
  required:true},
  password:{type:String,
  unique:true,
  required:true}

});

module.exports=mongoose.model('Users',userschema,'Users');

