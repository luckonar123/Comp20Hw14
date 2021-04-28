var http = require('http');
var port = process.env.PORT || 3000;
http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello my name is Lcuas');
    res.write('I live in asstown');
    res.write('dick');

    res.end();
}).listen(port);


app.use(express.urlencoded());

app.use(express.json());

app.post('/', function(request, response){
    console.log(request.body.ticker);
    console.log(request.body.button);
});

res.write(body.ticker);