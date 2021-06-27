const express=require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/form',(req,res)=>{
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail=`
        <h3>Contact Detais</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>req.body.message</p>
        `

        // let transporter=nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port:587,
        //     auth:{

        //     }
        // })
        // let mailOption={
        // }
    })
})


const PORT=process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`Server listening to port ${PORT}`);
})