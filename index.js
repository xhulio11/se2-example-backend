import * as dotenv from 'dotenv'
dotenv.config();

import express from "express";
import bodyParser from 'body-parser';

const { PORT } = process.env;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function(req, res){
    const { NAME } = process.env;
    res.send(`Hello World! This is ${NAME}`);
});

app.post('/', function(req, res){
    const { name } = req.body;
    res.send(`Hello ${name}`);
});

app.listen(PORT || 3000);