//   This is the server.js file that shall be run in your container which will command your container to host the hello world message
//   This is a practice exercise in Docker to create and deploy a container that shall host a hello world on your localhost:8000
//   Made by Ujjwal Kumar


var http = require('http')     //creates a variable named http and assigns it a value

var port = 8000              //creates the port variable and assigns it the value from which we are going to access the image

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})                             //Adds a function to send the message Hello world through the http

server.listen(port)                   //Tells it to send the message through the previously mentioned var port

console.log('Server running at http://localhost:' + port)         //If everything works smoothly then you will recieve the given message on console
