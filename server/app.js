const express=require("express");
const app=express();
const mongoose=require("mongoose");
require("./db/conn.js");
app.use(express.json());
const User=require("./models/userschema.js");
app.use(require('./routers/auth'));
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.get("/about",(req,res)=>{
    console.log("about page");
    res.send("about ka page");
})
app.listen(3000,()=>{
    console.log("listen to port 3000.....");
})