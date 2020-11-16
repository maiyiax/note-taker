// Dependencies
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// set Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public folder a static resource
app.use(express.static('public'));

// user apiRoutes
const apiRoutes = require('./routes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// set up listener
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!` )
})