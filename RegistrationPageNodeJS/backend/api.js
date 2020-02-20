var db = require('./schema');
module.exports = {
    allUser:()=>
    new Promise((resolve,reject)=>{
        db.find({},{_id:0},(err,data)=>{
            if(!err){
                resolve(data);
            }
            else{
                reject("Error");
            }
        })
    }),
    getUserById: (userEmail) =>
        { return new Promise((resolve, reject) => {
            db.findOne({
                "email": userEmail
            }, (err, data) => {
                if (err)
                    reject(err)
                else
                    if(!data){
                        resolve();
                    }
                    else{
                        reject();
                    }
            })
        })},

    createUser: (data) => db.create(data),
    loginUser: (data) => {
        return new Promise((resolve, reject) => {
            let email = data.email;
            let password = data.password;
            let filter = {
                "email": email,
                "password": password
            }
            // console.log(filter);
            db.findOne(
                filter, (err, data) => {
                    if (err) {
                        console.log("Invalid Detail or Somthing went Wrong");

                    } else {
                        if (!data) {
                            reject('Error');
                        }
                        resolve(data);
                    }
                });

        })
    }
    
}