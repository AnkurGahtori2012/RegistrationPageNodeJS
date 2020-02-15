const express=require('express');
const router=express.Router();
const api=require('./api')

router.get("/",(req,res)=>{
    res.send("I am working");
})
router.post("/createUser", (req,res)=>{
    api.createUser(req.body);
    res.send("Sucessfully");
})
module.exports=router;