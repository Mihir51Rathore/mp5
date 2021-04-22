var net = require('net');
var client = net.connect(6969);
console.log('Connected to Server!')

client.write('69');

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('I have disconnected!')
});