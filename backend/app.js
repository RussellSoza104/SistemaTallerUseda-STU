const express = require('express');
const logger = require('morgan')
const routes = require('./routes/index');
var compression = require('compression')

const app =  express();

//Middlewares 
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use(compression())

//Routes
app.use('/api/', routes);

module.exports = app;   