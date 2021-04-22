var net = require('net');
var clients = 0;

function checkPalindrome(str) {

    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return "It's not a palindrome";
        }
    }
    return "It's a palindrome";
}


var server = net.createServer(function(client) {

    console.log('Client Connected!');

    client.on('end', function() {
        console.log('Client disconnected!');
    })

    client.on('data', function(data) {
        client.write(checkPalindrome(data.toString()));
    })
});

server.listen(6969, function() {
    console.log('Server Started on port 6969');
})