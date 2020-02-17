const express = require('express');
const router = express.Router();
const api = require('./api')
const fs = require('fs')
router.get("/", (req, res) => {
    res.send("I am working");
})
router.post("/createUser", async (req, res) => {
    try {
        console.log("Called")
        let user = await api.getUserById(req.body.email)
        await api.createUser(req.body)
        res.end('<script>location.href="current/index2.html"</script>')
    } catch (err) {
        res.send('<script>alert("Email address already exist");location.href="current/index.html"</script>');
    }
})
router.post("/loginUser", async (req, res) => {
    try {
        let result = await api.loginUser(req.body);
        res.redirect("index.html");
    } catch (err) {
        res.send("<script>alert(\"Invalid detail\");location.href='current/index2.html'</script>");
    }

})
module.exports = router;