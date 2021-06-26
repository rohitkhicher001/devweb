const express=require("express");
const router=express.Router();
const User=require("../models/userschema");
router.get("/",(req,res)=>{
      res.send("hello from router side");
});

router.post("/register",async(req,res)=>{
    const {firstname,lastname,email,password,confirmpassword}=req.body;
    if(!firstname||!lastname||!email||!password||!confirmpassword){
        return res.status(422).json({error:"USER ALREADY EXIST"});
    }
    try{
        const userExist=await User.findOne({email:email});
        if(userExist){
         return res.status(422).json({error:"EMAIL ALRADY EXIST"});
        }
 
        const user=new User({firstname,lastname,email,password,confirmpassword});
 
        const userRegister=await user.save();
        if(userRegister){
         return res.status(201).json({message:"USER REGISTER SUCCESSFULLY"});
        }
        else{
         return res.status(201).json({message:"REGISTER NOT SUCCESSFULL"});
        }
    }catch(err){
        console.log("aagya");
       console.log(err);
    }
})
module.exports=router;
