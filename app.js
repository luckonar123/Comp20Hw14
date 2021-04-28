var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
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