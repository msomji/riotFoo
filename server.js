var express = require('express');
var server = express();
var route = require('riot-route').default

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

server.set('views', __dirname + '/views');

server.use(express.static('public'));

server.get('/', function(req, res) {
    res.render('index.html');
});
server.get('/*', function(req, res) {
    res.render('index.html');
});

server.listen(3000, function() {
    console.log('fire her up!');
});