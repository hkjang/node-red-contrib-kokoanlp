const Kokoa = require('kokoanlp');
const kokoa = Kokoa.load('./data/kokoa.*.csv');

module.exports = function (RED) {
  function kokoanlp(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      // self.error(process.env.PWD);
      if(typeof msg.api === 'undefined'){
        msg.api = 'words';
      }
      msg.payload = kokoa[msg.api](msg.payload);
      self.send(msg);
    });
  }
  RED.nodes.registerType('kokoanlp', kokoanlp);

};
