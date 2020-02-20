var express = require('express');
var cookieParser = require('cookie-parser');
var ejs = require('ejs');
const router = require("./router");
const bodyParser = require('body-parser')
const port = 8081;
const hostname = "0.0.0.0";
const passport = require('passport');
const passportSetup = require('./passport');
const cookieSession = require('cookie-session');
// var multer = require('multer')
var app = express();
// var upload = multer({
//     dest: 'RegistrationPageNodeJS/backend/uploads'
// })
app.use(cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: ["koibhirandomkideskteh"]
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
    extended: true
}))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', 'RegistrationPageNodeJS/frontend')
app.use(cookieParser());
app.use(express.static('RegistrationPageNodeJS/frontend'))
const mongoose = require('mongoose');
//ejs
mongoose.connect("mongodb://localhost:27017/detail", (err, result) => {
    if (result) console.log("connected to Database successfully");
    else console.log("Error");
})


app.use("/", router);
app.listen(port, hostname, () => {
    console.log(`Server running -> ${hostname}:${port}`);
})