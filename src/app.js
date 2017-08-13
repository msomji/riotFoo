var riot = require('riot');
var route = require('riot-route').default
require("../tags/navigation.tag")
require("../tags/sample.tag")
require("../tags/tagone.tag")
require("../tags/tagtwo.tag")
require("../tags/tagthree.tag")


route.start();
route.base('/')

route('/tagone', function(id) {
    riot.mount('main', 'tagone');
});

route('/tagtwo', function(id) {
    riot.mount('main', 'tagtwo');
});

route('/tagthree', function(id) {
    riot.mount('main', 'tagthree');
});

route.exec();

route('/', function(id) {
    window.location.reload();
});

riot.mount('navigation');
riot.mount('sample');