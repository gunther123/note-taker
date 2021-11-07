const fs = require('fs')
const router = require('express').Router();
const notesRoutes = require('express').Router();

router.use(notesRoutes);

module.exports = router;
  