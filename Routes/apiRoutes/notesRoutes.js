const router = require('express').Router();
const fs = require('fs');
const path = require('path')

//Gets current notes from db.json file
router.get("/notes", function (req, res) {
    //Read current DB file to get current notes
    let currentNotes = fs.readFileSync("./db/db.json", "utf8");
        //Parse data from file into an array
        currentNotes = JSON.parse(currentNotes);
        //Return all current notes
        res.json(currentNotes);
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
        // Adds new note to db.json
        fs.writeFile((path.join("./db/db.json")), JSON.stringify(notesArr, null, 2), function (error) {
            if (error) { return console.log(error); }
            res.json(notesArr);
        });
    });
  });

  router.delete("/notes/:id", function (req, res) {
    //Get current notes
    let currentNotes = fs.readFileSync("./db/db.json", "utf8");
    //Get current notes in an array
    currentNotes = JSON.parse(currentNotes);
    //Returns all notes but the id needing to be deleted
    currentNotes = currentNotes.filter(function (note) {
      return note.id != req.params.id;
    });
    //Adds list of all filtered notes
    fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));

    res.json(currentNotes);
  });

  module.exports = router