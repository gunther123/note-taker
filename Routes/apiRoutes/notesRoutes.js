const router = require('express').Router();
const fs = require('fs');
const path = require('path')

//Gets current notes from db.json file
router.get("/notes", function (req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        throw err;
      }
      const notes = JSON.parse(data);
      res.json(notes);
    });
  });

  module.exports = router