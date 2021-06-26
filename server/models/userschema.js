const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})

const User=new mongoose.model("User",userSchema);
module.exports=User;
