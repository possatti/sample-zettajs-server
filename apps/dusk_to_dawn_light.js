
module.exports = function(server) {
  var photocellQuery = server.where({ type: 'photocell' });
  var ledQuery = server.where({ type: 'led' });
  server.observe([photocellQuery, ledQuery], function(photocell, led){
    photocell.streams.intensity.on('data', function(m) {
      if(m.data < 0.5) {
        if (led.available('turn-on')) {
          led.call('turn-on');
        }
      } else {
        if (led.available('turn-off')) {
          led.call('turn-off');
       }
     }
   });
});}
