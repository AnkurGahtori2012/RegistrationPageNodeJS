var express=require('express');
var cookieParser=require('cookie-parser');
var ejs=require('ejs');
const router=require("./router");
const bodyParser=require('body-parser')
const port=8081;
const hostname="0.0.0.0";


var app=express();


app.use(bodyParser.urlencoded({ extended: false }))
app.engine('html',ejs.renderFile)
app.set('view engine','html')
app.set('views','RegistrationPageNodeJS/frontend')
app.use(cookieParser());
app.use(express.static('RegistrationPageNodeJS/frontend'))
const mongoose=require('mongoose');
//ejs
mongoose.connect("mongodb://localhost:27017/detail",(err,result)=>{
    if(result)console.log("connected to Database successfully");
    else console.log("Error");
})

app.listen(port,hostname,()=>{
    console.log(`Server running -> ${hostname}:${port}`);
})
app.use("/",router);