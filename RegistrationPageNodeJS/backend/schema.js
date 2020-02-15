const mongooose=require('mongoose');
const myschema=mongooose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    country: {type: String}
},
{versionKey: false}
);
module.exports=mongooose.model("detail",myschema);
