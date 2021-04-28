const MongoClient = require('mongodb').MongoClient;
const url = 
"mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority";

 MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
      if(err) { return console.log(err); return;}  
        var dbo = db.db("Hw14");
        var collection = dbo.collection('companies');
        console.log("Success!");
        db.close();
    });
    

    
    

var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas <br>');

    res.end();
}).listen(port);