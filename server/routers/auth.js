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

//Sign In
router.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(req.body);
        if(!email||!password){
            console.log(req.body);
            return res.status(422).json({error:"PLEASE FILL THE DETAILS CORRECTLY"});
        }
        const userLogin=await User.findOne({email:email});
        if(!userLogin){
            res.json({message:"User Not Exist"});
        }
        else
        {
            res.status(200).json({message:"SignIn Successfully"});
            console.log(userLogin);
        }
    }catch(err){
        res.status(401).json({message:"INVALID CREDENTIAL"});
    }
})
module.exports=router;
