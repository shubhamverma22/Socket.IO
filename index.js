var express = require("express");
var socket = require("socket.io");
var app = express();


//Static Files
app.use(express.static('public'));


var server = app.listen(4000,() =>{
    console.log("Listening To Port 4000");
});


//Socket Setup
var io = socket(server);

io.on('connection',(socket) =>{
    console.log("Made Socket Connection",socket.id);
    
    //handle Chat Event
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });


    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    });
});