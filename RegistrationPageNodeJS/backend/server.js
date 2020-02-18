var express=require('express');
var app=express();
const port=8081;
const hotname="192.168.100.189";
const router=require("./router");
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('RegistrationPageNodeJS/frontend'))
const mongoose=require('mongoose');
//ejs
mongoose.connect("mongodb://localhost:27017/detail",(err,result)=>{
    if(result)console.log("connected successfully");
    else console.log("Error");
})

app.listen(port,hotname,()=>{
    console.log("Server running");
})
app.use("/",router);