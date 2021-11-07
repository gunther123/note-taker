const router = require('express').Router();

router.get("/notes", function (req, res) {
    if (req){
        console.log("hello");
    }
    res.json("hello!")
    });