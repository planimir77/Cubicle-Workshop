const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const express = require('express');
const app = require('express')();
const connectionStr = process.env.SoftuniDb;
const mongoose = require('mongoose');


mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true, });

require('./config/express')(app, express);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
