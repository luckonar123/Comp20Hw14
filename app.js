var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas');
    res.write('I live in asstown');
    res.write('dick');

    res.end();
}).listen(8080);