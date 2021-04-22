var net = require('net');
var client = net.connect(6969);
console.log('Connected to Server!')

client.write('hello world');

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log("I've disconnected!")
});