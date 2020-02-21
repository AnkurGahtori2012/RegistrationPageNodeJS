const mongoose=require('mongoose');
let Schema=mongoose.Schema;
const userSchema=new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email:{type:String},
    state: {type: String},
    password:{type:String},
    username:{type:String},
    googleid:{type:String},
    img:{type:String},
    total:{type:Number,default:0},
    win:{type:Number,default:0}
},
{versionKey: false}
);
module.exports=mongoose.model("detail",userSchema);
