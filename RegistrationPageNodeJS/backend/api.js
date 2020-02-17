var db = require('./schema');
module.exports = {

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
            console.log(filter);
            db.find(
                filter, (err, data) => {
                    if (err) {
                        console.log("Invalid Detail or Somthing went Wrong");

                    } else {
                        if (data.length == 0) {
                            reject('Error');
                        }
                        console.log("Call reached here");
                        resolve(data);
                    }
                });

        })
    }
}