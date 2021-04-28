
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var qs = require('querystring');
const MongoClient = require('mongodb').MongoClient;

// connection string
const mongoUrl = "mongodb+srv://amybui:dbUser2014@cluster0.u3iji.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const server = http.createServer((req, res) => {
    // create filepath for any page
    var filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );