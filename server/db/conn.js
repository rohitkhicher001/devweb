const mongoose=require("mongoose");

const DB='mongodb+srv://lalit:lalit2000@cluster0.ciito.mongodb.net/loginsignup?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connect to database");
}).catch((e)=>{
    console.log("not connect");
});