var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var qobj = url.parse(req.url, true).query;
    var txt = qobj.id;
    res.write("the value is: " + txt);
    res.end();
}).listen(port);



const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority";

MongoClient.connect(url,function(err, db){
  if(err){return console.log(err); return;}
  var dbo = db.db("Hw14");
  var collection = dbo.collection('companies');
  for(i = 1; i < companies.length; i++){
    var newData = {"Company": companies[i], "Ticker": tickers[i]};
    collection.insertOne(newData, function(err,res){
      console.log("new document inserted");
    });
  }
  db.close();
});