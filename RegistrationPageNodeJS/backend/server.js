var express=require('express');
var app=express();
const port=8081;
const hotname="127.0.0.1";
const router=require("./router");
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('/home/com64/Desktop/w3Demo/hangMan/actualgame'));
app.use('/current',express.static('/home/com64/Desktop/Registration/RegistrationPageNodeJS/frontend'))
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/detail",(err,result)=>{
    if(result)console.log("connected successfully");
    else console.log("Error");
})

app.listen(port,hotname,()=>{
    console.log("Server running");
})
app.use("/",router);