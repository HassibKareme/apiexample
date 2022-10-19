const express = require('express'); //Library van express gebruiken
require('dotenv').config(); //Definieren dat we gebruik maken van dotenv package
const mongoose = require('mongoose');
const serverless = require('serverless-http')
const router = require('./routes');

const app = express(); //Gebruik maken van methode express, in constante steken.

app.use(express.json());
app.use('/.netlify/functions/api', router); //We werken met een website netlify. Dus mappen een beetje aanpassen.

mongoose.connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

module.exports.handler = serverless(app);

