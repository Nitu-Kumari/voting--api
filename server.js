const express = require('express');
const Controller=require('./Controller');

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/voting',Controller.getAllVoting);
app.listen(8080,()=>console.log('sever started'));