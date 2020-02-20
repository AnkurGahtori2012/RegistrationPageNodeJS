const express = require('express');
const router = express.Router();
const api = require('./api')
const fs = require('fs')
const passport = require('passport');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

var upload = multer({
    storage: storage
})
router.get("/", (req, res) => {
    res.render('index9.html');
})
// (req,res,next)=>{
//     req.on('data',(val)=>{
//         console.log('********\n\n\n',val);
//         console.log('********\n\n\n8888888888888888888888888888888888888888888888888888888888888888');
//     })
//     next();
// } , middileware belowcan be used
router.post("/createUser",upload.single('image'), async (req, res, next) => {
    
    try {
        console.log(req.body);
        await api.getUserById(req.body.email);
        req.body['img']=req.file.path;
        console.log(req.body);
        
        await api.createUser(req.body);
        res.render("index2.html");
    } catch (err) {
        res.send('<script>alert("Email address already exist");location.href="/"</script>');
    }
})
router.get('/login', (req, res) => {
    res.render('index2.html');
})
router.get('/allUser', async (req, res) => {
    try {
        let data = await api.allUser();
        res.render('admin/adminpage.html', {
            'data': data
        });
        // res.send(data);
    } catch (err) {
        console.log("error");
        res.end("some error might be there");
    }
})
router.post("/loginUser", async (req, res) => {
    try {
        let data = await api.loginUser(req.body);
        res.render("actualgame/index3.html", {
            user: data
        });
    } catch (err) {
        res.write("<script>alert('Invalid detail');location.href='/'</script>");
        res.end();
    }
})
router.get('/logout', (req, res) => {
    req.logOut();
    res.end('<script>location.href="../"</script>');
})
router.get('/auth/login',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
router.get('/auth/login/redirect', passport.authenticate('google'), (req, res) => {
    // console.log('inside redirect method');
    // console.log(req.user);
    res.redirect('/game');
})
router.get('/game', (req, res) => {
    // console.log("inside profile block");
    // console.log(req.user);
    if (req.user) {
        res.render("actualgame/index3.html", {
            user: req.user
        });
    } else {
        res.end('<script>alert(" Login First");location.href="../"</script>')
    }
})
module.exports = router;