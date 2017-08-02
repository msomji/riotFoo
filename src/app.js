require('./tags/navigation.tag');
require('./tags/content.tag');
var events = require('./data/eventStore.js');
var otherEvents = require('./data/othereventStore.js');


var riot = require('riot');
var route = require('riot-route/tag');



document.addEventListener('DOMContentLoaded', function(){

  route( function(page){
        if (page == 'events') {
            riot.mount('main', 'content', {event: events });
        } else if (page == "foobar"){
          riot.mount('main', 'content', {event: otherEvents });
        }
    });
  route.start(true);
  riot.mount('navigation');




});
