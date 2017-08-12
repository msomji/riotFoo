var express = require('express');
var server = express();
var route = require('riot-route').default

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.set('views', __dirname + '/src');

server.use(express.static('src'));

server.get('/', function(req, res) {
    res.render('index.html');
});
server.get('/*', function(req, res) {
    res.render('index.html');
});

server.listen(3000, function() {
    console.log('fire her up!');
});