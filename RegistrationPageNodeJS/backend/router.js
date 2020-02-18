const express = require('express');
const router = express.Router();
const api = require('./api')
const fs = require('fs')
router.get("/", (req, res) => {
    console.log("here cookies are: ",req.cookies);
    res.render('index9.html');
})
router.post("/createUser", async (req, res) => {
    try {
        await api.getUserById(req.body.email);
        await api.createUser(req.body);
        res.end('<script>location.href="index2.html"</script>');
    } catch (err) {
        res.send('<script>alert("Email address already exist");location.href="index9.html"</script>');
    }
})

router.get('/allUser', async (req, res) => {
    try {
        let data = await api.allUser();
         res.render('admin/adminpage.html',{'data':data});
       // res.send(data);
    } catch (err) {
        console.log("error");
        res.end("some error might be there");
    }
})
router.post("/loginUser", async (req, res) => {
    try {
        let result = await api.loginUser(req.body);
        res.redirect("actualgame/index3.html");

    } catch (err) {
        res.write("<script>alert('Invalid detail');location.href='index2.html'</script>");
        res.end();
    }
})
module.exports = router;