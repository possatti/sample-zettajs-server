var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
var Photocell = require('zetta-photocell-mock-driver');

zetta()
  .name('C-3PO')
  .use(LED)
  .use(Photocell)
  .link('http://hello-zetta.herokuapp.com/')
  .listen(1337, function(){
    console.log('Zetta is running at http://127.0.0.1:1337');
});
