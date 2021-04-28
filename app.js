var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
const db_url = "mongodb+srv://luckonar:Luckonar123@cluster0.7agxc.mongodb.net/Hw14?retryWrites=true&w=majority";


http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var qobj = url.parse(req.url, true).query;
    var type = qobj.type; // assume x is querystring parameter
    var input = qobj.input;
    var query = new Object();
    query[type] = input;
    res.write("<h1>Stock Ticker App</h1>");
    res.write("<h3>" + type + ": " + input + "</h3>");

    res.write("<h3> result" + ": " + " </h3>");

    find(type, input, query).then(result => {
        console.log(result);
        res.end( result  );
    });

}).listen(port);



function createOption(type) {
    var answer = {
        "_id": 0,
        "Company": 0,
        "Ticker": 1
    };
    if (type == "Ticker") {
        return {
            "_id": 0,
            "Company": 1,
            "Ticker": 0
        };
    }
    return answer;
}



async function find(type, input, query) {
    try {
        client = new MongoClient(db_url, {
            useUnifiedTopology: true
        });
        await client.connect();
        var dbo = client.db("Hw14");
        var coll = dbo.collection("companies");
        var options = createOption(type);
        var promise;

        var results = "";
        var t1 = "Ticker";
        if (type == "Ticker") {
            t1 = "Company";
        }
        var answer = "";
        console.log(query);
        await coll.find(query, options).toArray().then(answer => {
            promise = new Promise(function(resolve, reject) {
                setTimeout(function() {
                    i = 1;
                    answer.forEach(function(item) {
                        results += "<h4>"+ t1 + " " + i + ": " + item[t1] + "\n" + "</h4>";
                        i++;
                    });
                    resolve(results );
                });
            });
        }).catch(err => console.log(err))
        return promise;

    } catch (err) {
        console.log("Database error: " + err);
    } finally {

        client.close();
    }

}