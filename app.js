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

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority";

MongoClient.connect(url,function(err, db){
  if(err){return console.log(err); return;}
  var dbo = db.db("Hw14");
  var collection = dbo.collection('companies');
  for(i = 1; i < companies.length; i++){
    var newData = {"Company": companies[i], "Ticker": tickers[i]};
      console.log("new document inserted");
    });
  }
  db.close();
});