/**
 * Created by wesleyrobinson on 4/16/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');

app.use(express.static('build'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('index.html');
});

app.post('/', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log('request');
    // var data = req.body;
    // var dataFile = fs.createWriteStream('data.json');
    // fs.createReadStream(data).pipe(dataFile);
    res.send(req.body);
});

app.listen(3000, function () {
    console.log('running')
});