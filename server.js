const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Add Api Routes
app.use('/api', apiRoutes);

//Add HTML Routes
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });