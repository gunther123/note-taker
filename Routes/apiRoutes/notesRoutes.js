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

//Allows writing of new note to db.json
router.post("/notes", function (req, res) {
    const currentNote = req.body
    let notesArr = []
    fs.readFile(path.join("./db/db.json"), "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        //If nothing in the database, create first note with id of 1
        if (data === "") {
            notesArr.push({ "id": 1, "title": currentNote.title, "text": currentNote.text });
        } else {
            notesArr = JSON.parse(data);
            notesArr.push({ "id": notesArr.length + 1, "title": currentNote.title, "text": currentNote.text });
        }
        // updated notes pushed to db.json
        fs.writeFile((path.join("./db/db.json")), JSON.stringify(notesArr, null, 2), function (error) {
            if (error) { return console.log(error); }
            res.json(notesArr);
        });
    });
  });

  module.exports = router