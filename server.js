var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');

zetta()
  .name('C-3PO')
  .use(LED)
  .listen(1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});