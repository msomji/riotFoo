var express = require('express');
var server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/src');

server.use(express.static('src'));




server.get('/', function(req, res) {
    console.log('we are getting a request on /');
    res.render('index.html');
});

server.get('/*', function(req, res) {

    console.log('we are getting a request on /*');
    res.render('index.html');

});

server.listen(3000, function() {
    console.log('fire her up!');
});