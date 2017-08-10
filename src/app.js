var riot = require('riot');
var route = require('riot-route').default
require("./navigation.tag")
require("./sample.tag")



document.addEventListener('DOMContentLoaded', function() {
    route.start();


    route('new_place', function(id) {
        riot.mount('main', 'sample');
    });
    route.exec();

    riot.mount('navigation');
    riot.mount('sample');

})