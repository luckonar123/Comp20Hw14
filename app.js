const MongoClient = require('mongodb').MongoClient;
const url =     "mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority"


MongoClient.connect(url, function(err, db) {
  if(err) { return console.dir(err); }
  var dbo = db.db("Hw14");
  var query = {};
  dbo.collection("companies").find(query).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
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
    

var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas <br>');

    res.end();
}).listen(port);