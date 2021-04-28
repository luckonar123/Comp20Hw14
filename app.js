var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas <br>');

    res.end();
}).listen(port);


var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.sendFile('index.html', {root : __dirname});
})

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/',function(req,res){
    var companyInput = req.body.company;
    var tickerInput = req.body.ticker;