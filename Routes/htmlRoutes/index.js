const path = require('path');
const router = require('express').Router();

//Route for Index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

//Route for the /notes.html page

//Route to catch all routes that do not exist for the site
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;