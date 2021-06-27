const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
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
userSchema.pre('save',async function(next){
    console.log("Yaha pe");
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();
})
const User=new mongoose.model("User",userSchema);
module.exports=User;
