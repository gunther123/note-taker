const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Add Api Routes
app.get("/api/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, notes) {
        if (err) {
            console.log(err)
            return
        }
        res.json(JSON.parse(notes));
    })
  });
//Add HTML Routes
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });