var riot = require('riot');
var route = require('riot-route').default
require("./navigation.tag")
require("./sample.tag")


route.start();
route.base('/')

route('/new_place', function(id) {
    riot.mount('main', 'sample');
});

route.exec();

route('/', function(id) {
    window.location.reload();
});

riot.mount('navigation');
riot.mount('sample');