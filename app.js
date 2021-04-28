//get each line from .cvs file
var readline = require('readline');
var fs = require('fs');

var companiesToTickers = {}
var tickersToCompanies = {}


//connect to mongo 
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority";


MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }
  var dbo = db.db("Hw14");
  var query = {};
  dbo.collection("companies").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    for (i = 0; i < result.length; i++) {
      companiesToTickers[result[i].Company] = result[i].Ticker;
      if (tickersToCompanies[result[i].Ticker] == undefined) {
        tickersToCompanies[result[i].Ticker] = "";
      } else {
        tickersToCompanies[result[i].Ticker] += ", ";
      }
      tickersToCompanies[result[i].Ticker] += result[i].Company;
      console.log(result[i].Ticker + " " + result[i].Company);
    }
    db.close();
  });
});



connect to heroku
var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("hello");
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
    
    if(companyInput == "" && tickerInput == ""){
      return;
    }
    if(companyInput != "" && tickerInput != ""){
      return;
    }
    
    //get ticker name
    if(companyInput == ""){
      companyResult = tickersToCompanies[tickerInput];
      res.json({callback: companyResult});
      res.send(companyResult)
      res.sendFile('index.html', {root : __dirname});
      return;
    }
    //get company name
    if(tickerInput == ""){
      tickerResult = companiesToTickers[companyInput];
      res.json({callback: companyResult});
      res.send(tickerResult)
      res.sendFile('index.html', {root : __dirname});
      return;
    }
});

const server = http.createServer((req, res) => {
    // create filepath for any page
    var filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server running on port ${port}`));
