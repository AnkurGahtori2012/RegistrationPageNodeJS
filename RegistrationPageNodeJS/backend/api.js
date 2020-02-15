var db=require('./schema');
module.exports={
    createUser:(data)=>{
        db.create(data);
    }
}