var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas <br>');

    res.end();
}).listen(port);


var readline = require('readline');
var fs = require('fs');
var companies = new Array;
var tickers = new Array;
var myFile = readline.createInterface({
  input: fs.createReadStream('companies.csv')
});
myFile.on('line', function(line){
  var parseLine = line.split(',');
  companies.push(parseLine[0]);
  console.log(companies);
  console.log("->");
  tickers.push(parseLine[1]);
  console.log(tickers);
});