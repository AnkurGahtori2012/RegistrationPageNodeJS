const mongooose=require('mongoose');
const myschema=mongooose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email:{type:String},
    state: {type: String},
    password:{type:String}
},
{versionKey: false}
);
module.exports=mongooose.model("detail",myschema);
